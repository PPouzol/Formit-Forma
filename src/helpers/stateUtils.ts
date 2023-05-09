import { createGlobalState } from "react-hooks-global-state"
import { BaseElement, Urn } from "@spacemakerai/element-types"

export const DUMMY_ROOT_URN: Urn = `urn:adsk-forma-elements:dummy:none:id-dummy:1337`

type InitialState = {
    elements: Record<Urn, BaseElement>,
    syncing: boolean,
    synced: boolean,
    terrainElevationTransf3d: any,
    rootUrn: string,
    loadedIntegrate: string[],
    mapHistoryIdToInitialDeltaId: Map<number, number>,
    axmPathsToDeleteSet: Set<string>
}

const initialState: InitialState = {
    elements: {},
    syncing: false,
    synced: false,
    terrainElevationTransf3d: null,
    rootUrn: DUMMY_ROOT_URN,
    loadedIntegrate: [],
    mapHistoryIdToInitialDeltaId: new Map<number, number>(),
    axmPathsToDeleteSet: new Set<string>()
}

export const { useGlobalState, setGlobalState } = createGlobalState(initialState)