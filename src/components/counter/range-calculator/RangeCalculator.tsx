import {FC} from "react";
import styles from '../Counter.module.scss'
import {RangeField} from "./RangeField";
import {Button} from "../../ui/button/Button";
import { isErrorMes} from "../../../utils/errors";

interface IRangeCalcProps {
    maxValue: number
    startValue: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    setCounter: (value: number) => void
    setIsDirty: (value: boolean) => void
    isDirty: boolean
}

export const RangeCalculator: FC<IRangeCalcProps> = (
    {
        maxValue,
        startValue,
        setStartValue,
        setMaxValue,
        setCounter,
        setIsDirty,
        isDirty
    }) => {
    function setItemsToLocalStorage() {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
        setCounter(startValue)
        setIsDirty(false)
    }

    return <div className={styles.block}>
        <RangeField
            maxValue={maxValue}
            startValue={startValue}
            setMaxValue={setMaxValue}
            setStartValue={setStartValue}
            setIsDirty={setIsDirty}
        />
        <div className={styles.btnWrapper} style={{justifyContent: 'center'}}>
            <Button aqua onClick={setItemsToLocalStorage}
                    disabled={!isDirty || isErrorMes(startValue, maxValue)}>set</Button>
        </div>
    </div>
}