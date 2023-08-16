import React from 'react'
import styles from './Input.module.scss'

interface TextInputProps {
  label?: string
  placeholder?: string
  type: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  name: string
  required: boolean
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  type,
  onChange,
  value,
  name,
  required,
}) => {
  return (
    <div className={label ? styles.inputContainer : ''}>
      {label && (
        <label className={styles.inputLabel} htmlFor={label}>
          {label}
        </label>
      )}

      <input
        className={styles.inputField}
        id={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        required={required}
      />
    </div>
  )
}

export default TextInput
