import { BaseElement, Child, ElementResponse, BaseProperties } from "@spacemakerai/element-types"
import { getGlbUrlMapAndAxmList, getPathToUrn } from "../helpers/loadUtils"
import { getCache, setCache, deleteCacheForKey } from "../helpers/cacheUtils"
import { parseUrn, elementUrnToUrl } from "../helpers/elementUtils"
import { loadTerrain, requestAndLoadAxm, requestAndLoadGlb } from "./loadUtils"
import * as typesAndConsts from "../helpers/typesAndConstants"
import { downloadChildElements } from "../helpers/useLoadElements"
import FormaService from "../services/forma.service";
import { v4 as uuid } from "uuid"
import { createFile } from "./fileUtils"
import { createLayer } from "./layerUtils"
import { setGlobalState } from "../helpers/stateUtils"
import { syncCameraFromForma } from "../helpers/cameraUtils"

export function downloadAllChild(proposalElement, authContext, elementResponseMap) {
  let promises = []
    for (const child of proposalElement.children) {
      promises.push(downloadChildElements(
        child,
        authContext,
        elementResponseMap
      ))
    }
    return promises
  }

export async function getUrlAndLoad(elementResponseMap, proposalElement, proposalId, editingElementPath, 
  proposalCategorizedPaths, hiddenLayers) {
    const pathMap = getPathToUrn(elementResponseMap, proposalElement.urn)
    const { glbUrlMap, axmList } = getGlbUrlMapAndAxmList(
      elementResponseMap,
      pathMap,
      editingElementPath
    )
    let foundTerrainId: string
    let terrainPromise: Promise<typesAndConsts.CreatedObjectDetails>
    let glbLoadPromises: Array<Promise<typesAndConsts.CreatedObjectDetails>> = []
    let axmLoadPromises: Array<Promise<typesAndConsts.CreatedObjectDetails>> = []

    for (const [url, glbValue] of Object.entries(glbUrlMap)) {
      if (url.includes("terrain")) {
        //terrain should be 1 element
        const terrainDetails = glbValue.elements[0]

        //foundTerrainId is just being used to hold an id of the terrain we found. We only expect one terrain, but proposals can have multiple terrains at this time.
        //https://spacemakercore.slack.com/archives/CNXKMJTF1/p1676405173069109
        //Those should all be the same id though, so going to throw an error if we find a terrain with a different id, because what do we do then?!
        if (foundTerrainId) {
          if (foundTerrainId !== terrainDetails.id) {
            throw new Error(
              `Found terrain id ${terrainDetails.id} does not match id of previously found terrain id ${foundTerrainId}. Unable to determine which terrain to load.`,
            )
          } else {
            console.warn(
              `Found a duplicate terrain in proposal. This may not be a problem. ${terrainDetails.id}`,
            )
          }
        } else {
          foundTerrainId = terrainDetails.id
          terrainPromise = loadTerrain(proposalId, terrainDetails)
        }
      }
      else {
        glbLoadPromises.push(requestAndLoadGlb(
          url,
          glbValue.elements,
          uuid(),
          proposalCategorizedPaths,
          hiddenLayers
        ));
      }
    }
    
    for (const axmDetails of axmList) {
      const isEditingAxm = axmDetails.path === editingElementPath
      axmLoadPromises.push(
        requestAndLoadAxm(
          axmDetails,
          isEditingAxm,
          proposalCategorizedPaths,
          hiddenLayers,
        ),
      )
    }

    await Promise.all([
      terrainPromise,
      ...glbLoadPromises,
      ...axmLoadPromises
    ])
    .then(([terrainObj, ...createdObjs]) => {
      addTerrainToLayer(terrainObj)
        .then(async () => {
          fixObjectsElevation(terrainObj, createdObjs, proposalElement.projectId)
        })
    })
  }

  async function addTerrainToLayer(terrainObj) {
    const terrainGroupId = terrainObj.allIdsCreated[0]
    let terrainInstanceId

    const instanceIds = await WSM.APIGetObjectsByTypeReadOnly(
      typesAndConsts.MAIN_HISTORY_ID,
      terrainGroupId,
      WSM.nObjectType.nInstanceType,
    )

    if (instanceIds.length === 1) {
      terrainInstanceId = instanceIds[0]
    } else {
      console.error("Error getting terrain instance, did not create 1 instance")
    }

    const results = await Promise.all(createLayer(typesAndConsts.MAIN_HISTORY_ID, typesAndConsts.formItLayerNames.FORMA_TERRAIN))
    let formItTerrainLayerId = results[0];

    await FormIt.Layers.AssignLayerToObjects(formItTerrainLayerId, terrainInstanceId)
    await FormIt.Layers.SetLayerPickable(formItTerrainLayerId, false)

    const nRefHistID = await WSM.APIGetGroupReferencedHistoryReadOnly(typesAndConsts.MAIN_HISTORY_ID, terrainGroupId)
    const meshArray = await WSM.APIGetAllObjectsByTypeReadOnly(nRefHistID, WSM.nObjectType.nMeshType)

    const hintObject = {
      //@ts-ignore
      [WSM.INFERENCE_HINT_FORCEZNORMAL]: true,
      //@ts-ignore
      [WSM.INFERENCE_HINT_NO_VERTEX_INF]: true,
    }

    await WSM.Utils.SetOrCreateStringAttributeForObject(
      nRefHistID,
      meshArray[0],
      //@ts-ignore
      WSM.INFERENCE_HINT,
      JSON.stringify(hintObject),
    )
  }

  async function fixObjectsElevation(terrainObj, createdObjs, authContext) {
    //terrain allIdsCreated is length 1, already validated in terrainLoadPromise.
    const terrainGroupId = terrainObj.allIdsCreated[0]

    const attribIds = await WSM.APIGetStringAttributesByKeyReadOnly(
      typesAndConsts.MAIN_HISTORY_ID,
      terrainGroupId,
      //@ts-ignore
      FormIt.TERRAIN_KEY,
    )

    if (attribIds.length === 1) {
      const value = await WSM.APIGetStringAttributeKeyValueReadOnly(typesAndConsts.MAIN_HISTORY_ID, attribIds[0])
      const dMinElevation = Number(value.sValue)

      let transf3d = await WSM.Geom.Transf3d();
      let elevationTransf3D = await WSM.Geom.Vector3d(0.0, 0.0, dMinElevation);

      await WSM.Geom.TranslateTransform(
        transf3d,
        elevationTransf3D
      ).then(async (terrainElevationTransf3d) => {
        setGlobalState("terrainElevationTransf3d", terrainElevationTransf3d);

        const otherObjs: Array<typesAndConsts.CreatedObjectDetails> = createdObjs.filter((obj) => {
          return !obj.isTerrain && !obj.isAxm
        })
  
        //handle other non-axm elements.
        for (const createdObj of otherObjs) {
          await WSM.APITransformObjects(typesAndConsts.MAIN_HISTORY_ID, createdObj.allIdsCreated, terrainElevationTransf3d)
  
          if (createdObj.idEditingForConversion) {
            await FormIt.GroupEdit.SetInContextEditingPath(createdObj.idEditingForConversion)
          }
        }
        
        //await syncCameraFromForma(transf3d, terrainElevationTransf3d, authContext);
      })
    } else {
      throw new Error("Error reading terrain transform from cached wsm, could not read attribute")
    }
  }

  export async function getElementsAndSaveCache(authContext, proposal, callback) {
    const proposalElementResponse: ElementResponse = await FormaService.getProposalElement(
      proposal,
      authContext
    )
    if (!proposalElementResponse) {
      return
    }
    
    const proposalElement = Object.values(proposalElementResponse).find(
      (element: BaseElement) => {
        return element.properties.category === "proposal"
      },
    )

    //@ts-ignore   
    const terrainChild: Child = proposalElement?.children?.find((child: Child) => {
      return child.urn.includes("terrain")
    })
    saveToCache(terrainChild, authContext, proposal.proposalId, callback)
  }

async function saveToCache(terrainChild, authContext, proposalId, callback) {
  const terrainRevisionId = parseUrn(terrainChild.urn).revision

  let key = `3d-sketch-terrain-${proposalId}-revision-${terrainRevisionId}`;
  // first check that cache does not already exists.
  // if so, no need to go all over download logic again
  const cacheData = await getCache(key)
  if (!cacheData) {
    const elementUrlWithSuffix = elementUrnToUrl(terrainChild.urn, authContext)
    const dataRes: Response = await fetch(elementUrlWithSuffix)
    const elementStoreResponse = (await dataRes.json()) as ElementResponse

    let geometryFileUrl
    let materialId

    WSM.APIDeleteAllHistories()
    WSM.APICreateHistory(typesAndConsts.MAIN_HISTORY_ID)
    FormIt.UndoManagement.BeginState()

    //for terrain, should only be 1 urn
    if (Object.entries(elementStoreResponse).length === 1) {
      for (const [, element] of Object.entries(elementStoreResponse)) {
        geometryFileUrl = element.properties?.geometry?.volumeMesh?.url
        materialId = await requestAndLoadTerrainTextures(element.properties, authContext)
      }
    } else {
      throw new Error("Did not find exactly one terrain urn")
    }
    
    const tempGlbLocation = `terrain.glb`
    const tempWsmLocation = `terrain.wsm`
    
    let transf3d = await WSM.Geom.Transf3d()

    const point = await WSM.Geom.Point3d(0, 0, 0)
    const vector = await WSM.Geom.Vector3d(typesAndConsts.METERS_TO_FEET, typesAndConsts.METERS_TO_FEET, typesAndConsts.METERS_TO_FEET)
    const metersToFeetTransf3d = await WSM.Geom.MakeScalingTransform(point, vector)

    //@ts-ignore
    await WSM.Transf3d.Multiply(metersToFeetTransf3d, transf3d)
      .then(async (multiplyResult) => {
        transf3d = multiplyResult
        await createFile({
          fetchUrl: geometryFileUrl,
          savePath: tempGlbLocation,
          transf3d,
          materialId,
          tempWsmLocation, 
          key,
          proposalId,
          terrainRevisionId,
          callback
        }, 
        null, 
        true,
        loadVolumeData);
      });
  }
  else
  {
    if(callback)
    {
      callback();
    }
  }
}

async function loadVolumeData(args, callback) {
  await WSM.Glft.APILoadGltfFile(
    typesAndConsts.MAIN_HISTORY_ID,
    args.tempGlbLocation,
    args.transf3d,
    WSM.INVALID_ID,
    true,
    [],
    false,
  )
    .then(async () => {
      const ids = await WSM.APIGetAllObjectsByTypeReadOnly(0, WSM.nObjectType.nMeshType)

      await WSM.APISetObjectsMaterial(typesAndConsts.MAIN_HISTORY_ID, ids, args.materialId)

      if (ids.length !== 1) {
        throw new Error("3D Sketch terrain worker - Did not create exactly one terrain mesh")
      }

      const bbox = await WSM.APIGetBoxReadOnly(typesAndConsts.MAIN_HISTORY_ID, ids[0])
      // Set the terrain 1 feet above ground
      const dMinElevation = bbox.lower.z - 1.0

      const terrainElevationTransf3d = await WSM.Geom.TranslateTransform(
        await WSM.Geom.Transf3d(),
        await WSM.Geom.Vector3d(0.0, 0.0, -dMinElevation)
      )

      const terrainGroupId = await WSM.Utils.CreateAlignedAndCenteredGroup(typesAndConsts.MAIN_HISTORY_ID, ids)

      await WSM.APITransformObject(typesAndConsts.MAIN_HISTORY_ID, terrainGroupId, terrainElevationTransf3d)

      await WSM.Utils.SetOrCreateStringAttributeForObject(
        typesAndConsts.MAIN_HISTORY_ID,
        terrainGroupId,
        //@ts-ignore
        FormIt.TERRAIN_KEY,
        JSON.stringify(-dMinElevation),
      )

      await FormIt.UndoManagement.EndState("Initial State")

      await WSM.APISaveToFileReadOnly(typesAndConsts.MAIN_HISTORY_ID, terrainGroupId, args.tempWsmLocation, 0, true, 1, [])
      //@ts-ignore
      const binaryData = window.FormItModule.FormIt_ReadFile(tempWsmLocation)

      //remove any previous version of cached terrain for this proposal.
      deleteCacheForKey(`3d-sketch-terrain-${args.proposalId}`)

      setCache(args.key, binaryData)
      console.log(`persisted terrain in cache: ${args.proposalId}-revision-${args.terrainRevisionId}`)

      if(callback)
      {
        callback();
      }
    }); 
}

export async function requestAndLoadTerrainTextures(
    terrainProperties: BaseProperties,
    projectId: string,
  ): Promise<number> {
    const projectData: typesAndConsts.Project = await FormaService.getAsJson(`/api/projects/${projectId}`)
    const TEXTURE_BASE_URL = "/texture/v2"
    const srid = terrainProperties.geoReference.srid
    const bbURI = encodeURIComponent(JSON.stringify(terrainProperties.bbox))

    const mapTextureUrl = `${TEXTURE_BASE_URL}/texture.jpeg?countryCode=${projectData.countryCode}&srid=${srid}&bbox=${bbURI}&size=4096&projectId=${projectId}`

    const [mapTextureInfo] = await Promise.all([await FormaService.getAsJson(mapTextureUrl)])

    const textureUrl = mapTextureInfo.link
    const imageFileLocation = `terrainTexture.jpeg`

    const res = await fetch(textureUrl)

    if (res.ok) {
      const terrainImageBlob: Blob = await res.blob()
      let finalPath = await FormIt.FormaAddIn.CreateTempPath(imageFileLocation);
      const terrainImage = await createImageBitmap(terrainImageBlob, { imageOrientation: "flipY" })
      const offscreen = new self.OffscreenCanvas(terrainImage.width, terrainImage.height)
      const ctx = offscreen.getContext("bitmaprenderer")

      //@ts-ignore
      ctx.transferFromImageBitmap(terrainImage)
      //@ts-ignore
      const blob = await offscreen.convertToBlob()
      const dataArray = new Uint8Array(await blob.arrayBuffer())
      const textureId = await WSM.APICreateTexture(typesAndConsts.MAIN_HISTORY_ID, [...dataArray], true, finalPath)
      const materialId = await WSM.APICreateMaterial(
        typesAndConsts.MAIN_HISTORY_ID,
        WSM.Color(225, 225, 225, 255),
        1.0,
        1.0,
        textureId
      )

      return materialId
    }
  }