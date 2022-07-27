import {FC} from "react";
import styles from './Counter.module.scss'
import {Button} from "../ui/button/Button";

interface IButtonsField {
    increment: () => void
    counter: number
    reset: () => void
    maxValue: number
    startValue: number
    isDirty: boolean
}

export const ButtonsField: FC<IButtonsField> = ({increment, reset, counter, maxValue, startValue, isDirty}) => {
    return <div className={styles.btnWrapper}>
        <Button aqua onClick={increment} disabled={counter === maxValue || isDirty}>inc</Button>
        <Button aqua onClick={reset} disabled={counter === startValue || isDirty}>reset</Button>
    </div>
}