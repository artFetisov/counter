import React, {FC, useEffect,} from "react";
import {Counter} from "./Counter";
import styles from './Counter.module.scss'
import {RangeCalculator} from "./range-calculator/RangeCalculator";
import {getItemFromLocalStorage} from "../../utils/localStorage";
import {useDispatch,} from "react-redux";
import {CounterActionCreators} from "../../store/reducers/counter/action-creators";

export const CounterContainer: FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(CounterActionCreators.setMaxValue(getItemFromLocalStorage('maxValue')))
        dispatch(CounterActionCreators.setStartValue(getItemFromLocalStorage('startValue')))
        dispatch(CounterActionCreators.setCounter(getItemFromLocalStorage('startValue')))
    }, [])


    return <div className={styles.wrapper}>
        <RangeCalculator/>
        <Counter/>
    </div>
}
