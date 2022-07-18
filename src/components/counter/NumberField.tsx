import {FC} from "react";
import styles from './Counter.module.scss'
import cn from 'classnames'

interface INumberField {
    counter: number
    maxValue: number
}


export const NumberField: FC<INumberField> = ({counter, maxValue}) => {
    return <div className={styles.numField}>
        <span className={cn(styles.number, {
            [styles.numRed]: counter === maxValue
        })}>{counter}</span>
    </div>
}