import { Child, ElementResponse, BaseElement, Urn } from "@spacemakerai/element-types"
import { formitGeometryToIntegrateAPIPayload } from "../helpers/loadGeometryFromFormit"
import { parseUrn } from "../helpers/elementUtils"
import * as typesAndConsts from "../helpers/typesAndConstants"
import FormaService from "../services/forma.service" 
import { isEmpty } from "lodash-es"
import Proposal from "../components/proposals/proposal"
import { setGlobalState } from "../helpers/stateUtils"
import { getFloorGeometriesByBuildingId } from "../helpers/buildingFloorUtils"

import { returnLayersToPreviousVibility, getPolygonData, 
  updateProposalElement, createOrUpdateElement } from "conceptual-design-formitscope"

export async function getFormItGeometry(previousLayersVisibility, names, callback) { 
    WSM.Utils.GetAllGeometryInformation(typesAndConsts.MAIN_HISTORY_ID)
      .then((formitGeometry) =>
      {
        // We need to set 3D Sketch buildings layer visibility to true before getting polygon data
        FormIt.Layers.SetLayerVisibility(names, true)
          .then(() => {
            returnLayersToPreviousVibility(previousLayersVisibility);
            let polygonData = getPolygonData(typesAndConsts.MAIN_HISTORY_ID, formitGeometry);
            if(callback)
            {
              callback(formitGeometry, polygonData);
            }
          });
      });
  }

// This saves the top history by ending edit in context. So
// do NOT call this except when ending the submode.
export async function saveTemp(objectId: number) {
    await FormIt.GroupEdit.EndEditInContext();
    let savedAxm;

    if(objectId)
    {
      await FormIt.Selection.AddSelections(objectId);
      savedAxm = await getDatasForBlob();
    }
    else
    {
      await FormIt.Selection.SelectAll();
      const selectedObjects = await FormIt.Selection.GetSelections()
      const selectedObjectIds: number[] = selectedObjects.map(
        (object: { ids: { Object: any }[] }) => object.ids[0].Object,
      )

      // We search below see if a level is on an instance being saved. If there are a lot of
      // instances, this could be slow since the search on an array is linear.
      if (selectedObjectIds.length > 100) {
        console.warn(
          `We are saving ${selectedObjectIds.length} instances. Consider using a set here.`,
        )
      }

      savedAxm = await clearLevelsAndSave(selectedObjectIds);
    }
    return savedAxm;
  }

async function clearLevelsAndSave(selectedObjectIds)
{
  const levelsToDelete = []
  const levels = await WSM.APIGetAllObjectsByTypeReadOnly(typesAndConsts.MAIN_HISTORY_ID, WSM.nObjectType.nLevelType);

  if(levels)
  {
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
          WSM.nInstanceType,
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
          }
        }
      }
    })
  }
    
  // No need to save the state where levels are deleted as that would just take time
  // recomputing levels for the renderer and this is happening on exit of the submode.
  FormIt.UndoManagement.BeginState()

  if (levelsToDelete.length > 0) {
    // Delete all the levels we do not need.
    await WSM.APIDeleteObjects(typesAndConsts.MAIN_HISTORY_ID, levelsToDelete)
  }

  let savedAxm = await getDatasForBlob();

  // Undo the deletion so no update takes place.
  FormIt.UndoManagement.RejectState()
  FormIt.Selection.ClearSelections()

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
  proposalElement,
  callback) 
{
  debugger

  const floorGeometriesByBuildingId = await getFloorGeometriesByBuildingId()

  // Removing empty conceptual element
  if (formitGeometry.length === 0 && isEmpty(floorGeometriesByBuildingId)) {
    let editingElementUrn = "";

    updateProposalElement({
      elementId: proposalId,
      authContext: projectId,
      urnToDelete: editingElementUrn,
      elementResponseMap: elementResponseMap
    })
    .then(() => {
      addElementToMap(projectId, proposalId, elementResponseMap, proposalElement)
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
  mapHistoryIdToInitialDeltaId?: Map<number, number>,
  callback?: any) {
    debugger

    let proposalId = proposal.proposalId;
    let proposalUrn = proposal.urn;

    const inverseTerrainElevationTransf3d = terrainElevationTransf3d
      ? await WSM.Geom.InvertTransform(terrainElevationTransf3d)
      : undefined;

    saveTemp(objectId)
      .then(async (savedAxm) => {
        if(!savedAxm) {
          // in case save temp file didn't work, just get out
          console.error("Can't save temporary wsm file.");
          return;
        }
        let proposalElement = await retrieveProposalElements(projectId, proposalId);

        generatePayload(
          inverseTerrainElevationTransf3d, 
          proposalId, 
          projectId, 
          formitGeometry,
          elementResponseMap,
          proposalElement,
          async (integrateAPIPayload) => {

            let editingElementId = "";
            let editingElementUrn = "";
            let atLeastOneDeleted = false;

            let idsInPayload = Object.entries(integrateAPIPayload.elements).map(([key, any]) => {
              return key;
            })

            if(elementResponseMap)
            {
              debugger

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
                      polygonData, urns, proposalElement, elementResponseMap, callback);
                  }
                  else {
                    editingElementId = "";

                    let ids = { projectId, editingElementId, proposalId };
                    let urns = { editingElementUrn: null, deletingElementUrn: editingElementUrn }

                    // this is an existing element that has been deleted. Should be deleted
                    atLeastOneDeleted = await storeAndUpdateProposal(ids, integrateAPIPayload, savedAxm,
                      polygonData, urns, proposalElement, elementResponseMap, callback);
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
                    polygonData, urns, proposalElement, elementResponseMap, callback);
                }
              }
              else {
                let ids = { projectId, editingElementId, proposalId };
                let urns = { editingElementUrn: null, deletingElementUrn: null }

                // this is first time saving, save all elements
                await storeAndUpdateProposal(ids, integrateAPIPayload, savedAxm,
                  polygonData, urns, proposalElement, elementResponseMap, callback);
              }
            }

        });
    });
  }

async function storeAndUpdateProposal(ids, integrateAPIPayload, savedAxm, polygonData, urns, proposalElement, elementResponseMap, callback) {
    let projectId = ids.projectId;
    let editingElementId = ids.editingElementId;
    let proposalId = ids.proposalId;

    let editingElementUrn = urns.editingElementUrn;
    let deletingUrn = urns.deletingElementUrn;

    if(!deletingUrn)
    {
      generateStorageReference(savedAxm, projectId, 
        async (spacemakerObjectStorageReferenceId) => {
          if(!spacemakerObjectStorageReferenceId) {
            if(callback)
            {
              callback(false);
            }
            return;
          }
          await createElementAndUpdateProposal(projectId, integrateAPIPayload, spacemakerObjectStorageReferenceId,
            editingElementId, proposalId, editingElementUrn, proposalElement, elementResponseMap, callback);
      });
    }
    else {
      debugger
      if(proposalElement === null) {
        proposalElement = await retrieveProposalElements(projectId, proposalId);
      }
      else
      {
        // clear previously stored proposal element, which is now obsolete due to new revision
        elementResponseMap = removeElementFromMap(elementResponseMap, proposalElement.urn);
      }

      return await updateProposalElement({
        elementId: proposalId,
        authContext: projectId,
        urnToDelete: deletingUrn,
        elementResponseMap: elementResponseMap,
      });
    }
  }

async function createElementAndUpdateProposal(projectId, integrateAPIPayload, spacemakerObjectStorageReferenceId,
  editingElementId, proposalId, editingElementUrn, proposalElement, elementResponseMap, callback) {
  let editingElementSystem: string
  let needsChangeOfOwnership: boolean
    
  if (editingElementUrn) {
    const urnParts = parseUrn(editingElementUrn)
    editingElementId = urnParts.id
    editingElementSystem = urnParts.system
  }

  //Check the system of the edting element, which may not be integrate (could be floor-stacks system).
  //If it's not the integrate system, we need to do a change of ownership which involves:
  //1. Creating new element
  //2. Add new element to proposal
  //3. Remove the previous element ref from proposal
  if (editingElementSystem && editingElementSystem !== "integrate") {
    needsChangeOfOwnership = true
  }

  createOrUpdateElement({
    projectId,
    payloadData: integrateAPIPayload,
    spacemakerObjectStorageReference: spacemakerObjectStorageReferenceId,
    //Item 1 from above, do not pass editingElementId so we create a new element.
    editingElementId: needsChangeOfOwnership ? undefined : editingElementId,
  })
  .then(async (createdOrUpdatedElementResult) => {
    if(!createdOrUpdatedElementResult || (typeof createdOrUpdatedElementResult === 'string' || createdOrUpdatedElementResult instanceof String))
    {
      if(callback)
      {
        callback(createdOrUpdatedElementResult);
      }
    }
    else if (createdOrUpdatedElementResult) {
      // clear previously stored proposal element, which is now obsolete due to new revision
      elementResponseMap = removeElementFromMap(elementResponseMap, proposalElement.urn);

      updateProposalElement({
        elementId: proposalId,
        authContext: projectId,
        elementResponseMap: elementResponseMap,
        createdUrn: createdOrUpdatedElementResult.urn
      })
      .then((result) => {
        addElementToMap(projectId, proposalId, elementResponseMap, proposalElement)
        if(callback)
        {
          callback(result);
        }
      })
    } 
    else
    {
      if(callback)
      {
        callback(false);
      }
    }
  });
}

export async function createOrUpdateElementLoc(
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

export function removeElementFromMap(elementResponseMap, keyToRemove) {
  let clearedMap: ElementResponse = {};
  for (const [urn, element] of Object.entries(elementResponseMap)) {
    if(urn !== keyToRemove)
    {
      clearedMap[urn] = element;
    }
  }
  return clearedMap;
}

function addElementToMap(authContext: string, elementId: string, 
  elementResponseMap: ElementResponse, proposalElement: BaseElement) {
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
}