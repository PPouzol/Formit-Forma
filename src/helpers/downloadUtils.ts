import { getGlbUrlMapAndAxmList, getPathToUrn } from "../helpers/loadUtils"
import { loadTerrain, requestAndLoadAxm, requestAndLoadGlb } from "./loadUtils"
import * as typesAndConsts from "../helpers/typesAndConstants"
import { downloadChildElements } from "../helpers/useLoadElements"
import { v4 as uuid } from "uuid"
import { createLayer } from "./layerUtils"
import { setGlobalState } from "../helpers/stateUtils"

export function downloadAllChild(proposalElement, authContext, elementResponseMap, loadedIntegrateElements) {
  let promises = []
    for (const child of proposalElement.children) {
      promises.push(downloadChildElements(
        child,
        authContext,
        elementResponseMap,
        loadedIntegrateElements
      ))
    }
    return promises
  }

export async function getUrlAndLoad(elementResponseMap, proposalElement, proposal, editingElementPath, 
  proposalCategorizedPaths, hiddenLayers, failureFallBack) {
    const pathMap = getPathToUrn(elementResponseMap, proposalElement.urn)
    const { glbUrlMap, axmList } = await getGlbUrlMapAndAxmList(
      elementResponseMap,
      pathMap,
      editingElementPath
    )
    let foundTerrainId: string
    let terrainObj: any;
    let createdObjs: any[] = []

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
          await loadTerrain(proposal.proposalId, terrainDetails, failureFallBack)
            .then((terrainPromiseResult) => {
              if(!terrainPromiseResult)
              {
                // an element can't be saved or loaded, abort the process
                return false;
              }
              terrainObj = terrainPromiseResult;
            })
        }
      }
      else {
        await requestAndLoadGlb(
            url,
            glbValue.elements,
            uuid(),
            proposalCategorizedPaths,
            hiddenLayers,
            failureFallBack
          )
          .then((promiseResult) => {
            if(!promiseResult)
            {
              // an element can't be saved or loaded, abort the process
                return false;
            }
            createdObjs.push(promiseResult);
          });
      }
    }
    
    for (const axmDetails of axmList) {
      const isEditingAxm = axmDetails.path === editingElementPath
        await requestAndLoadAxm(
          axmDetails,
          isEditingAxm,
          proposalCategorizedPaths,
          hiddenLayers,
          failureFallBack
        )
        .then((promiseResult) => {
          if(!promiseResult)
          {
            // an element can't be saved or loaded, abort the process
                return false;
          }
          createdObjs.push(promiseResult);
        });
    }

    await addTerrainToLayer(terrainObj)
      .then(async () => {
        await fixObjectsElevation(terrainObj, createdObjs, proposal.projectId)
      })

    return true;
  }

  async function addTerrainToLayer(terrainObj) {
    const terrainGroupId = terrainObj.allIdsCreated[0]
    let terrainInstanceId;

    const instanceIds = await WSM.APIGetObjectsByTypeReadOnly(
      typesAndConsts.MAIN_HISTORY_ID,
      terrainGroupId,
      WSM.nObjectType.nInstanceType
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
      const terrainElevationFixValue = Number(value.sValue)

      let transf3d = await WSM.Geom.Transf3d();
      let elevationTransf3D = await WSM.Geom.Vector3d(0.0, 0.0, terrainElevationFixValue);

      await WSM.Geom.TranslateTransform(
        transf3d,
        elevationTransf3D
      ).then(async (terrainElevationTransf3d) => {
        setGlobalState("terrainElevationTransf3d", terrainElevationTransf3d);

        const otherObjs: Array<typesAndConsts.CreatedObjectDetails> = createdObjs.filter((obj) => {
          return !obj.isTerrain && obj.needElevationFix
        })
  
        //handle other non-axm elements.
        for (const createdObj of otherObjs) {
          const bbox = await WSM.APIGetBoxReadOnly(typesAndConsts.MAIN_HISTORY_ID, createdObj.allIdsCreated[0])
          // Set the terrain 1 feet above ground
          const objElevation = bbox.lower.z
          //console.log(`object elevation: ${objElevation}`)
          let terrainElevationValue = -terrainElevationFixValue;
          const needElevationFix: boolean = objElevation - 150 < terrainElevationValue && terrainElevationValue < objElevation + 150;
          
          if(needElevationFix)
          {
            await WSM.APITransformObjects(typesAndConsts.MAIN_HISTORY_ID, createdObj.allIdsCreated, terrainElevationTransf3d)
            if (createdObj.idEditingForConversion) {
              await FormIt.GroupEdit.SetInContextEditingPath(createdObj.idEditingForConversion)
            }
          }
        }
      })
    } else {
      throw new Error("Error reading terrain transform from cached wsm, could not read attribute")
    }
  }
