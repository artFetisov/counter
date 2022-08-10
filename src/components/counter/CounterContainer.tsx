import React, {FC} from "react";
import {Counter} from "./Counter";
import styles from './Counter.module.scss'
import {RangeCalculator} from "./range-calculator/RangeCalculator";

export const CounterContainer: FC = () => {
    return <div className={styles.wrapper}>
        <RangeCalculator/>
        <Counter/>
    </div>
}
