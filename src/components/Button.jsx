import React from 'react'

const Button = ({className='', type='button', children, onClick, disabled}) => {
  return (
    <button 
      className={`button ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      >
        {children}
      </button>
  )
}

export default Button