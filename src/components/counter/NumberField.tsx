import {FC} from "react";
import styles from './Counter.module.css'

interface INumberField {
    counter: number
    maxValue: number
}


export const NumberField: FC<INumberField> = ({counter, maxValue}) => {
    return <div className={styles.numField}>
        <span className={`${styles.number} ${counter === maxValue ? styles.numRed : ''}`}>{counter}</span>
    </div>
}