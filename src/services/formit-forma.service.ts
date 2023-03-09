
import { Child, ElementResponse } from "@spacemakerai/element-types"
import { formitGeometryToIntegrateAPIPayload } from "../helpers/loadGeometryFromFormit"
import { parseUrn } from "../helpers/elementUtils"
import { MultiRingPolygon, MAIN_HISTORY_ID, FEET_TO_METER, formItLayerNames, Polygon } from "../helpers/typesAndConstants"
import { getFloorGeometriesByBuildingId } from "../helpers/buildingFloorUtils"
import * as uuid from "uuid"

class FormaSaveService {
  getCookie(cookieName)
  {
    const nameLenPlus = (cookieName.length + 1);
    return document.cookie
      .split(';')
      .map(c => c.trim())
      .filter(cookie => {
        return cookie.substring(0, nameLenPlus) === `${cookieName}=`;
      })
      .map(cookie => {
        return decodeURIComponent(cookie.substring(nameLenPlus));
      })[0] || null;
  }
  
  accessSpacemaker(fromWeb)
  {
    let loginDialog = null;
    if(fromWeb)
    {
      loginDialog = window.open("https://app.spacemaker.ai/auth/login?rd=https%3A%2F%2Fapp.spacemaker.ai%2Fprojects", "_blank", "width= 500px, height=500px");
      let id = setInterval(() => {
        // try to retrieve cookie each 1s, and close popup in case of success
        let cookie = this.getCookie('ajs_user_id');
        if(cookie !== null)
        {
          clearInterval(id);
          if(loginDialog !== null)
          {
            loginDialog.close();
          } 
        }
      }, 1000);
    }
    else
    {
      //const baseUrl = "https%3A%2F%2Fapp.spacemaker.ai%2Fprojects";
      const baseUrl = "https://local.spacemaker.ai:3001";
      const returnUrl = `${baseUrl}?loggedIn=1`;
      window.location.replace(`https://app.spacemaker.ai/auth/login?rd=${returnUrl}`);
      //FormItInterface.CallMethod("FormitPlugin.ShowDialog");
    }
  }
  
  async save({
    projectId,
    proposalId
  }: {
    projectId: string
    proposalId: string
  }, callback: any) {
    const hasSomethingToSave = await FormIt.Model.IsModified();
  
    // returning early if there's nothing to save
    if (!hasSomethingToSave) return
  
    // Make sure each top level body and mesh is put into its own instance.
    // The code assumes that levels are only applied to instances at this
    // point. If that is incorrect, we'll need to move the levels from bodies
    // and meshes unto their containing instance.
    FormItInterface.CallMethod("FormitPlugin.GetAllGeometryInformation", [],
        async () => {
          this.getFormitGeometry(formItLayerNames.FORMA_BUILDINGS, (formitGeometry, polygonData) => {
            if(!polygonData)
              polygonData = {};
              
            let objectId = 0;
            this.createIntegrateAPIElementAndUpdateProposal({
              formitGeometry,
              proposalId,
              projectId,
              polygonData,
              objectId,
              callback
            })
          });
        });
  }

  async getFormitGeometry(names, callback) {
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
                 this.getPolygonData(MAIN_HISTORY_ID, result, callback);
              })
            });
          });
        })
    });
  }

  async getAllGeometryInformations() {
    var geometries = await WSM.Utils.GetAllGeometryInformation(MAIN_HISTORY_ID);
    if(geometries === null)
      geometries = [];
    return geometries;
  }

  async returnLayersToPreviousVibility(
    layers: Array<{ layerData: { Visible: boolean }; previousVisiblity: boolean }>,
  ) {
    await layers.forEach(async (layer) => {
      if (layer.layerData) {
        layer.layerData.Visible = layer.previousVisiblity
        await FormIt.Layers.SetLayersVisibility([layer.layerData])
      }
    })
  }

  async hideLayersBeforeSave() {
    const layersToAvoidSaving = [
      formItLayerNames.FORMA_CONTEXT,
      formItLayerNames.FORMA_TERRAIN,
      formItLayerNames.SURROUNDING_BUILDINGS,
      formItLayerNames.FORMA_AUTO_BUILDINGS,
      formItLayerNames.FORMA_PROPOSAL_BUILDINGS,
      formItLayerNames.FORMA_SITE_LIMIT,
      formItLayerNames.FORMA_BUILDING,
      formItLayerNames.FORMA_VEGETATION,
      formItLayerNames.FORMA_GENERIC,
      formItLayerNames.FORMA_ROAD,
      formItLayerNames.FORMA_RAILS,
      formItLayerNames.FORMA_PROPERTY_BOUNDARY,
      formItLayerNames.FORMA_ZONE,
      formItLayerNames.FORMA_BUILDING_ENVELOPE,
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

  async mapLayerVisibility(layerName: string) {
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

  async getPolygonData(objectId = WSM.INVALID_ID, formitGeometry, callback) {
    FormItInterface.CallMethod("FormitPlugin.ComputeGeometryFromLevels", [objectId], (results) => {
      let polygonData = {}
      let geometryData = JSON.parse(results);
      if(geometryData)
      {
          (geometryData as any[]).map((geometryForLevel) => {
          const { outer_loop, inner_loops } = geometryForLevel.second[0]

          const outerRings: Polygon = (outer_loop.vertices as any[]).map((point3d) => [
            point3d.x * FEET_TO_METER,
            point3d.y * FEET_TO_METER,
          ])

          const multiRingPolygon = [outerRings]

          if (inner_loops.length > 0) {
            const innerRings: Polygon = (inner_loops[0].vertices as any[]).map((point3d) => [
              point3d.x * FEET_TO_METER,
              point3d.y * FEET_TO_METER,
            ])

            multiRingPolygon.push(innerRings)
          }

          return multiRingPolygon
        }) as MultiRingPolygon[];
      }

      if(callback)
      {
        callback(formitGeometry, polygonData);
      }
    });
  }

  // This saves the top history by ending edit in context. So
  // do NOT call this except when ending the submode.
  async saveTemp(objectId, historyId) {
    await FormIt.GroupEdit.EndEditInContext();
    await FormIt.Selection.SelectAll();
    //success = await FormIt.SaveFile(filePath, FormIt.SaveOptions.AllObjects);
    var saveString = await WSM.APISaveToStringReadOnly(historyId, [objectId]);
    await FormIt.Selection.ClearSelections();

    return saveString;
  }

  async generateStorageReference(saveContent, projectId, callback) {
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

  async createS3Object(file: File, projectId: string) {
    const payload = JSON.stringify({
      projectId
    })
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

    return false
  }

  generatePayload(formitGeometry, callback) {
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
  
  getWSMLayerID(histID, FormaLayerName) {
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

  async createIntegrateAPIElementAndUpdateProposal({
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
    this.saveTemp(objectId, MAIN_HISTORY_ID)
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
                      debugger

                      if(callback)
                      {
                        callback(success);
                      }
                    })
                  }
                });
            });
          });
    });
  }

  async createOrUpdateElement(
    projectId: string,
    apiPayloadPromise: ReturnType<typeof formitGeometryToIntegrateAPIPayload>,
    spacemakerObjectStorageReference: string,
    polygonData?: MultiRingPolygon[]
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

      if (uploadSuccess) {
        const url = `/api/integrate/elements?version=2&authcontext=${projectId}&s3Id=${uploadLinkData.id}`
        const res = await fetch(url, {
          method: "POST",
        })

        if (res.ok) {
          return await res.json()
        }
      }
    }

    return false
  }

  async updateProposalElement({
    elementId,
    authContext,
    createdUrn,
  }: {
    elementId: string
    authContext: string
    createdUrn?: string
  }) {
    const proposalElementResponse: ElementResponse | null = await this.getProposalElement(
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

        const res = await fetch(
          `/api/proposal/elements/${elementId}/revisions/${revision}?version=2&authcontext=${authContext}`,
          {
            method: "PUT",
            body: JSON.stringify(element)
          },
        )

        return res.ok
      }
    }
  }
  
  async getUploadLink(projectId: string) {
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

    return false
  }

  async uploadData(url: string, data: string) {
    const res = await fetch(url, {
      method: "PUT",
      body: data,
    })

    return res.ok
  }

  async getProposalElement(
    elementId: string,
    authContext: string,
  ): Promise<ElementResponse | null> {
    const url = `/api/proposal/elements/${elementId}?authcontext=${authContext}`;
    const res = await fetch(url);

    if (res.ok) {
      return (await res.json()) as ElementResponse
    }
    return null;
  }
}

export default new FormaSaveService();