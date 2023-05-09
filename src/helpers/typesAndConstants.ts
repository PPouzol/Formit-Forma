
import {
  BaseProperties,
  Transform,
  Urn,
  BaseElement
} from "@spacemakerai/element-types"

// If there are more than 50k triangles, do not
// automatically convert meshes to triangles when
// editing.
export const TRIANGLE_LIMIT_MESH_TO_BODY = 50000
export const TRIANGLE_LIMIT_FLATTEN = 10000
export const FORMA_ELEMENT_PATH_KEY = "FormaElementPath"

export enum ElementCategory {
  Generic = "generic",
  Building = "building",
  Mixed = "",
  JoinInOneBuilding = "join_in_one_building",
}

export const categories = [
  "site_limit",
  "building",
  "vegetation",
  "generic",
  "road",
  "rails",
  "property_boundary",
  "zone",
  "terrain",
  "constraints",
] as const

export type Category = (typeof categories)[number]
// temporary (?) mapping while we have some mismatch between categories in different systems
export const categoryMapping: Record<string, Category> = {
  ...Object.fromEntries(categories.map((c) => [c, c])),
  buildings: "building",
  roads: "road",
  tree_area: "vegetation",
  tree_line: "vegetation",
  ConceptualRoot: "generic",
  ConceptualElement: "generic",
  "property-boundaries": "property_boundary", //temporary, to support deprecated category naming
}

export type ElementInfo = {
  path: InternalPath
  element: BaseElement
  category: Category
  scenario: boolean
}

type Point = [number, number]
export type Polygon = Point[]
export type MultiRingPolygon = Polygon[]
export type SelectionObjectID = {
    Object: number
    History: number
    objectName: string
  }
export type SelectionObject = {
    ids: SelectionObjectID[]
    objectName: string
  }
  
export type FormItTransform = {
  data: number[]
  objectName?: string
}

export type FormItMesh = {
  indices: number[]
  objectName: string
  vertices: number[]
}

export type FormItGeometry = {
  meshes: FormItMesh[]
  transforms: FormItTransform[]
}

export type ElementDetails = {
  id: string
  geometryId: string
  transform: Transform
  properties: BaseProperties
  urn: Urn
}

export type CreatedObjectDetails = {
  idArray?: Array<number>
  isTerrain?: boolean
  isAxm?: boolean
  needElevationFix?: boolean
  isEditing?: boolean
  elementPath?: string
  allIdsCreated?: Array<number>
  idEditingForConversion?: number
}

export type Project = {
  name: string
  id: string
  countryCode: string
  customerId: string
}

export type InitialState = {
  isFormItCoreReady: boolean
}

export type ElementDetailsWithLoadInfo = {
  fullIdPath: string
  needsConverted: boolean
} & ElementDetails

export type GlbUrlMap = { [key: string]: { elements: Array<ElementDetailsWithLoadInfo> } }

export type InternalPath = string
export type AxmDetail = BaseElement & { parentTransform: Transform; path: InternalPath }
export type AxmList = Array<AxmDetail>

export const MAIN_HISTORY_ID = 0;
export const METERS_TO_FEET = 3.2808399
export const FEET_TO_METER = 0.3047999995367042
export const ROOT_KEY = "root"
export const FORMA_CONVERTED_ELEMENT_KEY = "FormaConvertedElement"
// Key for uuid that identifies reference histories so they can be
// linked on load.
export const FORMA_REF_HISTORY_LINK_ID = "FormaRefHistoryLinkId"
export const TOLERANCE_VALUE = 1.0e-12

export const formItLayerNames = {
  FORMA_CONTEXT: "Forma Context",
  FORMA_TERRAIN: "Forma Terrain",
  SURROUNDING_BUILDINGS: "Surrounding Buildings",
  FORMA_PROPOSAL_BUILDINGS: "Forma Proposal Buildings",
  FORMA_AUTO_BUILDINGS: "Forma Auto Buildings",
  FORMA_BUILDINGS: "Forma Buildings",
  FORMA_SITE_LIMIT: "site_limit",
  FORMA_BUILDING: "building",
  FORMA_VEGETATION: "vegetation",
  FORMA_GENERIC: "generic",
  FORMA_ROAD: "road",
  FORMA_RAILS: "rails",
  FORMA_PROPERTY_BOUNDARY: "property_boundary",
  FORMA_ZONE: "zone",
  FORMA_BUILDING_ENVELOPE: "building_envelope",
}

export type LevelData = {
  first: string
  second: number
  floorFunction?: string
}

interface Object2d { x: number, y: number }
interface Object3d extends Object2d { z: number }

interface Point2dInterface extends Object2d, Object { }
export interface Point3dInterface extends Object3d, Point2dInterface { }
