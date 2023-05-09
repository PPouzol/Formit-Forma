import { METERS_TO_FEET } from "./typesAndConstants"

export const convertWSMUnitsToModelUnits = (value: number): number => {
  return FormIt.Model.ImperialLengthToCurrentUnitLength(value)
}

export const convertModelUnitsToWSMUnits = (value: number): number => {
  if (FormIt.Model.GetUnitTypeCurrent() == FormIt.UnitType.kImperialFeetInches) {
    return value
  } else if (FormIt.Model.GetUnitTypeCurrent() == FormIt.UnitType.kMetricMeter) {
    return value * METERS_TO_FEET
  }
  console.log("Warning: unsupported units type")
  return value
}

export const roundToDecimalPlaces = (value: number, decimalDigits: number): number => {
  return Math.round(value * 10 ** decimalDigits) / 10 ** decimalDigits
}