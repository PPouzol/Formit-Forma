
import { ElementResponse } from "@spacemakerai/element-types"
import * as typesAndConsts from "../helpers/typesAndConstants"
import { downloadAllChild, getUrlAndLoad, getElementsAndSaveCache } from "../helpers/downloadUtils"
import { getFormitGeometry, createIntegrateAPIElementAndUpdateProposal, getProposalElement } from "../helpers/saveUtils"
import { createCategoryLayers } from "../helpers/layerUtils"

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
    // Make sure each top level body and mesh is put into its own instance.
    // The code assumes that levels are only applied to instances at this
    // point. If that is incorrect, we'll need to move the levels from bodies
    // and meshes unto their containing instance.
    FormItInterface.CallMethod("FormitPlugin.GetAllGeometryInformation", [],
        async () => {
          getFormitGeometry(typesAndConsts.formItLayerNames.FORMA_BUILDINGS, (formitGeometry, polygonData) => {
            if(!polygonData)
              polygonData = {};
              
            let objectId = 0;
            createIntegrateAPIElementAndUpdateProposal({
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

  async getElementsAndSaveCache(
    authContext: string,
    proposalId: string,
    callback: any
  ) {
    await getElementsAndSaveCache(authContext, proposalId, callback);
  }

  async fetchAndLoadElements(
    authContext: string,
    proposalId: string,
    proposalCategorizedPaths: Record<string, string[]>,
    hiddenLayers: string[],
    callback: any
  ) {
    const proposalElementResponse: ElementResponse = await getProposalElement(
      proposalId,
      authContext,
    )

    if (!proposalElementResponse) {
      return
    }

    const proposalElement = Object.values(proposalElementResponse).find((element) => {
      return element.properties.category === "proposal"
    })

    const elementResponseMap: ElementResponse = {
      [proposalElement.urn]: proposalElement,
    }

    // Category Layers needs to be created before loading axm/glb to work properly.
    let layersCreated = await createCategoryLayers()
    if(layersCreated)
    {

      let promises = downloadAllChild(proposalElement, authContext, elementResponseMap);
      await Promise.all(promises)
            .then(async () => {
                getUrlAndLoad(elementResponseMap, proposalElement, "", proposalId, proposalCategorizedPaths, hiddenLayers)
                .then(() => {
                  callback(proposalId);
                });
            });
    }
  }
}

export default new FormaSaveService();