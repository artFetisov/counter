import {combineReducers, createStore} from "redux";
import {counterReducer} from "./reducers/counter";
import {getItemFromLocalStorage, savetoLocalStorage} from "../utils/localStorage";
import {ICounterState} from "./reducers/counter/types";

const rootReducer = combineReducers({
    counter: counterReducer
})

const persistedState: { [key: string]: ICounterState } = getItemFromLocalStorage('state')

export const store = createStore(rootReducer, persistedState)

export type AppRootState = ReturnType<typeof store.getState>

store.subscribe(() => {
    const maxValFromLocal = getItemFromLocalStorage('maxValue')
    const startValueFromLocal = getItemFromLocalStorage('startValue')
    const fromState = store.getState().counter

    if (fromState.maxValue === maxValFromLocal && fromState.startValue === startValueFromLocal) {
        savetoLocalStorage('state', {counter: store.getState().counter})
    }
});