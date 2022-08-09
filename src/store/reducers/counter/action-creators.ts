import {CounterEnumAction, SetCounterAction, SetIsDirtyAction, SetMaxValueAction, SetStartValueAction} from "./types";

export const CounterActionCreators = {
    setMaxValue: (payload: number): SetMaxValueAction => ({type: CounterEnumAction.SET_MAX_VALUE, payload}),
    setStartValue: (payload: number): SetStartValueAction => ({type: CounterEnumAction.SET_START_VALUE, payload}),
    setCounter: (payload: number): SetCounterAction => ({type: CounterEnumAction.SET_COUNTER, payload}),
    setIsDirty: (payload: boolean): SetIsDirtyAction => ({type: CounterEnumAction.SET_IS_DIRTY, payload})
}