import { ButtonHTMLAttributes } from 'react'

import clsx from 'clsx'

import s from './styles.module.scss'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'pri' | 'sec' | 'ter'
}

const Button = ({ children, variant = 'pri', ...props }: IButtonProps) => {
  return (
    <button
      className={clsx(s.btn, {
        [s.pri]: variant === 'pri',
        [s.sec]: variant === 'sec',
        [s.ter]: variant === 'ter',
      })}
      {...props}
    >
      {children}
    </button>
  )
}
export default Button
