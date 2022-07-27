import { DetailedHTMLProps, FC, InputHTMLAttributes} from "react";
import styles from './Input.module.scss'
import cn from 'classnames'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

interface IInputProps extends DefaultInputPropsType {
    isError: boolean
}

export const NumberInput: FC<IInputProps> = ({isError, ...props}) => {
    return <input type='number' className={cn(styles.inpNum, {
        [styles.error]: isError
    })} {...props}/>
}