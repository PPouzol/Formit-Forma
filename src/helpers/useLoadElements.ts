import {
    Child,
    ElementResponse
  } from "@spacemakerai/element-types"
  import { v4 as uuid } from "uuid"
  import { elementUrnToUrl } from "./elementUtils"
  import FormaService from "../services/forma.service";

export async function downloadChildElements(
  child: Child,
  authContext: string,
  elementResponseMap: ElementResponse,
  loadedIntegrateElements: string[]) {

  //a temporary band-aid until all element systems upgrade to new children spec/scheme
  if (typeof child === "string") {
    child = {
      key: uuid(),
      urn: child,
      transform: undefined,
    } as Child
  }
  //end temporary band-aid

  let element

  if (elementResponseMap[child.urn]) {
    element = elementResponseMap[child.urn]
    await downloadElements(element, authContext, elementResponseMap, loadedIntegrateElements)
  } 
  else {
    const elementUrlWithSuffix = elementUrnToUrl(child.urn, authContext)
    await FormaService.getAsJson(elementUrlWithSuffix)
        .then(async (elementStoreResponse) => {
            for (const [urn, el] of Object.entries(elementStoreResponse)) {
              if(urn.indexOf(":integrate:") > -1)
              {
                loadedIntegrateElements.push(urn);
              }
              elementResponseMap[urn] = el
            }
            
            element = elementResponseMap[child.urn]
            await downloadElements(element, authContext, elementResponseMap, loadedIntegrateElements)
        });
  }
}

async function downloadElements(element, authContext, elementResponseMap, loadedIntegrateElements) {
  //commenting this temporarily as we aren't handling groups correctly, and this will just be misleading.
  if (element.children?.length > 0) {
      for (const childToCheck of element.children) {
        await downloadChildElements(
          childToCheck,
          authContext,
          elementResponseMap,
          loadedIntegrateElements)
      }
    }
}