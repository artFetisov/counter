import {ICounterState} from "../store/reducers/counter/types";

type TypeVariant = 'maxValue' | 'startValue' | 'state'

export const getItemFromLocalStorage = (name: TypeVariant) => {
    try {
        const serializedState = localStorage.getItem(name);
        if (serializedState === null) {
            return name === 'maxValue' ? 5 : 0
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

type ValueType = number | ICounterState | { [key: string]: ICounterState }

export const savetoLocalStorage = (name: TypeVariant, value: ValueType) => {
    try {
        localStorage.setItem(name, JSON.stringify(value));
    } catch {
    }
};