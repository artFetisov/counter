import {FC} from "react";
import styles from './Counter.module.scss'
import {NumberField} from "./NumberField";
import {ButtonsField} from "./ButtonsField";

export const Counter: FC = () => {
    return <div className={styles.block}>
        <NumberField/>
        <ButtonsField/>
    </div>
}