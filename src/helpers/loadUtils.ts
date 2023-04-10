
import { parseUrn } from "./elementUtils"
import { getCache } from "../helpers/cacheUtils"
import { getCategoryFromElementPath, createOrGetOutOfContextLayer } from "../helpers/layerUtils"
import * as typesAndConsts from "../helpers/typesAndConstants"
import { deleteFile, createFile } from "../helpers/fileUtils"
import {
  Urn,
  BaseElement,
  Child,
  ElementResponse,
  Transform
} from "@spacemakerai/element-types"
import { isEmpty } from "lodash-es"
import { v4 as uuid } from "uuid"
import { createLayer } from "./layerUtils"


export type InternalPath = string

export const transpose = (src: Transform) => {
    const dest = [...src]
  
    dest[0] = src[0]
    dest[1] = src[4]
    dest[2] = src[8]
    dest[3] = src[12]
    dest[4] = src[1]
    dest[5] = src[5]
    dest[6] = src[9]
    dest[7] = src[13]
    dest[8] = src[2]
    dest[9] = src[6]
    dest[10] = src[10]
    dest[11] = src[14]
    dest[12] = src[3]
    dest[13] = src[7]
    dest[14] = src[11]
    dest[15] = src[15]
  
    return dest
  }

export function getPathToUrn(
    elements: Record<Urn, BaseElement>,
    rootUrn: Urn,
  ): Record<typesAndConsts.InternalPath, Urn> {
    const idToUrns: Record<typesAndConsts.InternalPath, Urn> = {}
  
    const traverse = (child: Child, keys: string[] = []): void => {
      const element = elements[child.urn]
      if (!element) {
        throw new Error(`Child ${child.key} points to unknown urn ${child.urn}`)
      }
  
      const path = [...keys, child.key]
      const internalId = path.join("/")
      idToUrns[internalId] = child.urn
      element.children?.forEach((child) => traverse(child, path))
    }
    traverse({ urn: rootUrn, key: typesAndConsts.ROOT_KEY })
  
    return idToUrns
  }

export function getGlbUrlMapAndAxmList(
    elementResponseMap: Record<string, any>,
    pathMap: Record<typesAndConsts.InternalPath, Urn>,
    editingElementPath: typesAndConsts.InternalPath
  ) {
    const glbUrlMap: typesAndConsts.GlbUrlMap = {}
    const axmList: typesAndConsts.AxmList = []
  
    for (const [path, urn] of Object.entries(pathMap)) {
      const element = elementResponseMap[urn]
  
      const parentPath = path.split("/").slice(0, 2).join("/")
  
      const referenceFormats = element.properties.spacemakerObjectStorageReferenceFormats
      const hasAxmReference: boolean = referenceFormats?.[0] === "axm"
      const { system } = parseUrn(element.urn)
      const totalTransform = getTotalTransform(path, elementResponseMap, pathMap)
  
      if (system === "integrate" && hasAxmReference) {
        const elementWithParentTransform: typesAndConsts.AxmDetail = {
          ...element,
          parentTransform: element.transform,
          path,
        }
        axmList.push(elementWithParentTransform)
        continue
      }
  
      const isConceptualElement = element.properties.category === "ConceptualElement"
      if (isConceptualElement) {
        continue
      }
  
      const geometryFileUrl: string = element.properties?.geometry?.volumeMesh?.url
      if (geometryFileUrl) {
        const elementId = parseUrn(urn).id
        const geometryId = element.properties.geometry.volumeMesh.id

        if (!glbUrlMap[geometryFileUrl]) {
          glbUrlMap[geometryFileUrl] = {
            elements: [],
          }
        }

        const needsConverted = editingElementPath?.includes(parentPath)

        glbUrlMap[geometryFileUrl].elements.push({
          transform: totalTransform,
          needsConverted,
          id: elementId,
          geometryId,
          properties: element?.properties,
          urn: element.urn,
          fullIdPath: path,
        })
      }
    }
  
    return { glbUrlMap, axmList }
  }

function getTotalTransform(
    path: typesAndConsts.InternalPath,
    elementResponseMap: ElementResponse,
    pathMap: Record<typesAndConsts.InternalPath, Urn>,
  ) {
    const pathParts = path.split("/")
    let totalTransform
    let pathIndex = 0
  
    let currentPath = pathParts[pathIndex]
    totalTransform = getTransform(currentPath, pathIndex, 
        pathMap, elementResponseMap, totalTransform,
        pathParts)
  
    return totalTransform
  }

const getTransform = (currentPath: typesAndConsts.InternalPath, pathIndex: number, 
    pathMap: Record<typesAndConsts.InternalPath, Urn>, elementResponseMap: ElementResponse, totalTransform: any,
    pathParts: string[]) => {
    const pathKeys = currentPath.split("/")
    const parentPath = pathKeys.length > 1 ? pathKeys.slice(0, pathIndex).join("/") : undefined
    const parentUrn = pathMap[parentPath]
    const parentElement = elementResponseMap[parentUrn]
    const parentTransform = parentElement?.children?.find(
          (child) => child.key === pathKeys.slice(-1).toString(),
      )?.transform
    const urn = pathMap[pathKeys.join("/")]
    const element = elementResponseMap[urn]
    const elementTransform = element?.transform

    totalTransform = multiplyTransforms(
      totalTransform,
      multiplyTransforms(parentTransform, elementTransform),
    )
    pathIndex++

    const restPath = pathParts.slice(pathIndex)
    if (restPath.length > 0) {
      currentPath = pathParts.slice(0, pathIndex + 1).join("/")
      getTransform(currentPath, pathIndex, 
        pathMap, elementResponseMap, totalTransform,
        pathParts)
    }

    return totalTransform;
  }

// Function to multiple two transforms as arrays together. Uses window.WSM for this.
const multiplyTransforms = (src1: Transform, src2: Transform) => {
    let dest = src1
    if (src2) {
      if (src1) {
        let t1 = WSM.Geom.Transf3d()
        t1.data = transpose(src1)
        const t2 = WSM.Geom.Transf3d()
        t2.data = transpose(src2)
  
        //@ts-ignore
        WSM.Transf3d.Multiply(t1, t2)
          .then((t1) => {
            dest = transpose(t1.data) as Transform
          });
      } else {
        dest = src2
      }
    }
  
    return dest
  }

 export function getUrnFromPath(path: string, elementResponseMap: ElementResponse) {
   const rootUrn = Object.values(elementResponseMap).find(
     (element) => element.properties.category === "proposal",
   )?.urn
   const pathMap = getPathToUrn(elementResponseMap, rootUrn)
 
   return pathMap[path]
 }

 export async function loadTerrain(
    proposalId: string,
    terrainDetails: typesAndConsts.ElementDetails,
  ): Promise<typesAndConsts.CreatedObjectDetails> {
    return new Promise(async (resolve, reject) => {
      try {
        const tempTerrainWSMPath = "terrain.window.WSM"
        const terrainRevisionId = parseUrn(terrainDetails.urn).revision
        const terrainCacheData = await getTerrainCache(
          `3d-sketch-terrain-${proposalId}-revision-${terrainRevisionId}`,
        )
    
        let parsedDatas = Array.from(terrainCacheData as Uint8Array);
        await createFile(
        {
          savePath: tempTerrainWSMPath
        },
        parsedDatas,
        true,
        async (args) => {
          let storedPath = args.tempGlbLocation;
          const previousDelta = await WSM.APIGetIdOfActiveDeltaReadOnly(typesAndConsts.MAIN_HISTORY_ID)

          //The actual load of cached terrain window.WSM
          await FormIt.ImportFile(storedPath, false, WSM.INVALID_ID, false)
    
          const newDelta = await WSM.APIGetIdOfActiveDeltaReadOnly(typesAndConsts.MAIN_HISTORY_ID)
          const data = await WSM.APIGetCreatedChangedAndDeletedInDeltaRangeReadOnly(
            typesAndConsts.MAIN_HISTORY_ID,
            previousDelta,
            newDelta,
            [WSM.nObjectType.nGroupType]
          )
    
          const createdGroupIds = data.created
          await deleteFile(storedPath);

          //should only be 1 terrain group.
          if (createdGroupIds.length === 1) {
            resolve({
              allIdsCreated: createdGroupIds,
              isTerrain: true,
              isAxm: false,
            });
          }
          else {
            throw new Error("Error reading terrain transform from cached window.WSM, did not get 1 created group");
          }
        });
      } catch (e) {
        let errorMessage = `Error loading terrain from cache - ${e}`;
        console.log(errorMessage)
        reject(errorMessage);
      }
    });
  }
  
  //will check for terrain in cache at a regular interval, and resolve promise when it can read from cache
export async function  getTerrainCache(key) {
    let intervalCount = 0

    return new Promise((resolve, reject) => {
      try {
        const intervalId = setInterval(async () => {
          const cacheData = await getCache(key)

          if (!cacheData) {
            intervalCount++

            if (intervalCount % 100 === 0) {
              console.log(`Did not find cache for ${key}, still waiting.`)
            }
          } else {
            clearInterval(intervalId)
            resolve(cacheData)
          }
        }, 100)
      } catch (e) {
        reject(e)
      }
    })
  }

export async function requestAndLoadGlb(
    glbUrl: string,
    elementsInGlb: Array<typesAndConsts.ElementDetailsWithLoadInfo>,
    fileId: string,
    proposalCategorizedPaths: Record<string, string[]>,
    hiddenLayers: string[]
  ) {
    const fileLocation = `${fileId}.glb`
    const isTerrain: boolean = glbUrl.includes("terrain")
  
    return new Promise(async (resolve, reject) => {
      try {
        await createFile(
          {
            fetchUrl: glbUrl,
            savePath: fileLocation
          },
          null,
          true, 
          async (args) => 
          {            
            let finalLocation: string = args.tempGlbLocation;
            //if any of the elementsInGlb are being edited, filter them and then
            //load them separately so we can get their objectId when created as
            //we need to treat them differntly
            const elementsToLoadAsContext: Array<typesAndConsts.ElementDetailsWithLoadInfo> = []
            const elementsToLoadForConversion: Array<typesAndConsts.ElementDetailsWithLoadInfo> = []
            let allInstanceIds: Array<number> = []
            let idEditingForConversion: number
    
            elementsInGlb.forEach((elementData: typesAndConsts.ElementDetailsWithLoadInfo) => {
              if (elementData.needsConverted) {
                elementsToLoadForConversion.push(elementData)
              } else {
                elementsToLoadAsContext.push(elementData)
              }
            })
    
            if (elementsToLoadAsContext.length > 0) {
              //loadGltf only creates 1 instance as it groups everything it creates
              const createdInstanceId = await loadGltf({
                fileLocation: finalLocation,
                elementDetails: elementsToLoadAsContext,
                isTerrain,
                transform: undefined, //May not be needed as we multiply the transform for each node now?
              })

              if(!createdInstanceId)
              {
                deleteFile(finalLocation);

                const errorMessage = `Failed to request and load file into memory for url - ${glbUrl}`;
                console.warn(errorMessage);
                reject(errorMessage);
                return;
              }

              //just use the first element node of the glb. We have a 1:1 relationship of an glb to a layer. Meaning we don't split up a glb onto multiple layers.
              const category = getCategoryFromElementPath(
                elementsToLoadAsContext[0].fullIdPath,
                proposalCategorizedPaths
              )
    
              if (category) {
                const categoryLayer = await createOrGetOutOfContextLayer(category)
                await FormIt.Layers.AssignLayerToObjects(categoryLayer.formItLayerId, [
                  typesAndConsts.MAIN_HISTORY_ID,
                  createdInstanceId
                ])
              }
    
              const layerVisibility = !hiddenLayers.includes(category)
              FormIt.Layers.SetLayerVisibility(category, layerVisibility)
    
              allInstanceIds = [...allInstanceIds, createdInstanceId]
            }
    
            if (elementsToLoadForConversion.length > 0) {
              const createdInstanceId = await loadGltf({
                fileLocation,
                elementDetails: elementsToLoadForConversion,
                isTerrain,
                transform: undefined, //May not be needed as we calculate the total transform for each node now?
              })
    
              const nRefHistID = WSM.APIGetGroupReferencedHistoryReadOnly(
                typesAndConsts.MAIN_HISTORY_ID,
                createdInstanceId,
              )
              const meshIds = WSM.APIGetAllObjectsByTypeReadOnly(nRefHistID, WSM.nMeshType)
              const SIN_60_DEG = Math.sqrt(3) / 2
              WSM.APIConvertMeshesToObjects(nRefHistID, meshIds, SIN_60_DEG)
    
              idEditingForConversion = createdInstanceId
              allInstanceIds = [...allInstanceIds, createdInstanceId]
            }
    
            deleteFile(finalLocation);
    
            resolve({
              allIdsCreated: allInstanceIds,
              idEditingForConversion,
              isTerrain,
            })
          })
      } catch (e) {
        reject(`Failed to request and load file into memory for url - ${glbUrl} - error: ${e}`)
      }
    })
  }

  //TODO may be able to share some similar logic with requestAndLoadGlb
  export async function requestAndLoadAxm(
    elementData: typesAndConsts.AxmDetail,
    isEditing: boolean,
    elementResponseMap: ElementResponse,
    proposalCategorizedPaths: Record<string, string[]>,
    hiddenLayers: string[],
  ): Promise<typesAndConsts.CreatedObjectDetails> {

    return new Promise(async (resolve, reject) => {
      let axmUrl = `/api/spacemaker-object-storage/v1/${elementData?.properties?.spacemakerObjectStorageReferences[0]}`;
      try {
        const fileLocation = `${uuid()}.axm`;
        const previousDelta = await WSM.APIGetIdOfActiveDeltaReadOnly(typesAndConsts.MAIN_HISTORY_ID);

        await createFile(
          {
            fetchUrl: axmUrl,
            savePath: fileLocation
          },
          null,
          true, 
          async (args) => 
          {
            let storedPath = args.tempGlbLocation;
            await FormIt.ImportFile(storedPath, false, typesAndConsts.MAIN_HISTORY_ID, false)
            await deleteFile(storedPath);

            await WSM.APIGetIdOfActiveDeltaReadOnly(typesAndConsts.MAIN_HISTORY_ID)
            .then(async(newDelta) => {
              await WSM.APIGetCreatedChangedAndDeletedInDeltaRangeReadOnly(
                typesAndConsts.MAIN_HISTORY_ID,
                previousDelta,
                newDelta,
                [WSM.nObjectType.nInstanceType]
              )
              .then(async (data) => {
                if (data.created.length > 0) {
                  if (elementData.parentTransform) {
                    elementData.parentTransform[12] *= typesAndConsts.METERS_TO_FEET
                    elementData.parentTransform[13] *= typesAndConsts.METERS_TO_FEET
                    elementData.parentTransform[14] *= typesAndConsts.METERS_TO_FEET

                    const transf3d = WSM.Geom.Transf3d()
                    transf3d.data = transpose(elementData.parentTransform)

                    WSM.APITransformObjects(typesAndConsts.MAIN_HISTORY_ID, data.created, transf3d)
                  }

                  // assign loaded object to a layer to be hidded on save
                  // if (!isEditing) {
                  //   const category = getCategoryFromElementPath(elementData.path, proposalCategorizedPaths)
                  //   await createOrGetOutOfContextLayer(category)
                  //     .then(async (categoryLayer) => {
                  //       const layerVisibility = !hiddenLayers.includes(category)
                  //       await FormIt.Layers.AssignLayerToObjects(categoryLayer.formItLayerId, data.created)
                  //       await FormIt.Layers.SetLayerVisibility(category, layerVisibility)
                  //     })
                  // }

                  // for (const objectId of data.created) {
                  //   const hasLevels = !isEmpty(await WSM.APIGetObjectLevelsReadOnly(typesAndConsts.MAIN_HISTORY_ID, objectId))
                  //   if (isEditing && hasLevels) {
                  //     const results = await Promise.all(createLayer(typesAndConsts.MAIN_HISTORY_ID, typesAndConsts.formItLayerNames.FORMA_BUILDINGS))
                  //     let formItLayerId = results[0];
                  //     await FormIt.Layers.AssignLayerToObjects(formItLayerId, objectId)
                  //   }
                  // }
                }
              })
            })
            //TODO need to return whole list of ids, if we expect to manipulate after.
            resolve({ allIdsCreated: undefined, isAxm: true } as typesAndConsts.CreatedObjectDetails)
          }
        )
      } catch (e) {
        reject(`Failed to request and load file into memory for url - ${axmUrl} - error: ${e}`)
      }
    })
  }

async function loadGltf({
  fileLocation,
  elementDetails,
  isTerrain,
  transform,
}: {
  fileLocation: string
  elementDetails: Array<typesAndConsts.ElementDetails>
  isTerrain: boolean
  transform: any
}) {
  const nodeTransformInfo = elementDetails.map((elementDetail) => {
    return {
      objectName: "GltfNodeInfo",
      id: elementDetail.geometryId,
      transform: elementDetail.transform || [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    }
  })

  const filteredNodeTransformInfo = nodeTransformInfo.filter((transformInfo) => {
    return transformInfo.id
  })

  let transf3d = await WSM.Geom.Transf3d()

  if (transform) {
    transf3d.data = transpose(transform)
  }

  const point = await WSM.Geom.Point3d(0, 0, 0)
  const vector = await WSM.Vector3d.Vector3d(typesAndConsts.METERS_TO_FEET, typesAndConsts.METERS_TO_FEET, typesAndConsts.METERS_TO_FEET)
  const metersToFeetTransf3d = await WSM.Transf3d.MakeScalingTransform(point, vector)

  //@ts-ignore
  transf3d = await WSM.Transf3d.Multiply(metersToFeetTransf3d, transf3d)

  const previousDelta = await WSM.APIGetIdOfActiveDeltaReadOnly(typesAndConsts.MAIN_HISTORY_ID)

  await WSM.Gltf.APILoadGltfFile(
    typesAndConsts.MAIN_HISTORY_ID,
    fileLocation,
    transf3d,
    WSM.INVALID_ID,
    isTerrain
      ? WSM.nGeneratedNormalsOptions.nSmoothNormals
      : WSM.nGeneratedNormalsOptions.nUnsharedNormals,
    filteredNodeTransformInfo || [],
    !isTerrain,
  )

  const newDelta = await WSM.APIGetIdOfActiveDeltaReadOnly(typesAndConsts.MAIN_HISTORY_ID)
  const data = await WSM.APIGetCreatedChangedAndDeletedInDeltaRangeReadOnly(
    typesAndConsts.MAIN_HISTORY_ID,
    previousDelta,
    newDelta,
    [WSM.nObjectType.nMeshType, WSM.nObjectType.nInstanceType],
  )

  const createIds = data.created

  const createdGroupID = await WSM.Utils.CreateAlignedAndCenteredGroup(typesAndConsts.MAIN_HISTORY_ID, createIds)

  const instanceIDs = await WSM.APIGetObjectsByTypeReadOnly(
    typesAndConsts.MAIN_HISTORY_ID,
    createdGroupID,
    WSM.nObjectType.nInstanceType,
  )

  if (instanceIDs.length !== 1) {
    console.error("Created instanceIds should be 1")
    return
  }

  return instanceIDs[0]
}