import {FC} from "react";
import styles from './Counter.module.scss'
import cn from 'classnames'
import {errors, isErrorMes} from "../../utils/errors";

interface INumberField {
    counter: number
    maxValue: number
    startValue: number
    isDirty: boolean
}

export const NumberField: FC<INumberField> = ({counter, maxValue, startValue, isDirty}) => {

    const finalMessage = errors(startValue, maxValue)

    return <div className={styles.numField}>
        {!isDirty ? <span className={cn(styles.number, {
                [styles.numRed]: counter === maxValue
            })}>{counter}</span>
            : isErrorMes(startValue, maxValue)
                ? <span className={styles.error}>{finalMessage}</span>
                : finalMessage && <span className={styles.message}>{finalMessage}</span>}
    </div>
}