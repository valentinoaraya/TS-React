import React from 'react'
import { useParams } from 'react-router-dom'
import "./BuyFinish.css"

function BuyFinish() {
    const {orderID} = useParams()
  return (
    <div className='buyFinish'>
        <h1 className='titleFinCompra'>Compra realizada con éxito!</h1>
        <h2 className='ticket'>Muchas gracias! Puede pasar a retirar sus productos por el local.</h2>
        <p className='ticket'>Tu ticket de compra es: {orderID}</p>
    </div>
  )
}

export default BuyFinish