import React from 'react'
import Button from '../Button/Button'
import "./CartView.css"

function CartView({nombre, imagen, cantidad, precio, id, fn}) {

  let total = precio*cantidad

  return (
      <tr>
        <td><Button onFinish={fn}>X</Button></td>
        <td className='tdImg'><img className='imgCart' src={imagen} alt="" /></td>
        <td>{nombre}</td>
        <td>$ {precio}</td>
        <td>{cantidad}</td>
        <td>$ {total}</td>
      </tr> 
  ) 
}

export default CartView