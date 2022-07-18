import {FC, ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import styles from './Button.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

interface IButtonProps extends DefaultButtonPropsType {
    aqua?: boolean
}


export const Button: FC<IButtonProps> = (
    {
        children,
        aqua,
        ...rest
    }
) => {
    return <button className={`${styles.common} ${aqua ? styles.aqua : ''} `} {...rest}>{children}</button>
}