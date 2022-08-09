export interface ICounterState {
    maxValue: number
    startValue: number
    counter: number
    isDirty: boolean
}

export enum CounterEnumAction {
    SET_MAX_VALUE = 'SET-MAX-VALUE',
    SET_START_VALUE = 'SET-START-VALUE',
    SET_COUNTER = 'SET_COUNTER',
    SET_IS_DIRTY = 'SET_IS_DIRTY'
}

export interface SetMaxValueAction {
    type: CounterEnumAction.SET_MAX_VALUE,
    payload: number
}

export interface SetStartValueAction {
    type: CounterEnumAction.SET_START_VALUE,
    payload: number
}

export interface SetCounterAction {
    type: CounterEnumAction.SET_COUNTER,
    payload: number
}

export interface SetIsDirtyAction {
    type: CounterEnumAction.SET_IS_DIRTY,
    payload: boolean
}

export type CounterActions = SetMaxValueAction | SetStartValueAction | SetCounterAction | SetIsDirtyAction