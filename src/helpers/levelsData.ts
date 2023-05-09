import i18n from "./i18n"
import { convertWSMUnitsToModelUnits } from "./units"
import { MAIN_HISTORY_ID, TOLERANCE_VALUE, LevelData } from "./typesAndConstants"

// Helper function to get max and min z values from an object in the main history.
const getZValuesFromObjectBox = (objectId: number) => {
    const instanceBox = WSM.APIGetBoxReadOnly(MAIN_HISTORY_ID, objectId)
    const {
      lower: { z: minZValue },
      upper: { z: maxZValue },
    } = instanceBox
  
    return { minZValue, maxZValue }
  }
  
export const getObjectName = (objectId: number) => {
    return `${i18n.object} ${objectId}`
  }

// Generate floor heights from levels data.
export const generateFloorHeightsFromLevelsData = (instanceId: number, levelsData: LevelData[]) => {
    const { minZValue, maxZValue } = getZValuesFromObjectBox(instanceId)
  
    // Find the first level that contributes.
    let currentLevel = 0
    while (levelsData.length > currentLevel && levelsData[currentLevel].second < -TOLERANCE_VALUE) {
      currentLevel++
    }
  
    const buildingHeight = convertWSMUnitsToModelUnits(maxZValue - minZValue)
  
    const floorHeights: LevelData[] = []
    if (
      levelsData.length > currentLevel &&
      levelsData[currentLevel].second > TOLERANCE_VALUE &&
      currentLevel > 0
    ) {
      // Add a floor from 0 relative to levelsData[currentLevel].second
      floorHeights.push(levelsData[currentLevel - 1])
    }
  
    // Add floors.
    while (
      levelsData.length > currentLevel + 1 &&
      levelsData[currentLevel].second < buildingHeight - TOLERANCE_VALUE &&
      levelsData[currentLevel + 1].second < buildingHeight - TOLERANCE_VALUE
    ) {
      const floorHeight = levelsData[currentLevel + 1].second - levelsData[currentLevel].second
      const floorData = {
        first: levelsData[currentLevel].first,
        second: floorHeight,
        floorFunction: levelsData[currentLevel].floorFunction,
      }
      floorHeights.push(floorData)
      currentLevel++
    }
  
    // Add the top floor.
    if (
      levelsData.length > currentLevel &&
      levelsData[currentLevel].second < buildingHeight - TOLERANCE_VALUE
    ) {
      const floorHeight = buildingHeight - levelsData[currentLevel].second
      const floorData = {
        first: levelsData[currentLevel].first,
        second: floorHeight,
        floorFunction: levelsData[currentLevel].floorFunction,
      }
      floorHeights.push(floorData)
    }
  
    return floorHeights
  }