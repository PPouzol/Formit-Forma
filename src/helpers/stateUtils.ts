import { createGlobalState } from "react-hooks-global-state"
import { BaseElement, Urn } from "@spacemakerai/element-types"

export const DUMMY_ROOT_URN: Urn = `urn:adsk-forma-elements:dummy:none:id-dummy:1337`

type InitialState = {
    elements: Record<Urn, BaseElement>,
    synced: boolean,
    terrainElevationTransf3d: any,
    rootUrn: string,
    loadedIntegrate: string[]
}

const initialState: InitialState = {
    elements: {},
    synced: false,
    terrainElevationTransf3d: null,
    rootUrn: DUMMY_ROOT_URN,
    loadedIntegrate: []
}

export const { useGlobalState, setGlobalState } = createGlobalState(initialState)