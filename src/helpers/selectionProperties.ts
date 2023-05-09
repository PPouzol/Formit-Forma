import {
    Urn,
    BaseElement
  } from "@spacemakerai/element-types"
import { MAIN_HISTORY_ID, ElementCategory, LevelData } from "./typesAndConstants"
import { getObjectName } from "./levelsData"
import { convertWSMUnitsToModelUnits } from "./units"

export function getSelectionProperties(
    objectId: number,
    selectionFloorFunctions?: any,
    axmList?: any[],
    elements?: Record<Urn, BaseElement>,
  ) {
    const levelsIds = WSM.APIGetObjectLevelsReadOnly(MAIN_HISTORY_ID, objectId)
    const floorFunctions = getObjectFloorFunctionsData(objectId, axmList, elements)
    const levelsData = getLevelsData(levelsIds, objectId, selectionFloorFunctions, floorFunctions)
    const objectName = getObjectName(objectId)
  
    return {
      objectId,
      levelsData,
      objectName,
      category: levelsData.length !== 0 ? ElementCategory.Building : ElementCategory.Generic,
    }
  }


  function getLevelsData(
    levelsIds: number[],
    objectId: number,
    selectionFloorFunctions: Record<number, LevelData[]>,
    floorFunctions: any[],
  ): LevelData[] {
    return levelsIds.map((levelId, index) => {
      const levelData = WSM.APIGetLevelDataReadOnly(MAIN_HISTORY_ID, levelId, false)
  
      // convert from WSM units to the current model's units (which should match SM proposal units)
      const displayValue = convertWSMUnitsToModelUnits(levelData.dElevation)
  
      levelData.dElevation = displayValue
  
      const floorFunction =
        selectionFloorFunctions && !selectionFloorFunctions[objectId]
          ? floorFunctions[index]
          : selectionFloorFunctions
          ? selectionFloorFunctions[objectId][index]?.floorFunction
          : null
  
      const { sLevelName: first, dElevation: second } = levelData
      return { first, second, floorFunction }
    })
  }

  
function getObjectFloorFunctionsData(
    objectId: number,
    axmList: any[],
    elements: Record<Urn, BaseElement>,
  ) {
    if (!axmList) return []
  
    const { value: elementPath } = WSM.Utils.GetStringAttributeForObject(
      MAIN_HISTORY_ID,
      objectId,
      "FormaElementPath",
    )
    const element = axmList.find((axm) => axm.path === elementPath)
  
    if (!element) return []
  
    if (!elements[element.urn]) return []
  
    const { children } = elements[element.urn]
  
    if (!children) return []
  
    const [{ urn: firstChildUrn }] = children
  
    if (!elements[firstChildUrn]) return []
  
    const buildingElement = elements[firstChildUrn]
    const floorFunctions = getElementFloorFunctions(buildingElement, elements)
    return floorFunctions
  }

  
function getElementFloorFunctions(buildingElement: any, elements: Record<Urn, BaseElement>) {
    const { children } = buildingElement
  
    return children.map((child) => {
      return elements[child.urn].properties.functionId
    })
  }