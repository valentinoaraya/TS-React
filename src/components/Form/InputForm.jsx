import React from 'react'
import "./InputForm.css"

function InputForm({title, value, name, onChange}) {
  return (
    <div className='inputdiv'>
        <label>{title}</label>
        <input
            required 
            value={value} 
            type="text" 
            name={name} 
            onChange={onChange} 
        />
    </div>
  )
}

export default InputForm