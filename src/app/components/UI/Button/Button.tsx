import React from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
  onClick?: () => void
  onSubmit?: (e: React.FormEvent) => void
  disabled?: boolean
  text?: string
}

const Button: React.FC<ButtonProps> = (
  { disabled, onClick, text, onSubmit },
  { ...props }
) => {
  return (
    <button
      className={disabled ? styles.buttonDisabled : styles.button}
      onClick={onClick}
      disabled={disabled}
      onSubmit={onSubmit}
      {...props}
    >
      {text}
    </button>
  )
}

export default Button
