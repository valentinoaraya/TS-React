import React from 'react'
import "./Button.css"

function Button({children, onFinish}) {
  return (
    <button className='button' onClick={onFinish}>
        <p className='parrafButton'>{children}</p>
    </button>
  )
}

export default Button