import {FC, ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import styles from './Button.module.scss'
import cn from 'classnames'

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
    return <button className={cn(styles.common, {
        [styles.aqua]: aqua
    })} {...rest}>{children}</button>
}