import React from 'react'
import { useEffect } from 'react'
import { useState, useContext } from 'react'
import { cartContext } from '../../storage/cartContext'
import "./IncDec.css"

function IncDec({cantidad, stock, id}) {

  const {setearCantidad} = useContext(cartContext)
  const [count, setCount] = useState(cantidad)

  const handleInc = ()=> count < stock ? setCount(count+1) : setCount(count)
  const handleDec = ()=> count > 1 ? setCount(count-1) : setCount(count)

  useEffect(()=>{
    setearCantidad(id,count)
  },[count,id])
  
  return (
    <div className='divIncDec'>
      <button className='buttonIncDec' onClick={handleInc}>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="white" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
          <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
        </svg>
      </button>
      <p>{count}</p>
      <button className='buttonIncDec' onClick={handleDec}>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="white" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
        </svg>
      </button>
    </div>
  )
}

export default IncDec