import { Child, ElementResponse, BaseElement, Urn } from "@spacemakerai/element-types"
import { formitGeometryToIntegrateAPIPayload } from "../helpers/loadGeometryFromFormit"
import { parseUrn } from "../helpers/elementUtils"
import { getUrnFromPath } from "../helpers/loadUtils"
import * as typesAndConsts from "../helpers/typesAndConstants"
import * as uuid from "uuid"
import FormaService from "../services/forma.service" 
import { isEmpty } from "lodash-es"
import { getFloorGeometriesByBuildingId } from "../helpers/buildingFloorUtils"
import { setGlobalState } from "./stateUtils"
import Proposal from "../components/proposals/proposal"

export async function getFormitGeometry(names, callback) {
    hideLayersBeforeSave()
      .then(async (previousLayersVisibility) => {
        FormIt.Layers.SetLayerVisibility(names, false)
          .then(() => {
            WSM.Utils.GetAllGeometryInformation(typesAndConsts.MAIN_HISTORY_ID)
              .then((formitGeometry) =>
                {
                  // We need to set 3D Sketch buildings layer visibility to true before getting polygon data
                  FormIt.Layers.SetLayerVisibility(names, true)
                  .then(() => {
                    returnLayersToPreviousVibility(previousLayersVisibility)
                      .then(() => {
                        getPolygonData(typesAndConsts.MAIN_HISTORY_ID, formitGeometry, callback);
                      })
                  });
                });
          })
      });
  }

export async function getAllGeometryInformations() {
    var geometries = await WSM.Utils.GetAllGeometryInformation(typesAndConsts.MAIN_HISTORY_ID);
    if(geometries === null)
      geometries = [];
    return geometries;
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
      typesAndConsts.formItLayerNames.FORMA_BUILDING_ENVELOPE,
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

export async function getPolygonData(objectId = WSM.INVALID_ID, formitGeometry, callback) {
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
        callback(formitGeometry, polygonData);
      }
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
  let savedAxmDatas = await FormIt.FormaAddIn.ReadAXMandMakeBlob(axmPath);

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
  callback) 
{
  const inverseTerrainElevationTransf3d = terrainElevationTransf3d
    ? WSM.Geom.InvertTransform(terrainElevationTransf3d)
    : undefined

  const floorGeometriesByBuildingId = await getFloorGeometriesByBuildingId()

  // Removing empty conceptual element
  if (formitGeometry.length === 0 && isEmpty(floorGeometriesByBuildingId)) {
    let editingElementUrn = "";
    // if(editingElementPath) {
    //   editingElementUrn = getUrnFromPath(editingElementPath, elementResponseMap);
    // }

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
      inverseTerrainElevationTransf3d,
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
  formitGeometry: any,
  proposal: Proposal,
  projectId: string,
  polygonData?: any,
  objectId?: number,
  elementResponseMap?: ElementResponse,
  callback?: any) {
    let proposalId = proposal.proposalId;
    let proposalUrn = proposal.urn;

    saveTemp(objectId)
      .then(async (savedAxm) => {
        if(!savedAxm) {
          // in case save temp file didn't work, just get out
          console.error("Can't save temporary wsm file.");
          return;
        }
        let terrainElevationTransf3d = await WSM.Geom.Transf3d();
        generatePayload(
          terrainElevationTransf3d, 
          proposalId, 
          projectId, 
          formitGeometry,
          elementResponseMap,
          async (integrateAPIPayload) => {
            let proposalElement = await retrieveProposalElements(projectId, proposalId);

            let editingElementId = "";
            let editingElementUrn = "";
            let atLeastOneDeleted = false;

            debugger

            let idsInPayload = Object.entries(integrateAPIPayload.elements).map(([key, any]) => {
              return key;
            })

            if(elementResponseMap)
            {
              let currentProposal = elementResponseMap[proposalUrn];
              if(currentProposal) {
                const integrateElements = Object.values(currentProposal.children).filter(
                  (element: BaseElement) => {
                    return element.urn.indexOf(":integrate:") > 0;
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
                      polygonData, urns, proposalElement, callback);
                  }
                  else {
                    editingElementId = "";

                    let ids = { projectId, editingElementId, proposalId };
                    let urns = { editingElementUrn: null, deletingElementUrn: editingElementUrn }

                    // this is an existing element that has been deleted. Should be deleted
                    atLeastOneDeleted = await storeAndUpdateProposal(ids, integrateAPIPayload, savedAxm,
                      polygonData, urns, proposalElement, callback);
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
                    polygonData, urns, proposalElement, callback);
                }
              }
              else {
                let ids = { projectId, editingElementId, proposalId };
                let urns = { editingElementUrn: null, deletingElementUrn: null }

                // this is first time saving, save all elements
                await storeAndUpdateProposal(ids, integrateAPIPayload, savedAxm,
                  polygonData, urns, proposalElement, callback);
              }
            }

        });
    });
  }

async function storeAndUpdateProposal(ids, integrateAPIPayload, savedAxm, polygonData, urns, proposalElement, callback) {
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
            editingElementId, polygonData, proposalId, editingElementUrn, proposalElement, callback);
      });
    }
    else {
      return await updateProposalElement({
        elementId: proposalId,
        authContext: projectId,
        elementResponseMap: null,
        urnToDelete: deletingUrn,
        proposalElement: proposalElement
      });
    }
  }

async function createElementAndUpdateProposal(projectId, integrateAPIPayload, spacemakerObjectStorageReferenceId,
  editingElementId, polygonData, proposalId, editingElementUrn, proposalElement, callback) {
  createOrUpdateElement(
    projectId,
    integrateAPIPayload,
    spacemakerObjectStorageReferenceId,
    editingElementId,
    polygonData
  )
  .then(async (createdOrUpdatedElement) => {
    if (createdOrUpdatedElement) {
      updateProposalElement({
        elementId: proposalId,
        authContext: projectId,
        elementResponseMap: null,
        createdUrn: createdOrUpdatedElement.urn,
        urnToUpdate: editingElementUrn,
        editingElementPath: "",
        proposalElement: proposalElement
      })
      .then((success) => {
        if(callback)
        {
          callback(success);
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
          const res = await fetch(url, {
            method: "POST",
          })
  
          if (res.ok) {
            return await res.json()
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
    urnToUpdate,
    editingElementPath,
    proposalElement
  }: {
    elementId: string
    authContext: string
    elementResponseMap?: ElementResponse
    createdUrn?: string
    urnToDelete?: string
    urnToUpdate?: string
    editingElementPath?: string
    proposalElement: BaseElement
  }) {
    if(proposalElement === null) {
      proposalElement = await retrieveProposalElements(authContext, elementId);
    }

    const { revision } = parseUrn(proposalElement.urn)

    if (createdUrn && urnToUpdate) {
      const elementToUpdateKey = editingElementPath.split("/").at(-1)
      const isTopLevelElement = editingElementPath.split("/").length === 2
      if (!isTopLevelElement) {
        const parentPath = editingElementPath.split("/").slice(0, 2).join("/")
        const parentUrn = getUrnFromPath(parentPath, elementResponseMap)
        const isGroup = parseUrn(parentUrn).system === "group"
  
        if (isGroup) {
          const groupElement = elementResponseMap[parentUrn as Urn]
          const nextRevision = new Date().getTime()
          const { id, revision } = parseUrn(parentUrn)
  
          const childIndex = groupElement.children.findIndex(
            (element: Child) => element.urn === urnToUpdate && element.key === elementToUpdateKey,
          )
          groupElement.children[childIndex].urn = createdUrn as Urn
          groupElement.children[childIndex].transform = undefined
  
          const url = `/api/group/elements/${id}/revisions/${revision}?&version=2&authcontext=${authContext}&parentUrn=${proposalElement.urn}&nextRevision=${nextRevision}`
          const response = await fetch(url, { method: "PUT", body: JSON.stringify(groupElement) })
          const newGroupElement: BaseElement = await response.json()
  
          const groupChildIndex = proposalElement.children.findIndex(
            (element) => element.urn === parentUrn,
          )
          proposalElement.children[groupChildIndex].urn = newGroupElement.urn
        }
      } else {
        const childIndex = proposalElement.children.findIndex((element: Child) => {
          return element.urn === urnToUpdate && element.key === elementToUpdateKey
        })
        proposalElement.children[childIndex].urn = createdUrn as Urn
  
        //reset transform, since it's now baked into the axm and glb.
        proposalElement.children[childIndex].transform = undefined
      }
    } else if (urnToDelete) {
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
        },
      )
  
      return res.ok
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