import {FC} from "react";
import styles from './Counter.module.scss'
import {NumberField} from "./NumberField";
import {ButtonsField} from "./ButtonsField";

interface ICounterProps {
    maxValue: number
    startValue: number
    counter: number
    setCounter: (value: number) => void
    isDirty: boolean
}

export const Counter: FC<ICounterProps> = (
    {
        maxValue,
        startValue,
        counter,
        setCounter,
        isDirty
    }) => {
    function increment() {
        setCounter(counter + 1)
    }

    function reset() {
        setCounter(startValue)
    }

    return <div className={styles.block}>
        <NumberField counter={counter} maxValue={maxValue} startValue={startValue} isDirty={isDirty}/>
        <ButtonsField increment={increment} counter={counter} reset={reset} maxValue={maxValue}
                      isDirty={isDirty}
                      startValue={startValue}/>
    </div>
}