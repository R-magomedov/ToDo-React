import React from 'react'
import styles from './Button.module.scss'

const Button = ({className='', type='button', children, onClick, disabled}) => {
  return (
    <button 
      className={`${styles.button} ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      >
        {children}
      </button>
  )
}

export default Button