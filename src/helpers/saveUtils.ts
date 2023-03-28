import { Child, ElementResponse } from "@spacemakerai/element-types"
import { formitGeometryToIntegrateAPIPayload } from "../helpers/loadGeometryFromFormit"
import { parseUrn } from "../helpers/elementUtils"
import * as typesAndConsts from "../helpers/typesAndConstants"
import * as uuid from "uuid"
import FormaService from "../services/forma.service" 

export async function getFormitGeometry(names, callback) {
    this.hideLayersBeforeSave().then(async (previousLayersVisibility) => {
      FormIt.Layers.SetLayerVisibility(names, false)
        .then(() => {
          FormItInterface.CallMethod("FormitPlugin.GetAllGeometryInformation", [], async (formitGeometryStr) => {
            let result = JSON.parse(formitGeometryStr);
            // We need to set 3D Sketch buildings layer visibility to true before getting polygon data
            FormIt.Layers.SetLayerVisibility(names, true)
            .then(() => {
              this.returnLayersToPreviousVibility(previousLayersVisibility)
              .then(() => {
                 this.getPolygonData(typesAndConsts.MAIN_HISTORY_ID, result, callback);
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
      let layerVisibility = await this.mapLayerVisibility(layerName);
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
    FormItInterface.CallMethod("FormitPlugin.ComputeGeometryFromLevels", [objectId], (results) => {
      let polygonData = {}
      let geometryData = JSON.parse(results);
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
export async function saveTemp(objectId, historyId) {
    await FormIt.GroupEdit.EndEditInContext();
    await FormIt.Selection.SelectAll();
    //success = await FormIt.SaveFile(filePath, FormIt.SaveOptions.AllObjects);
    var saveString = await WSM.APISaveToStringReadOnly(historyId, [objectId]);
    await FormIt.Selection.ClearSelections();

    return saveString;
  }

export async function generateStorageReference(saveContent, projectId, callback) {
    const fileBlob = new Blob([saveContent], {
      type: "application/octet-stream",
    })
    const file = new File([fileBlob], "internalRepresentation.wsm")
    
    await this.createS3Object(file, projectId)
      .then((spacemakerObjectStorageReferenceId) => {
          if(callback)
          {
            callback(spacemakerObjectStorageReferenceId);
          }
      })
  }

export async function createS3Object(file: File, projectId: string) {
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
  
        formData.append("file", file)
  
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

export async function generatePayload(formitGeometry, callback) {
    formitGeometryToIntegrateAPIPayload(
      formitGeometry
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

export async function createIntegrateAPIElementAndUpdateProposal({
    formitGeometry,
    proposalId,
    projectId,
    polygonData,
    objectId,
    callback
  }: {
    formitGeometry: any
    proposalId: string
    projectId: string
    polygonData?: any,
    objectId?: number,
    callback?: any
  }) {
    this.saveTemp(objectId, typesAndConsts.MAIN_HISTORY_ID)
      .then((saveContent) => {
        if(!saveContent) {
          // in case save temp file didn't work, just get out
          console.error("Can't save temporary wsm file.");
          return;
        }
        this.generatePayload(formitGeometry,
          async (integrateAPIPayload) => {
            this.generateStorageReference(saveContent, projectId, 
              async (spacemakerObjectStorageReferenceId) => {
                if(!spacemakerObjectStorageReferenceId) {
                  if(callback)
                  {
                    callback(false);
                  }
                  return;
                }
                this.createOrUpdateElement(
                    projectId,
                    integrateAPIPayload,
                    spacemakerObjectStorageReferenceId,
                    polygonData
                  )
                .then(async (createdOrUpdatedElement) => {
                  if (createdOrUpdatedElement) {
                    this.updateProposalElement({
                      elementId: proposalId,
                      authContext: projectId,
                      createdUrn: createdOrUpdatedElement.urn
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
            });
          });
    });
  }

export async function createOrUpdateElement(
    projectId: string,
    apiPayloadPromise: ReturnType<typeof formitGeometryToIntegrateAPIPayload>,
    spacemakerObjectStorageReference: string,
    polygonData?: typesAndConsts.MultiRingPolygon[]
  ) {
    let payloadData = await apiPayloadPromise;
    const rootElementProperties = payloadData.elements[payloadData.rootElement].properties

    rootElementProperties.spacemakerObjectStorageReferences = [spacemakerObjectStorageReference]
    rootElementProperties.spacemakerObjectStorageReferenceFormats = ["wsm"]

    if (polygonData!.length > 0) {
      rootElementProperties.areaStatsReps = {
        grossFloorPolygons: polygonData,
      }
    }

    const uploadLinkData: { id: string; url: string } = await this.getUploadLink(projectId)
    if (uploadLinkData) {
      const uploadSuccess = await this.uploadData(uploadLinkData.url, JSON.stringify(payloadData))

      try {
        if (uploadSuccess) {
          const url = `/api/integrate/elements?version=2&authcontext=${projectId}&s3Id=${uploadLinkData.id}`
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
    createdUrn,
  }: {
    elementId: string
    authContext: string
    createdUrn?: string
  }) {
    const proposalElementResponse: ElementResponse | null = await FormaService.getProposalElement(
      elementId,
      authContext,
    )

    if(proposalElementResponse === null)
    {
      console.error("proposal can't be retrieved to be updated");
      return;
    }

    for (const [urn, element] of Object.entries(proposalElementResponse!)) {
      if (element.properties?.category === "proposal") {
        const { revision } = parseUrn(urn)

        if (createdUrn) {
          element.children!.push({
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
              body: JSON.stringify(element)
            },
          )
  
          return res.ok
        } catch (error) {
          return false;
        }
      }
    }
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