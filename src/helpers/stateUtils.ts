import { createGlobalState } from "react-hooks-global-state"
import { BaseElement, Urn } from "@spacemakerai/element-types"

type InitialState = {
    elements: Record<Urn, BaseElement>,
    synced: boolean
}

const initialState: InitialState = {
    elements: {},
    synced: false
}

export const { useGlobalState, setGlobalState } = createGlobalState(initialState)