import {FC} from "react";
import styles from './Counter.module.scss'
import cn from 'classnames'
import {errors, isErrorMes} from "../../utils/errors";
import {useSelector} from "react-redux";
import {AppRootState} from "../../store";
import {ICounterState} from "../../store/reducers/counter/types";

export const NumberField: FC = () => {
    const {maxValue, startValue, counter, isDirty} = useSelector<AppRootState, ICounterState>(state => state.counter)

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