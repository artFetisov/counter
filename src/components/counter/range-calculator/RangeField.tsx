import {ChangeEvent, FC} from "react";
import styles from '../Counter.module.scss'
import {NumberInput} from "../../ui/input/NumberInput";
import {isErrorInputMax, isErrorInputStart} from "../../../utils/errors";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../../store";
import {ICounterState} from "../../../store/reducers/counter/types";
import {CounterActionCreators} from "../../../store/reducers/counter/action-creators";

export const RangeField: FC = () => {
    const dispatch = useDispatch()
    const {maxValue, startValue} = useSelector<AppRootState, ICounterState>(state => state.counter)

    function onChangeMaxValueHandler(e: ChangeEvent<HTMLInputElement>) {
        dispatch(CounterActionCreators.setMaxValue(Number(e.currentTarget.value)))
        dispatch(CounterActionCreators.setIsDirty(true))
    }

    function onChangeStartValueHandler(e: ChangeEvent<HTMLInputElement>) {
        dispatch(CounterActionCreators.setStartValue(Number(e.currentTarget.value)))
        dispatch(CounterActionCreators.setIsDirty(true))
    }

    return <div className={styles.rangeField}>
        <div className={styles.rngFieldWrap}>
            <div className={styles.text}>max value:</div>
            <NumberInput value={maxValue} onChange={onChangeMaxValueHandler}
                         isError={isErrorInputMax(startValue, maxValue)}/>
        </div>
        <div className={styles.rngFieldWrap}>
            <div className={styles.text}>start value:</div>
            <NumberInput value={startValue} onChange={onChangeStartValueHandler}
                         isError={isErrorInputStart(startValue, maxValue)}/>
        </div>
    </div>
}