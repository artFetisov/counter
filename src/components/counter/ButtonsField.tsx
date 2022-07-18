import {FC} from "react";
import styles from './Counter.module.css'
import {Button} from "../ui/button/Button";

interface IButtonsField {
    increment: () => void
    counter: number
    reset: () => void
    maxValue: number
}

export const ButtonsField: FC<IButtonsField> = ({increment, reset, counter, maxValue}) => {
    return <div className={styles.btnWrapper}>
        <Button aqua onClick={increment} disabled={counter === maxValue}>inc</Button>
        <Button aqua onClick={reset} disabled={counter === 0}>reset</Button>
    </div>
}