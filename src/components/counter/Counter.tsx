import {FC, useState} from "react";
import styles from './Counter.module.scss'
import {NumberField} from "./NumberField";
import {ButtonsField} from "./ButtonsField";

export const Counter: FC = () => {
    const [counter, setCounter] = useState(0)
    const maxValue = 5

    function increment() {
        setCounter(counter + 1)
    }

    function reset() {
        setCounter(0)
    }


    return <div className={styles.wrapper}>
        <div className={styles.counter}>
            <NumberField counter={counter} maxValue={maxValue}/>
            <ButtonsField increment={increment} counter={counter} reset={reset} maxValue={maxValue}/>
        </div>
    </div>
}