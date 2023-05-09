import { Child, ElementResponse, BaseElement, Urn } from "@spacemakerai/element-types"
import { formitGeometryToIntegrateAPIPayload } from "../helpers/loadGeometryFromFormit"
import { parseUrn, removeElementFromMap } from "../helpers/elementUtils"
import { getUrnFromPath } from "../helpers/loadUtils"
import * as typesAndConsts from "../helpers/typesAndConstants"
import * as uuid from "uuid"
import FormaService from "../services/forma.service" 
import { isEmpty } from "lodash-es"
import { getFloorGeometriesByBuildingId } from "../helpers/buildingFloorUtils"
import Proposal from "../components/proposals/proposal"
import { setGlobalState } from "../helpers/stateUtils"
import { createLayer } from "./layerUtils"

export async function getFormItGeometry(names, mapHistoryIdToInitialDeltaId, axmPathsToDeleteSet, callback) {
  let atLeastOneSavable = false;
        // Delete all the attribute on instances that are converted from other element types. This causes
        // a change on the instance which ensures it is saved.
        const allConvertStringAttributes = await WSM.APIGetStringAttributesByKeyReadOnly(
          typesAndConsts.MAIN_HISTORY_ID,
          WSM.INVALID_ID,
          typesAndConsts.FORMA_CONVERTED_ELEMENT_KEY,
        )
        if (allConvertStringAttributes.length > 0) {
          await WSM.APIDeleteObjects(typesAndConsts.MAIN_HISTORY_ID, allConvertStringAttributes)
        }
        // Get all the instances that need to be saved.
        const instancesToBeSaved = await getAllInstancesToBeSaved(mapHistoryIdToInitialDeltaId);

        // Compute the floor geometries. Use these when available.
        const floorGeometriesByBuildingId = await getFloorGeometriesByBuildingId(instancesToBeSaved)
            
        // We are done with the buildings layer. Delete it before saving the axm files.
        const results = await Promise.all(createLayer(typesAndConsts.MAIN_HISTORY_ID, typesAndConsts.formItLayerNames.FORMA_BUILDINGS))
        let formItTerrainLayerId = results[0];
        FormIt.Layers.DeleteLayers([formItTerrainLayerId])

        const instanceIds = await WSM.APIGetAllObjectsByTypeReadOnly(typesAndConsts.MAIN_HISTORY_ID, WSM.nObjectType.nInstanceType)
        let previousLayersVisibility = [];

        await hideLayersBeforeSave()
        .then(async (visibilities) => {
          previousLayersVisibility = visibilities;
          FormIt.Layers.SetLayerVisibility(names, false)
            .then(async () => {
              for (const instanceId of instanceIds) {
                // Skip objects that are not pickable or are hidden. Currently these cannot have been
                // edited in 3d sketch. This assumption will be incorrect once we allow changing
                // pickable/hidden from within 3d sketch.
                if (
                  instancesToBeSaved.has(instanceId) === false ||
                  await WSM.Utils.IsObjectNotPickable(typesAndConsts.MAIN_HISTORY_ID, instanceId) ||
                  await WSM.Utils.IsObjectHidden(typesAndConsts.MAIN_HISTORY_ID, instanceId)
                ) {
                  // A hidden 3d sketch element won't be saved. But we need to delete the path from
                  // axmPathsToDeleteSet so the element is not deleted. Same for an unchanged instance that
                  // does not need to be save.
                  findElementPathFromInstanceAndRemoveFromSet(instanceId, axmPathsToDeleteSet)
                  continue;
                }

                atLeastOneSavable = true;

                // If there is floor geometry use it. Otherwise get the geometry from the instance.
                let formitGeometry = []
                if (floorGeometriesByBuildingId[instanceId] !== undefined) {
                  formitGeometry = floorGeometriesByBuildingId[instanceId].flat() ?? [];
                  await getPolygonData(instanceId, (polygonData) => { 
                    callback(formitGeometry, polygonData, instancesToBeSaved, instanceId);   
                  });
                } else {
                  await WSM.Utils.GetAllGeometryInformation(typesAndConsts.MAIN_HISTORY_ID, instanceId)
                    .then(async(geometry) => {
                        formitGeometry = geometry ?? [];
                        await getPolygonData(instanceId, (polygonData) => { 
                          callback(formitGeometry, polygonData, instancesToBeSaved, instanceId);   
                        })
                      }
                    );
                }
              }

              FormIt.Layers.SetLayerVisibility(names, true)
              .then(() => {
                returnLayersToPreviousVibility(previousLayersVisibility);  
              });
            });
          });
}

// Function returns all instances in the main history that need to be saved.
async function getAllInstancesToBeSaved(mapHistoryIdToInitialDeltaId: Map<number, number>): Promise<Set<number>> {
  // Get all the instances in the main history. These are potentially what we need to save.
  const allInstances = await WSM.APIGetAllObjectsByTypeReadOnly(
    typesAndConsts.MAIN_HISTORY_ID,
    WSM.nObjectType.nInstanceType,
  )
  if (mapHistoryIdToInitialDeltaId.has(typesAndConsts.MAIN_HISTORY_ID) === false) {
    // This is unexpected, we need to save everything.
    console.warn("The main history has no delta information. Saving all instances.")
    return new Set<number>(allInstances)
  }

  const instancesToSave = new Set<number>()

  // Get all the changed histories from mapHistoryIdToInitialDeltaId if needed
  let bComputedChangedHistories = false
  let changedHistories = new Set<number>()

  // Any created or changed instances must be saved. This check is easy.
  const startDeltaId = mapHistoryIdToInitialDeltaId.get(typesAndConsts.MAIN_HISTORY_ID)
  const currentDeltaId = await WSM.APIGetIdOfActiveDeltaReadOnly(typesAndConsts.MAIN_HISTORY_ID)

  // A set containing changed materials, levels, and object properties.
  const otherChangesSet = new Set<number>()

  // Note if there is no history change in MAIN_HISTORY_ID, then the startDeltaId and the
  // currentDeltaId will be equal. In this case, do not look for changed objects in the
  // range (since there is no range which is an error in
  // APIGetCreatedChangedAndDeletedInDeltaRangeReadOnly).
  if (startDeltaId !== currentDeltaId) {
    const instanceChangesFromDelta = await WSM.APIGetCreatedChangedAndDeletedInDeltaRangeReadOnly(
      typesAndConsts.MAIN_HISTORY_ID,
      startDeltaId,
      currentDeltaId,
      [WSM.nObjectType.nInstanceType],
    )
    instanceChangesFromDelta.created.forEach((nCreatedInstance) => {
      instancesToSave.add(nCreatedInstance)
    })
    instanceChangesFromDelta.changed.forEach((nChangedInstance) => {
      instancesToSave.add(nChangedInstance)
    })

    // We also need all the changed levels, object properties, and materials (for future proofing). If any of these changed, the instances
    // associated with them need to be saved.
    const otherChangesFromDelta = await WSM.APIGetCreatedChangedAndDeletedInDeltaRangeReadOnly(
      typesAndConsts.MAIN_HISTORY_ID,
      startDeltaId,
      currentDeltaId,
      [
        WSM.nObjectType.nMaterialType,
        WSM.nObjectType.nObjectPropertiesAttributeType,
        WSM.nObjectType.nLevelType,
      ],
    )
    otherChangesFromDelta.created.forEach((nCreated) => {
      otherChangesSet.add(nCreated)
    })
    otherChangesFromDelta.changed.forEach((nChanged) => {
      otherChangesSet.add(nChanged)
    })
  }

  allInstances.forEach(async (nInstanceId) => {
    if (instancesToSave.has(nInstanceId)) {
      // No further check on this instance is required.
      return
    }

    // If this instance is not associated with an element, save it. New instances would have already been found above,
    // so this must have come from an old element containing more than one instance. Here the original element will
    // be deleted and new elements created for each instance.
    const stringAttIds = await WSM.APIGetStringAttributesByKeyReadOnly(
      typesAndConsts.MAIN_HISTORY_ID,
      nInstanceId,
      typesAndConsts.FORMA_ELEMENT_PATH_KEY,
    )
    if (stringAttIds.length === 0) {
      instancesToSave.add(nInstanceId)
      return
    }

    if (otherChangesSet.size > 0) {
      // Check if the instance refers to a changed level, material, or object property. Note added or removing an
      // attribute on the instance would change the instance and that is caught above. But a user can change the
      // properties of levels (for example) without changing the instance the levels are associated with. This would
      // require the instance to be saved.
      let bAddedInstanceToSave = false
      const levelIds = await WSM.APIGetObjectLevelsReadOnly(typesAndConsts.MAIN_HISTORY_ID, nInstanceId)
      for (let index = 0; bAddedInstanceToSave && index < levelIds.length; index++) {
        const nLevelId = levelIds[index]
        if (otherChangesSet.has(nLevelId)) {
          bAddedInstanceToSave = true
          instancesToSave.add(nInstanceId)
        }
      }

      if (bAddedInstanceToSave === false) {
        const materialId = await WSM.APIGetObjectMaterialReadOnly(typesAndConsts.MAIN_HISTORY_ID, nInstanceId)
        if (otherChangesSet.has(materialId)) {
          bAddedInstanceToSave = true
          instancesToSave.add(nInstanceId)
        }
      }

      if (bAddedInstanceToSave === false) {
        const objectPropertiesIds = await WSM.APIGetObjectsByTypeReadOnly(
          typesAndConsts.MAIN_HISTORY_ID,
          nInstanceId,
          WSM.nObjectType.nObjectPropertiesAttributeType,
        )
        for (let index = 0; bAddedInstanceToSave && index < objectPropertiesIds.length; index++) {
          const nObjectPropertyId = objectPropertiesIds[index]
          if (otherChangesSet.has(nObjectPropertyId)) {
            bAddedInstanceToSave = true
            instancesToSave.add(nInstanceId)
          }
        }
      }

      if (bAddedInstanceToSave) {
        // Done with this instance.
        return
      }
    }

    if (bComputedChangedHistories === false) {
      changedHistories = await collectChangedHistories(mapHistoryIdToInitialDeltaId)
      bComputedChangedHistories = true
    }

    // Check if the instance reference history is changed.
    const nRefHistId = await WSM.APIGetGroupReferencedHistoryReadOnly(typesAndConsts.MAIN_HISTORY_ID, nInstanceId)
    if (changedHistories.has(nRefHistId)) {
      instancesToSave.add(nInstanceId)
    }
  })

  // Finally, if we save an instance, we must save all instances with the same reference history.
  // If we don't add this, linking is broken.
  const referenceHistories = new Set<number>()
  instancesToSave.forEach(async (instanceId) => {
    const refHistId = await WSM.APIGetGroupReferencedHistoryReadOnly(typesAndConsts.MAIN_HISTORY_ID, instanceId)
    referenceHistories.add(refHistId)
  })

  allInstances.forEach(async (instanceId) => {
    if (instancesToSave.has(instanceId)) {
      return
    }
    const refHistId = await WSM.APIGetGroupReferencedHistoryReadOnly(typesAndConsts.MAIN_HISTORY_ID, instanceId)
    if (referenceHistories.has(refHistId)) {
      instancesToSave.add(instanceId)
    }
  })

  return instancesToSave
}


// Function that uses the global property mapHistoryIdToInitialDeltaId to collect all
// the changed histories and return them in a set. Note if a reachable child history
// is changed, we consider the parent history changed.
async function collectChangedHistories(mapHistoryIdToInitialDeltaId: Map<number, number>): Promise<Set<number>> {
  const changedHistories = new Set<number>()

  for (const [nHistId, nDeltaId] of mapHistoryIdToInitialDeltaId.entries()) {
    if (changedHistories.has(nHistId)) {
      // We don't need to check this history.
      continue
    }

    const newDeltaId = await WSM.APIGetIdOfActiveDeltaReadOnly(nHistId)
    if (newDeltaId !== nDeltaId) {
      changedHistories.add(nHistId)

      // All reachable histories above are also considered changed.
      const allReachableHistories = await WSM.APIGetAllReachableHistoriesReadOnly(nHistId, true /*bGoUp*/)
      allReachableHistories.forEach((nReachableHistId) => {
        changedHistories.add(nReachableHistId)
      })
    }
  }

  return changedHistories
}

// Look for the element path on the instance. A new instance will not have one. Note a side effect
// of calling this function is that any found path will be deleted from axmPathsToDeleteSet which ensures
// the element is not deleted.
export async function findElementPathFromInstanceAndRemoveFromSet(
  instanceId: number,
  axmPathsToDeleteSet: Set<string>,
): Promise<string> {
  let instanceElementPath: string
  const stringAttIds = await WSM.APIGetStringAttributesByKeyReadOnly(
    typesAndConsts.MAIN_HISTORY_ID,
    instanceId,
    typesAndConsts.FORMA_ELEMENT_PATH_KEY
  )

  if (stringAttIds?.length > 0) {
    // We expect no more than one string attribute here.
    if (stringAttIds.length > 1) {
      console.warn("Found more than one string attribute for element path on instance ${objectId}")
    }

    const stringAttData = await WSM.APIGetStringAttributeKeyValueReadOnly(
      typesAndConsts.MAIN_HISTORY_ID,
      stringAttIds[0],
    )
    instanceElementPath = stringAttData.sValue

    // Delete the paths from axmPathsToDeleteSet as they are encountered. The paths that are left
    // correspond to deleted instances which means these paths are elements to delete.
    axmPathsToDeleteSet.delete(instanceElementPath)

    if (stringAttData.aOwnerIDs.length !== 1) {
      // The string attribute is on more than one instance. This is not expected.
      console.warn(
        `Expect one instance per element path. But get ${stringAttData.aOwnerIDs.length} instances here.`,
      )
    }

    // We don't need the string attribute anymore. Maybe we could keep it if the
    // element path is constant, but I'm not making any assumptions.
    await WSM.APIDeleteObject(typesAndConsts.MAIN_HISTORY_ID, stringAttIds[0])
  }

  return instanceElementPath
}

export async function returnLayersToPreviousVibility(
    layers: Array<{ layerData: { Visible: boolean }; previousVisiblity: boolean }>,
  ) {
    await layers.forEach(async (layer) => {
      if (layer.layerData) {
        layer.layerData.Visible = layer.previousVisiblity
        await FormIt.Layers.SetLayersVisibility([layer.layerData])
      }
    })
  }

export async function hideLayersBeforeSave() {
    const layersToAvoidSaving = [
      typesAndConsts.formItLayerNames.FORMA_CONTEXT,
      typesAndConsts.formItLayerNames.FORMA_TERRAIN,
      typesAndConsts.formItLayerNames.SURROUNDING_BUILDINGS,
      typesAndConsts.formItLayerNames.FORMA_AUTO_BUILDINGS,
      typesAndConsts.formItLayerNames.FORMA_PROPOSAL_BUILDINGS,
      typesAndConsts.formItLayerNames.FORMA_SITE_LIMIT,
      typesAndConsts.formItLayerNames.FORMA_BUILDING,
      typesAndConsts.formItLayerNames.FORMA_VEGETATION,
      typesAndConsts.formItLayerNames.FORMA_GENERIC,
      typesAndConsts.formItLayerNames.FORMA_ROAD,
      typesAndConsts.formItLayerNames.FORMA_RAILS,
      typesAndConsts.formItLayerNames.FORMA_PROPERTY_BOUNDARY,
      typesAndConsts.formItLayerNames.FORMA_ZONE,
      typesAndConsts.formItLayerNames.FORMA_BUILDING_ENVELOPE
    ];

    let results = [];
    for(const layerName of layersToAvoidSaving)
    {
      let layerVisibility = await mapLayerVisibility(layerName);
      if(layerVisibility.layerData) {
        results.push(layerVisibility);
      }
    }

    return results;
  }

export async function mapLayerVisibility(layerName: string) {
      const formItLayerId = await FormIt.Layers.GetLayerID(layerName)
      let previousVisiblity = false
      let layerData
  
      if (formItLayerId != WSM.INVALID_ID) {
        layerData = await FormIt.Layers.GetLayerData(formItLayerId)
        previousVisiblity = layerData.Visible
        layerData.Visible = false
        await FormIt.Layers.SetLayersVisibility([layerData])
      }
  
      return {
        layerData,
        previousVisiblity,
      }
  }

export async function getPolygonData(objectId = WSM.INVALID_ID, callback) {
  WSM.Utils.ComputeGeometryFromLevels(typesAndConsts.MAIN_HISTORY_ID, false, objectId)
    .then((geometryData) => {
      let polygonData = {}
      if(geometryData)
      {
          (geometryData as any[]).map((geometryForLevel) => {
          const { outer_loop, inner_loops } = geometryForLevel.second[0]

          const outerRings: typesAndConsts.Polygon = (outer_loop.vertices as any[]).map((point3d) => [
            point3d.x * typesAndConsts.FEET_TO_METER,
            point3d.y * typesAndConsts.FEET_TO_METER,
          ])

          const multiRingPolygon = [outerRings]

          if (inner_loops.length > 0) {
            const innerRings: typesAndConsts.Polygon = (inner_loops[0].vertices as any[]).map((point3d) => [
              point3d.x * typesAndConsts.FEET_TO_METER,
              point3d.y * typesAndConsts.FEET_TO_METER,
            ])

            multiRingPolygon.push(innerRings)
          }

          return multiRingPolygon
        }) as typesAndConsts.MultiRingPolygon[];
      }

      if(callback)
      {
        callback(polygonData);
      }
    });
  }

// Function first deletes levels that should not be saved since saving from
// a selection incldues all levels. Then saves the AXM file and undoes the
// delete.
async function deleteLevelsAndSaveSelectedToAXM() {
  const selectedObjects = await FormIt.Selection.GetSelections()
  const selectedObjectIds: number[] = selectedObjects.map(
    (object: { ids: { Object: any }[] }) => object.ids[0].Object,
  )

  // We search below see if a level is on an instance being saved. If there are a lot of
  // instances, this could be slow since the search on an array is linear.
  if (selectedObjectIds.length > 100) {
    console.warn(`We are saving ${selectedObjectIds.length} instances. Consider using a set here.`)
  }

  // We need to delete all levels that are either unused or on non-selectable instances.
  // The way FormIt.SaveFile works, all levels are saved. I don't know the history of
  // this but suspect it is because we cannot pick levels directly and in FormIt the
  // levels are managed in the level widget which means there are no duplicates. With
  // relative levels in our submode, we have lots of levels which are not reused.
  // Another approach here could be to copy what we want into a new instace, set the
  // context to the instance, and save from there. Doing this could be more expensive
  // since it does not work in temp histories that are separate from the main history.
  const levelsToDelete = []
  const levels = await WSM.APIGetAllObjectsByTypeReadOnly(typesAndConsts.MAIN_HISTORY_ID, WSM.nObjectType.nLevelType)
  levels.forEach(async (nLevelId: number) => {
    const levelAtts = await WSM.APIGetObjectsByTypeReadOnly(
      typesAndConsts.MAIN_HISTORY_ID,
      nLevelId,
      WSM.nObjectType.nLevelAttributeType,
    )
    if (levelAtts.length === 0) {
      // If there is no attribute, the level is unused.
      levelsToDelete.push(nLevelId)
    } else {
      // We expect just one level attribute - we should never have 2 or more.
      if (levelAtts.length > 1) {
        console.warn(`Found a level with more than one level attribute. ${nLevelId}`)
      }
      const instanceOwners = await WSM.APIGetObjectsByTypeReadOnly(
        typesAndConsts.MAIN_HISTORY_ID,
        levelAtts[0],
        WSM.nObjectType.nInstanceType,
        true,
      )
      if (instanceOwners.length == 0) {
        levelsToDelete.push(nLevelId)
      } else {
        // We assume there is just one instance owner here as relative levels should not
        // be shared.
        if (instanceOwners.length > 1) {
          console.warn(`Found a level on more than one instance. ${nLevelId}`)
        }

        // Make sure the level is on an instance that is being saved. This could be
        // expensive O(n^2) if there are a lot of instances being saved. But we do
        // not expect that so searching should be OK. In the future, when we are
        // saving one axm file for everything, we need to delete this code. But for
        // now it is the main source of disconnected levels.
        if (!selectedObjectIds.includes(instanceOwners[0])) {
          levelsToDelete.push(nLevelId)
        } else {
          // One last check. Make sure the level is inside the z of the instance bounding
          // box. Otherwise delete it.
          const instanceBox = await WSM.APIGetBoxReadOnly(typesAndConsts.MAIN_HISTORY_ID, instanceOwners[0])
          const levelData = await WSM.APIGetLevelDataReadOnly(
            typesAndConsts.MAIN_HISTORY_ID,
            nLevelId,
            true /*bGlobalElevation*/,
          )
          if (
            levelData.dElevation < instanceBox.lower.z - typesAndConsts.TOLERANCE_VALUE ||
            levelData.dElevation > instanceBox.upper.z + typesAndConsts.TOLERANCE_VALUE
          ) {
            // This level is above or below the instance so cannot contribute to the floors.
            levelsToDelete.push(nLevelId)
          }
        }
      }
    }
  })

  // No need to save the state where levels are deleted as that would just take time
  // recomputing levels for the renderer and this is happening on exit of the submode.
  FormIt.UndoManagement.BeginState()

  if (levelsToDelete.length > 0) {
    // Delete all the levels we do not need.
    await WSM.APIDeleteObjects(typesAndConsts.MAIN_HISTORY_ID, levelsToDelete)
  }

  // Save just the selected geometry. Levels on instances that are not saved have
  // been deleted. So we'll delete the levels inside a state and reject the state
  // when the save is done.
  let savedAxm = await getDatasForBlob();

  // Undo the deletion so no update takes place.
  FormIt.UndoManagement.RejectState()

  return savedAxm;
}

  // This saves the top history by ending edit in context. So
  // do NOT call this except when ending the submode.
export async function saveTemp(objectId: number) {
    await FormIt.GroupEdit.EndEditInContext();
    let savedAxm;

    if(objectId)
    {
      await FormIt.Selection.SetSelections(objectId)
    }
    else
    {
      await FormIt.Selection.SelectAll();
    }

    savedAxm = await deleteLevelsAndSaveSelectedToAXM()
    return savedAxm;
  }

async function getDatasForBlob() {
  let axmPath = await FormIt.FormaAddIn.SaveCurrentAXMtoTempFile(true);
  let savedAxmDatas = await FormIt.FormaAddIn.ReadFileandMakeBlob(axmPath);

  var uint8Array = new Uint8Array(savedAxmDatas.length);
  for(var i = 0; i < uint8Array.length; i++) {
    uint8Array[i] = savedAxmDatas[i];
  }

  return uint8Array;
}

export async function generateStorageReference(axmSavedContent, projectId, callback) {
    const fileBlob = new Blob([axmSavedContent]);
    const axmFile = new File([fileBlob], "internalRepresentation.axm")
    
    await createS3Objects(axmFile, projectId)
      .then((spacemakerObjectStorageReferenceId) => {
          if(callback)
          {
            callback(spacemakerObjectStorageReferenceId);
          }
      })
  }

export async function createS3Objects(axmFile: File, projectId: string) {
    const payload = JSON.stringify({
      projectId
    })
    try {
      const res = await fetch(`/api/spacemaker-object-storage/v1/`, {
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": "application/json",
          "Set-Cookie": "true",
        },
      })
  
      if (res.ok) {
        const { id, url, fields } = await res.json()
        const formData = new FormData()
  
        Object.keys(fields).forEach((key) => {
          formData.append(key, fields[key])
        })
  
        formData.append("file", axmFile)

        const formRes = await fetch(url, {
          method: "POST",
          body: formData,
          headers: {
            "Set-Cookie": "true",
          },
        })
  
        if (formRes.ok) {
          return id
        }
      }
    } catch (error) {
      return false
    }

    return false
  }

export async function generatePayload(
  terrainElevationTransf3d, 
  proposalId, 
  projectId, 
  formitGeometry, 
  elementResponseMap,
  floorGeometriesByBuildingId,
  callback) 
{
  // Removing empty conceptual element
  if (formitGeometry.length === 0 && isEmpty(floorGeometriesByBuildingId)) {
    let editingElementUrn = "";

    await updateProposalElement({
      elementId: proposalId,
      authContext: projectId,
      urnToDelete: editingElementUrn,
      elementResponseMap: elementResponseMap,
      proposalElement: null
    })

    return
  }

  formitGeometryToIntegrateAPIPayload(
      terrainElevationTransf3d,
      formitGeometry,
      floorGeometriesByBuildingId
    )
    .then((integrateAPIPayload) => {
      if(callback)
      {
        callback(integrateAPIPayload);
      }
    });
  }
  
export async function getWSMLayerID(histID, FormaLayerName) {
    const aLayers = WSM.APIGetAllObjectsByTypeReadOnly(histID, WSM.nLayerType)
    let wsmLayerId = WSM.INVALID_ID
    for (let i = 0; i < aLayers.length; i++) {
      const data = WSM.APIGetLayerDataReadOnly(histID, aLayers[i])
  
      if (data.name == FormaLayerName) {
        wsmLayerId = aLayers[i]
        break
      }
    }
  
    return wsmLayerId
  }

export async function createIntegrateAPIElementAndUpdateProposal(
  terrainElevationTransf3d: any,
  formitGeometry: any,
  proposal: Proposal,
  projectId: string,
  polygonData?: any,
  objectId?: number,
  elementResponseMap?: ElementResponse,
  loadedIntegrateElements?: string[],
  instancesToBeSaved?: any,
  syncing?: boolean,
  callback?: any) {
    let proposalId = proposal.proposalId;
    let proposalUrn = proposal.urn;

    const inverseTerrainElevationTransf3d = terrainElevationTransf3d
      ? await WSM.Geom.InvertTransform(terrainElevationTransf3d)
      : undefined;

    await saveTemp(objectId)
      .then(async (savedAxm) => {
        if(!savedAxm) {
          // in case save temp file didn't work, just get out
          console.error("Can't save temporary wsm file.");
          return;
        }
        await generatePayload(
          inverseTerrainElevationTransf3d, 
          proposalId, 
          projectId, 
          formitGeometry,
          elementResponseMap,
          instancesToBeSaved,
          async (integrateAPIPayload) => {
            let proposalElement = await retrieveProposalElements(projectId, proposalId);

            let editingElementId = "";
            let editingElementUrn = "";
            let atLeastOneDeleted = false;

            let idsInPayload = Object.entries(integrateAPIPayload.elements).map(([key, any]) => {
              return key;
            })

            if(elementResponseMap)
            {
              let currentProposal = elementResponseMap[proposalUrn];
              if(currentProposal) {
                const integrateElements = Object.values(currentProposal.children).filter(
                  (element: BaseElement) => {
                    let isIntegrate = element.urn.indexOf(":integrate:") > 0;
                    let loadedFromContext = false;
                    if(loadedIntegrateElements)
                    {
                      loadedFromContext = loadedIntegrateElements?.indexOf(element.urn) > -1;
                    }
                    return !loadedFromContext && isIntegrate;
                  }
                )

                // loop through all saved integrate element on the current proposal
                for(const element of integrateElements) {
                  let children = element as Child;

                  // compare elements id in payload to currently filled elementResponseMap
                  // if id exists in eRM, then it's an update
                  // element did exists, it should be updated
                  editingElementUrn = children.urn;
                  if (editingElementUrn) {
                    editingElementId = parseUrn(editingElementUrn).id;
                  }

                  let ids = { projectId, editingElementId, proposalId };
                  let urns = { editingElementUrn: editingElementUrn, deletingElementUrn: null }

                  // this is the value used in 3D sketch to retrieve the selected element, stored in editingElementPath.
                  // it should probably be used here too, after load context will be added
                  //let elementKey = children.key;

                  let elementAlreadyExisted = idsInPayload.indexOf(editingElementId) !== -1;
                  if(elementAlreadyExisted) {
                    idsInPayload = idsInPayload.filter((id) => { id !== editingElementId });
                    await storeAndUpdateProposal(ids, integrateAPIPayload, savedAxm,
                      polygonData, urns, proposalElement, elementResponseMap, syncing, callback);
                  }
                  else {
                    editingElementId = "";

                    let ids = { projectId, editingElementId, proposalId };
                    let urns = { editingElementUrn: null, deletingElementUrn: editingElementUrn }

                    // this is an existing element that has been deleted. Should be deleted
                    atLeastOneDeleted = await storeAndUpdateProposal(ids, integrateAPIPayload, savedAxm,
                      polygonData, urns, proposalElement, elementResponseMap, syncing, callback);
                  }
                }

                if(idsInPayload.length > 0)
                {
                  if(atLeastOneDeleted) {
                    // if one or more elements have been deleted, proposal elements have to be refreshed
                    proposalElement = await retrieveProposalElements(projectId, proposalId);
                  }

                  editingElementUrn = "";
                  editingElementId = "";
                  let ids = { projectId, editingElementId, proposalId };
                  let urns = { editingElementUrn: null, deletingElementUrn: null }
                  // new items must be created
                  await storeAndUpdateProposal(ids, integrateAPIPayload, savedAxm,
                    polygonData, urns, proposalElement, elementResponseMap, syncing, callback);
                }
              }
              else {
                let ids = { projectId, editingElementId, proposalId };
                let urns = { editingElementUrn: null, deletingElementUrn: null }

                // this is first time saving, save all elements
                await storeAndUpdateProposal(ids, integrateAPIPayload, savedAxm,
                  polygonData, urns, proposalElement, elementResponseMap, syncing, callback);
              }
            }

        });
    });
  }

async function storeAndUpdateProposal(ids, integrateAPIPayload, savedAxm, polygonData, urns, 
  proposalElement, elementResponseMap, syncing, callback) {
    let projectId = ids.projectId;
    let editingElementId = ids.editingElementId;
    let proposalId = ids.proposalId;

    let editingElementUrn = urns.editingElementUrn;
    let deletingUrn = urns.deletingElementUrn;

    if(!deletingUrn)
    {
      await generateStorageReference(savedAxm, projectId, 
        async (spacemakerObjectStorageReferenceId) => {
          if(!spacemakerObjectStorageReferenceId) {
            syncing = false; 
            if(callback)
            {
              callback(false);
            }
            return;
          }
          await createElementAndUpdateProposal(projectId, integrateAPIPayload, spacemakerObjectStorageReferenceId,
            editingElementId, polygonData, proposalId, editingElementUrn, proposalElement, elementResponseMap, syncing, callback);
      });
    }
    else {
      return await updateProposalElement({
        elementId: proposalId,
        authContext: projectId,
        elementResponseMap: elementResponseMap,
        urnToDelete: deletingUrn,
        proposalElement: proposalElement
      });
    }
  }

async function createElementAndUpdateProposal(projectId, integrateAPIPayload, spacemakerObjectStorageReferenceId,
  editingElementId, polygonData, proposalId, editingElementUrn, proposalElement, elementResponseMap, syncing, callback) {
  await createOrUpdateElement(
    projectId,
    integrateAPIPayload,
    spacemakerObjectStorageReferenceId,
    editingElementId,
    polygonData
  )
  .then(async (createdOrUpdatedElementResult) => {
    if(!createdOrUpdatedElementResult || (typeof createdOrUpdatedElementResult === 'string' || createdOrUpdatedElementResult instanceof String))
    {
      if(callback)
      {
        syncing = false;
        callback(createdOrUpdatedElementResult);
      }
    }
    else if (createdOrUpdatedElementResult) {
      await updateProposalElement({
        elementId: proposalId,
        authContext: projectId,
        elementResponseMap: elementResponseMap,
        createdUrn: createdOrUpdatedElementResult.urn,
        proposalElement: proposalElement
      })
      .then((result) => {
        if(callback)
        {
          syncing = false;
          callback(result);
        }
      })
    } 
    else
    {
      if(callback)
      {
        syncing = false;
        callback(false);
      }
    }
  });
}

export async function createOrUpdateElement(
    projectId: string,
    apiPayloadPromise: ReturnType<typeof formitGeometryToIntegrateAPIPayload>,
    spacemakerObjectStorageReference: string,
    editingElementId?: string,
    polygonData?: typesAndConsts.MultiRingPolygon[]
  ) {
    let payloadData = await apiPayloadPromise;
    const rootElementProperties = payloadData.elements[payloadData.rootElement].properties

    rootElementProperties.spacemakerObjectStorageReferences = [spacemakerObjectStorageReference]
    rootElementProperties.spacemakerObjectStorageReferenceFormats = ["axm"]

    if (polygonData!.length > 0) {
      rootElementProperties.areaStatsReps = {
        grossFloorPolygons: polygonData,
      }
    }

    const uploadLinkData: { id: string; url: string } = await getUploadLink(projectId)
    if (uploadLinkData) {
      const uploadSuccess = await uploadData(uploadLinkData.url, JSON.stringify(payloadData))

      try {
        if (uploadSuccess) {
          const url = editingElementId
            ? `/api/integrate/elements/${editingElementId}?version=2&authcontext=${projectId}&s3Id=${uploadLinkData.id}`
            : `/api/integrate/elements?version=2&authcontext=${projectId}&s3Id=${uploadLinkData.id}`
          let res = await fetch(url, {
            method: "POST",
          })
          .catch((error) => {
            console.log(error)
            throw new Error(error);
          });
  
          if (res.ok) {
            return await res.json()
          }
          else
          {
            let error = await res.json();
            let errorMessage = `${error.errorMessage}: ${error.errors ? error.errors[0].message : "no detail can be found"}`;
            console.log(errorMessage)
            return errorMessage
          }
        }
      } catch (error) {
        return false
      }
    }

    return false
  }

export async function updateProposalElement({
    elementId,
    authContext,
    elementResponseMap,
    createdUrn,
    urnToDelete,
    proposalElement
  }: {
    elementId: string
    authContext: string
    elementResponseMap?: ElementResponse
    createdUrn?: string
    urnToDelete?: string
    proposalElement: BaseElement
  }) {
    if(proposalElement != null)
    {
      // clear previously stored proposal element, which is now obsolete due to new revision
      elementResponseMap = removeElementFromMap(elementResponseMap, proposalElement.urn);
    }
    // retrieve last version of proposal
    proposalElement = await retrieveProposalElements(authContext, elementId);

    const { revision } = parseUrn(proposalElement.urn)

    if (urnToDelete) {
      elementResponseMap = removeElementFromMap(elementResponseMap, urnToDelete);
      proposalElement.children = proposalElement.children.filter((element: Child) => {
        return element.urn !== urnToDelete
      })
    } else if (createdUrn) {
      proposalElement.children.push({
        urn: createdUrn,
        key: uuid.v4(),
      } as Child)
    } else {
      console.error("not a valid update, bad parameters")
      return false
    }
  
    try {
      const res = await fetch(
        `/api/proposal/elements/${elementId}/revisions/${revision}?version=2&authcontext=${authContext}`,
        {
          method: "PUT",
          body: JSON.stringify(proposalElement),
        }
      )
      if(res.ok)
      {        
        Object.values(proposalElement!.children).filter(
          (element) => element.urn.indexOf("integrate") > -1
        ).forEach(
          (integrate) => {
            if(!elementResponseMap[integrate.urn])
            {
              elementResponseMap[integrate.urn] = integrate;
            }
          }
        );

        // update proposal in elementResponseMap after successfully created new revision
        retrieveProposalElements(authContext, elementId)
          .then((proposalElement) => {
            elementResponseMap[proposalElement.urn] = proposalElement
          });
        setGlobalState("elements", elementResponseMap);
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

export async function retrieveProposalElements(projectId, proposalId) {
  const proposalElementResponse: ElementResponse | null = await FormaService.getProposalElement(
    proposalId,
    projectId,
  )

  if(proposalElementResponse === null)
  {
    console.error("proposal can't be retrieved to be updated");
    return;
  }

  const proposalElement = Object.values(proposalElementResponse).find(
    (element) => element.properties.category === "proposal",
  )

  return proposalElement;
}
  
export async function getUploadLink(projectId: string) {
    try {
      const res = await fetch(`/api/integrate/upload_link?authcontext=${projectId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Set-Cookie": "true",
        },
      })
  
      if (res.ok) {
        return await res.json()
      }
    } catch (error) {
      return false
    }

    return false
  }

export async function uploadData(url: string, data: string) {
    try {
      const res = await fetch(url, {
        method: "PUT",
        body: data,
      })

      return res.ok
    } catch (error) {
      return false
    }
  }