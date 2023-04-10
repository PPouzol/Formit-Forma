import { createGlobalState } from "react-hooks-global-state"
import { BaseElement, Urn } from "@spacemakerai/element-types"

type InitialState = {
    elements: Record<Urn, BaseElement>,
    synced: boolean,
    terrainElevationTransf3d: any 
}

const initialState: InitialState = {
    elements: {},
    synced: false,
    terrainElevationTransf3d: null
}

export const { useGlobalState, setGlobalState } = createGlobalState(initialState)