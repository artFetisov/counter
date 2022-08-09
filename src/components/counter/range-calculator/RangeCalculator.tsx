import {FC} from "react";
import styles from '../Counter.module.scss'
import {RangeField} from "./RangeField";
import {Button} from "../../ui/button/Button";
import {isErrorMes} from "../../../utils/errors";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../../store";
import {ICounterState} from "../../../store/reducers/counter/types";
import {CounterActionCreators} from "../../../store/reducers/counter/action-creators";

export const RangeCalculator: FC = () => {
    const dispatch = useDispatch()
    const {maxValue, startValue, isDirty} = useSelector<AppRootState, ICounterState>(state => state.counter)

    function setItemsToLocalStorage() {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
        dispatch(CounterActionCreators.setCounter(startValue))
        dispatch(CounterActionCreators.setIsDirty(false))
    }

    return <div className={styles.block}>
        <RangeField/>
        <div className={styles.btnWrapper} style={{justifyContent: 'center'}}>
            <Button aqua onClick={setItemsToLocalStorage}
                    disabled={!isDirty || isErrorMes(startValue, maxValue)}>
                set
            </Button>
        </div>
    </div>
}