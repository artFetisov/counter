import {combineReducers, createStore} from "redux";
import {counterReducer} from "./reducers/counter";

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer)

export type AppRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch