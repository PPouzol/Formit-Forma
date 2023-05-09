
import {
  Child,
  Urn,
  BaseElement
} from "@spacemakerai/element-types"
import { v4 as uuid } from "uuid"
import { parseUrn } from "../helpers/elementUtils"
import * as typesAndConsts from "../helpers/typesAndConstants"
import { ElementResponse  } from "@spacemakerai/element-types"
import { downloadAllChild, getUrlAndLoad } from "../helpers/downloadUtils"
import { getFormItGeometry, createIntegrateAPIElementAndUpdateProposal, findElementPathFromInstanceAndRemoveFromSet } from "../helpers/saveUtils"
import { createCategoryLayers } from "../helpers/layerUtils"
import Proposal from "../components/proposals/proposal"
import formaService from "./forma.service"
import { setGlobalState, useGlobalState } from "../helpers/stateUtils"

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
    }
  }

  async save({
    projectId,
    proposal,
    elementResponseMap,
    terrainElevationTransf3d,
    loadedIntegrateElements,
    mapHistoryIdToInitialDeltaId,
    axmPathsToDeleteSet
  }: {
    projectId: string
    proposal: Proposal
    elementResponseMap: ElementResponse,
    terrainElevationTransf3d: any,
    loadedIntegrateElements: string[],
    mapHistoryIdToInitialDeltaId: Map<number, number>,
    axmPathsToDeleteSet: Set<string>
  }, callback: any) {  
    const hasSomethingToSave = await FormIt.Model.IsModified();
    if(!hasSomethingToSave)
      return;
    this.beforeSaveLayerHandling()
      .then(async() => {
        let syncing = false;
            // Keep track if reference histories that have been updated with a new string attribute
            // for linking. We use a set for this.
            const updatedReferenceHistories = new Set<number>()

            // Make sure each top level body and mesh is put into its own instance.
            // The code assumes that levels are only applied to instances at this
            // point. If that is incorrect, we'll need to move the levels from bodies
            // and meshes unto their containing instance.
            getFormItGeometry( 
              typesAndConsts.formItLayerNames.FORMA_BUILDINGS, 
              mapHistoryIdToInitialDeltaId,
              axmPathsToDeleteSet,
              (formitGeometry, polygonData, instancesToBeSaved, instanceId) => {

                if(!polygonData) {
                  polygonData = {};
                }

                this.handleInstanceHistory(updatedReferenceHistories, instanceId, axmPathsToDeleteSet)
                  .then(() => {
                    syncing = this.checkSyncingAndSync(syncing, async () => {
                      debugger
                      
                      await createIntegrateAPIElementAndUpdateProposal(
                        terrainElevationTransf3d,
                        formitGeometry,
                        proposal,
                        projectId,
                        polygonData,
                        instanceId,
                        elementResponseMap,
                        loadedIntegrateElements,
                        instancesToBeSaved,
                        syncing,
                        callback
                      );
                    })
                  })
              }
            );
      })
  }

  checkSyncingAndSync(syncing, syncFunction) {
    if(!syncing)
    {
      syncFunction();
      return true;
    }
    else
    {
      setTimeout(this.checkSyncingAndSync, 300); // try again in 300 milliseconds
    }
    return false;
  }

  async handleInstanceHistory(updatedReferenceHistories, instanceId, axmPathsToDeleteSet) {
    // We have something to save. Make sure the reference history is identified so re-entering 3d sketch
    // can link matching histories.
    const refHistoryId = await WSM.APIGetGroupReferencedHistoryReadOnly(typesAndConsts.MAIN_HISTORY_ID, instanceId)
    if (!updatedReferenceHistories.has(refHistoryId)) {
      // Find existing linking information which cannot be trusted.
      const stringAttIdsForHistoryLinking = await WSM.APIGetStringAttributesByKeyReadOnly(
        refHistoryId,
        WSM.INVALID_ID,
        typesAndConsts.FORMA_REF_HISTORY_LINK_ID,
      )

      // Delete all the linking information. It could be bad for example in the case of make unique.
      if (stringAttIdsForHistoryLinking?.length > 0) {
        await WSM.APIDeleteObjects(refHistoryId, stringAttIdsForHistoryLinking)
      }

      // Add a string attribute used to link reference histories on load.
      await WSM.APICreateStringAttribute(refHistoryId, typesAndConsts.FORMA_REF_HISTORY_LINK_ID, uuid(), [])

      // Make sure not to consider this reference history again.
      updatedReferenceHistories.add(refHistoryId)
    }

    // Look for the path to use if the element alread exists.
    const instanceElementPath: string = await findElementPathFromInstanceAndRemoveFromSet(
      instanceId,
      axmPathsToDeleteSet
    )

    return instanceElementPath;
  }

  async beforeSaveLayerHandling() {
    // Make sure each top level body and mesh is put into its own instance.
    // The code assumes that levels are only applied to instances at this
    // point. If that is incorrect, we'll need to move the levels from bodies
    // and meshes unto their containing instance.
    const aBodiesAndMeshes = []
    const aOtherForInstance = []
    const topLevels = await WSM.APIGetAllNonOwnedReadOnly(typesAndConsts.MAIN_HISTORY_ID)
    for (const nObjID of topLevels) {
      const nType =  await WSM.APIGetObjectTypeReadOnly(typesAndConsts.MAIN_HISTORY_ID, nObjID)
      if (nType === WSM.nObjectType.nBodyType || nType === WSM.nObjectType.nMeshType) {
        aBodiesAndMeshes.push(nObjID)
      } else if (
        nType === WSM.nFaceType ||
        nType === WSM.nEdgeType ||
        nType === WSM.nVertexType ||
        nType === WSM.nLineMeshType ||
        nType === WSM.nPointMeshType
      ) {
        aOtherForInstance.push(nObjID)
      }
    }

    if (aBodiesAndMeshes.length > 0 || aOtherForInstance.length > 0) {
      await FormIt.UndoManagement.BeginState()

      // Create one instance per each body and mesh.
      for (const nObjID of aBodiesAndMeshes) {
        await WSM.Utils.CreateAlignedAndCenteredGroup(typesAndConsts.MAIN_HISTORY_ID, [nObjID])
      }

      if (aOtherForInstance.length > 0) {
        // Create one instance for all the remaining stuff
        await WSM.Utils.CreateAlignedAndCenteredGroup(typesAndConsts.MAIN_HISTORY_ID, aOtherForInstance)
      }

      await FormIt.UndoManagement.EndState("Move toplevels to instances")
    }
  }
  
  getTopLevelObjects(
    elements: Record<Urn, BaseElement>,
    rootUrn: string,
    rootKey: typesAndConsts.InternalPath = typesAndConsts.ROOT_KEY,
  ): { child: Child; parentPath: typesAndConsts.InternalPath; scenario: boolean }[] {
    let prop = elements[rootUrn];
    const proposalChildren = prop.children || []
    const scenarioChild: Child | undefined = proposalChildren?.find((c) => prop.properties?.flags?.[c.key]?.scenario)

    const topLevelElements: { child: Child; parentPath: typesAndConsts.InternalPath; scenario: boolean }[] = []

    for (let child of proposalChildren) {
      if (child === scenarioChild) continue
      topLevelElements.push({ child, parentPath: rootKey, scenario: false })
    }

    return topLevelElements
  }

  buildElementInfo(
    child: Child,
    parentPath: typesAndConsts.InternalPath,
    scenario: boolean,
    elements: Record<Urn, BaseElement>,
  ): typesAndConsts.ElementInfo[] {
    const element = elements[child.urn]
    const path = parentPath + "/" + child.key
    const category = typesAndConsts.categoryMapping[element.properties?.category as typesAndConsts.Category] ?? "generic"
    if (category === "terrain") return []
    return [
      {
        path,
        category,
        scenario,
        element
      },
    ]
  }

  async fetchAndLoadElements(
    hiddenLayers: string[],
    proposal: Proposal,
    callback: any
  ) {
    const proposalElementResponse: ElementResponse = await formaService.getProposalElement(
      proposal.proposalId,
      proposal.projectId,
    )

    if (!proposalElementResponse) {
      return
    }

    const proposalElement = Object.values(proposalElementResponse).find((element) => {
      return element.properties.category === "proposal"
    })

    const elementResponseMap: ElementResponse = {
      [proposalElement.urn]: proposalElement
    }

    let loadedIntegrateElements = [];

    let elements: Record<Urn, BaseElement> = {
      [proposalElement.urn]: proposalElement
    }

    for(const element of proposalElement.children)
    {
      const parsedUrn = parseUrn(element.urn);
      let type = parsedUrn.system;
      let elementId = parsedUrn.id;
      let revision = parsedUrn.revision;
      await formaService.getElement(
        type,
        elementId,
        revision,
        proposal.projectId,
      ).then((elementResponse) => {
        let urn = element.urn;
        elements[urn] = elementResponse[element.urn]
      })
    }

    const topLevelObjects = this.getTopLevelObjects(elementResponseMap, proposalElement.urn)
    const categorizedPaths: Record<string, Record<string, typesAndConsts.InternalPath[]>> = { proposal: {}, scenario: {} };

    const toplevel: typesAndConsts.ElementInfo[] = topLevelObjects.flatMap(({ child, parentPath }) =>
      this.buildElementInfo(
        child,
        parentPath,
        false,
        elements
      ),
    )

    for (const el of toplevel) {
      const layerType = el.scenario ? "scenario" : "proposal"
      categorizedPaths[layerType][el.category] = categorizedPaths[layerType][el.category] ?? []
      categorizedPaths[layerType][el.category].push(el.path)
    }
    let proposalCategorizedPaths = categorizedPaths["proposal"];

    // Category Layers needs to be created before loading axm/glb to work properly.
    let layersCreated = await createCategoryLayers()
    if(layersCreated)
    {
      let promises = downloadAllChild(proposalElement, proposal.projectId, elementResponseMap, loadedIntegrateElements);
      await Promise.all(promises)
            .then(async () => {
                getUrlAndLoad(elementResponseMap, proposalElement, proposal, "", proposalCategorizedPaths, hiddenLayers, callback)
                  .then((result) => {
                    if(result){
                      callback(proposal.proposalId, elementResponseMap, loadedIntegrateElements);
                    }
                  });
            });
    }
  }
}

export default new FormaSaveService();