import React from 'react'
import Button from '../Button/Button'
import IncDec from '../IncDec/IncDec'
import "./CartView.css"

function CartView({nombre, imagen, cantidad, precio, fn, stock, id}) {

  let total = precio*cantidad

  return (
      <tr>
        <td><Button onFinish={fn}>X</Button></td>
        <td className='tdImg'><img className='imgCart' src={imagen} alt="" /></td>
        <td>{nombre}</td>
        <td>$ {precio}</td>
        <td><IncDec cantidad={cantidad} stock={stock} id={id}/></td>
        <td>$ {total}</td>
      </tr> 
  ) 
}

export default CartView