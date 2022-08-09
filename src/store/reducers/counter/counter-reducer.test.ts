import {counterReducer} from "./index";
import {CounterActionCreators} from "./action-creators";
import {ICounterState} from "./types";

let initialState: ICounterState

beforeEach(() => {
    initialState = {
        maxValue: 0,
        startValue: 0,
        counter: 0,
        isDirty: false
    }
})

test('field value maxValue should be changed and correct', () => {

    expect(counterReducer(initialState, CounterActionCreators.setMaxValue(1)).maxValue).toBe(1)
    expect(counterReducer(initialState, CounterActionCreators.setMaxValue(3)).maxValue).toBe(3)
})


test('field value startValue should be changed and correct', () => {

    expect(counterReducer(initialState, CounterActionCreators.setStartValue(1)).startValue).toBe(1)
    expect(counterReducer(initialState, CounterActionCreators.setStartValue(3)).startValue).toBe(3)
})

test('field value counter should be changed and correct', () => {

    expect(counterReducer(initialState, CounterActionCreators.setCounter(1)).counter).toBe(1)
    expect(counterReducer(initialState, CounterActionCreators.setCounter(3)).counter).toBe(3)
})

test('field value isDirty should be changed and correct', () => {

    expect(counterReducer(initialState, CounterActionCreators.setIsDirty(false)).isDirty).toBe(false)
    expect(counterReducer(initialState, CounterActionCreators.setIsDirty(true)).isDirty).toBe(true)
})