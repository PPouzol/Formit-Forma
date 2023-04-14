
import { groupBy } from "lodash-es"
import * as typesAndConsts from "../helpers/typesAndConstants"

import { formItLayerNames, MAIN_HISTORY_ID, SelectionObject, SelectionObjectID, FormItGeometry } from "./typesAndConstants"
import { createLayer } from "./layerUtils"

export async function getFloorGeometriesByBuildingId() {
    const results = await Promise.all(createLayer(MAIN_HISTORY_ID, formItLayerNames.FORMA_BUILDINGS))
    let formItLayerId = results[0];

    const layerObjects: SelectionObject[] = await FormIt.Layers.GetAllObjectsOnLayers(
      formItLayerId,
      true,
    )
  
    const layerObjectsByBuildingId = groupBy(layerObjects, (object) => object.ids[0].Object)
  
    const floorsByBuildingId: Record<string, SelectionObjectID[]> = {}
    Object.entries(layerObjectsByBuildingId).forEach(([buildingId, selectionObjects]) => {
      floorsByBuildingId[buildingId] = selectionObjects
        .slice(1) // First element is the building geometry, not an actual floor
        .map((selectionObject) => selectionObject.ids[1])
    })
  
    const floorGeometriesByBuildingId: Record<string, typesAndConsts.FormItGeometry[]> = {}
  
    for (const [buildingId, floorObjects] of Object.entries(floorsByBuildingId)) {
      const buildingTransform = WSM.APIGetInstanceTransf3dReadOnly(
        MAIN_HISTORY_ID,
        Number(buildingId),
      )
      floorGeometriesByBuildingId[buildingId] = []
  
      for (const floorObject of floorObjects) {
        const { History: historyId, Object: objectId } = floorObject
        const floorGeometry = await WSM.Utils.GetAllGeometryInformation(historyId, objectId)
        floorGeometry[0].transforms = [buildingTransform]
        floorGeometriesByBuildingId[buildingId].push(floorGeometry)
  
        // Deleting the object to avoid being saved in the WSM
        WSM.APIDeleteObject(historyId, objectId)
      }
    }
  
    return floorGeometriesByBuildingId
  }