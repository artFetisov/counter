import React, {FC, useEffect, useState} from "react";
import {Counter} from "./Counter";
import styles from './Counter.module.scss'
import {RangeCalculator} from "./range-calculator/RangeCalculator";
import {getItemFromLocalStorage} from "../../utils/localStorage";

export const CounterContainer: FC = () => {
    const [maxValue, setMaxValue] = useState(0)
    const [startValue, setStartValue] = useState(0)
    const [counter, setCounter] = useState(0)
    const [isDirty, setIsDirty] = useState(false)

    useEffect(() => {
        setMaxValue(getItemFromLocalStorage('maxValue'))
        setStartValue(getItemFromLocalStorage('startValue'))
        setCounter(getItemFromLocalStorage('startValue'))
    }, [])

    return <div className={styles.wrapper}>
        <RangeCalculator
            maxValue={maxValue}
            startValue={startValue}
            setMaxValue={setMaxValue}
            setStartValue={setStartValue}
            setCounter={setCounter}
            setIsDirty={setIsDirty}
            isDirty={isDirty}
        />
        <Counter
            maxValue={maxValue}
            startValue={startValue}
            counter={counter}
            setCounter={setCounter}
            isDirty={isDirty}
        />
    </div>
}
