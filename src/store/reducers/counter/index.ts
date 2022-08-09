import {CounterActions, CounterEnumAction, ICounterState} from "./types";

const initialState: ICounterState = {
    maxValue: 0,
    startValue: 0,
    counter: 0,
    isDirty: false
}

export function counterReducer(state: ICounterState = initialState, action: CounterActions): ICounterState {
    switch (action.type) {
        case CounterEnumAction.SET_MAX_VALUE:
            return {...state, maxValue: action.payload}

        case CounterEnumAction.SET_START_VALUE:
            return {...state, startValue: action.payload}

        case CounterEnumAction.SET_COUNTER:
            return {...state, counter: action.payload}

        case CounterEnumAction.SET_IS_DIRTY:
            return {...state, isDirty: action.payload}

        default:
            return state
    }
}