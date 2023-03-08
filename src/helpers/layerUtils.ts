export async function createLayer(histID: number, layerName: string) {
    // Create the Forma layer if it does not already exist. It will create
    // a layer only in the history refered by histID.
    await FormIt.Layers.AddLayer(histID, layerName, true);
    let formItLayerId = await FormIt.Layers.GetLayerID(layerName);
    let wsmLayerId
    if (formItLayerId == WSM.INVALID_ID) {
      console.error("Cannot retrieve the Forma layer")
    } else {
      // The WSM LayerID value is different from the FormIt LayerId
      wsmLayerId = await getWSMLayerID(histID, layerName)
      if (wsmLayerId == WSM.INVALID_ID) {
        console.error("Cannot retrieve the Forma WSM layer")
        formItLayerId = undefined
      }
    }
  
    return { formItLayerId, wsmLayerId }
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