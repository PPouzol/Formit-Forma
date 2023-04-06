import * as typesAndConsts from "../helpers/typesAndConstants"

export function createLayer(histID: number, layerName: string) {
  // Create the Forma layer if it does not already exist. It will create
  // a layer only in the history refered by histID.
  FormIt.Layers.AddLayer(histID, layerName, true)
  let formItLayerId = FormIt.Layers.GetLayerID(layerName)
  let wsmLayerId
  if (formItLayerId == WSM.INVALID_ID) {
    console.error("Cannot retrieve the Forma layer")
  } else {
    // The WSM LayerID value is different from the FormIt LayerId
    wsmLayerId = getWSMLayerID(histID, layerName)
    if (wsmLayerId == WSM.INVALID_ID) {
      console.error("Cannot retrieve the Forma WSM layer")
      formItLayerId = undefined
    }
  }

  return [ formItLayerId, wsmLayerId ];
}

async function getWSMLayerID(histID: number, FormaLayerName: string) {
    const aLayers = await WSM.APIGetAllObjectsByTypeReadOnly(histID, WSM.nObjectType.nLayerType)
    let wsmLayerId = WSM.INVALID_ID
    for (let i = 0; i < aLayers.length; i++) {
      const data = await WSM.APIGetLayerDataReadOnly(histID, aLayers[i])
  
      if (data.name == FormaLayerName) {
        wsmLayerId = aLayers[i]
        break
      }
    }
  
    return wsmLayerId
  }

  
export async function createCategoryLayers() : Promise<boolean> {
  const categories = [
    "site_limit",
    "building",
    "vegetation",
    "generic",
    "road",
    "rails",
    "property_boundary",
    "zone",
    "building_envelope",
  ]

  const categoryLayers = Object.values(typesAndConsts.formItLayerNames).filter((layerName) =>
    categories.includes(layerName)
  )

  let layersPromises = []
  for (const categoryLayer of categoryLayers) {
    layersPromises.push(createOrGetOutOfContextLayer(categoryLayer))
  }

  layersPromises.push(createOrGetOutOfContextLayer(typesAndConsts.formItLayerNames.FORMA_CONTEXT))

  let results = await Promise.all(layersPromises)
  let creationSucceed = results.filter((ids) => ids.formItLayerId === WSM.INVALID_ID || ids.wsmLayerId === -1).length === 0
  return creationSucceed
}

export async function createOrGetOutOfContextLayer(layerName = typesAndConsts.formItLayerNames.FORMA_CONTEXT) {
  const foundLayerId = await FormIt.Layers.GetLayerID(layerName)
  if (foundLayerId === WSM.INVALID_ID) {
    const results = await Promise.all(createLayer(typesAndConsts.MAIN_HISTORY_ID, layerName))
    const layersIds = {
      formItLayerId: results[0],
      wsmLayerId: results[1]
    }
    const formItLayerId = layersIds.formItLayerId
    const wsmLayerId = layersIds.wsmLayerId
    const attributeName = "FormIt::OutOfContextLayer"

    if(formItLayerId === WSM.INVALID_ID || !wsmLayerId)
      return layersIds;

    // Set the layer as a out of context layer and non pickable
    if (
      !WSM.Utils.SetOrCreateStringAttributeForObject(
        typesAndConsts.MAIN_HISTORY_ID,
        wsmLayerId,
        attributeName,
        "true",
      )
    ) {
      console.error("Cannot set out of context attribute")
      return
    }
    FormIt.Layers.SetLayerPickable(formItLayerId, false)

    return layersIds
  }
  
  return {
    formItLayerId: foundLayerId,
    wsmLayerId: foundLayerId !== WSM.INVALID_ID ? await getWSMLayerID(typesAndConsts.MAIN_HISTORY_ID, layerName) : -1,
  }
}

export function getCategoryFromElementPath(
  path: string,
  proposalCategorizedPaths: Record<string, string[]>
) {
  for (const [category, elementPaths] of Object.entries(proposalCategorizedPaths)) {
    for (const elementPath of elementPaths) {
      if (path.includes(elementPath)) {
        return category
      }
    }
  }
}