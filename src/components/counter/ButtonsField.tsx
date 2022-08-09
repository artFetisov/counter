import {FC} from "react";
import styles from './Counter.module.scss'
import {Button} from "../ui/button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../store";
import {ICounterState} from "../../store/reducers/counter/types";
import {CounterActionCreators} from "../../store/reducers/counter/action-creators";

export const ButtonsField: FC = () => {
    const dispatch = useDispatch()
    const {maxValue, startValue, counter, isDirty} = useSelector<AppRootState, ICounterState>(state => state.counter)

    function increment() {
        dispatch(CounterActionCreators.setCounter(counter + 1))
    }

    function reset() {
        dispatch(CounterActionCreators.setCounter(startValue))
    }

    return <div className={styles.btnWrapper}>
        <Button aqua onClick={increment} disabled={counter === maxValue || isDirty}>inc</Button>
        <Button aqua onClick={reset} disabled={counter === startValue || isDirty}>reset</Button>
    </div>
}