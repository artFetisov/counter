import {ChangeEvent, FC} from "react";
import styles from '../Counter.module.scss'
import {NumberInput} from "../../ui/input/NumberInput";
import { isErrorInputMax, isErrorInputStart} from "../../../utils/errors";

interface IRangeFieldProps {
    maxValue: number
    startValue: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    setIsDirty: (value: boolean) => void
}

export const RangeField: FC<IRangeFieldProps> = (
    {
        maxValue,
        startValue,
        setMaxValue,
        setStartValue,
        setIsDirty
    }) => {

    function onChangeMaxValueHandler(e: ChangeEvent<HTMLInputElement>) {
        setMaxValue(Number(e.currentTarget.value))
        setIsDirty(true)
    }

    function onChangeStartValueHandler(e: ChangeEvent<HTMLInputElement>) {
        setStartValue(Number(e.currentTarget.value))
        setIsDirty(true)
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