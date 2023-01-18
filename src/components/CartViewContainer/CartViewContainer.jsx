import React from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { cartContext } from '../../storage/cartContext'
import Button from '../Button/Button'
import CartView from '../CartView/CartView'
import "./CartViewContainer.css"

function CartViewContainer() {

  const {cart, removeItem, totalPrice, vaciarCarrito} = useContext(cartContext)
  const navigateTo = useNavigate()

  if(cart.length === 0){
    return (
      <div className='carritoVacio'>
        <h1>Agrega productos al carrito!</h1>
        <Link to={"/"}><Button>Volver al inicio</Button></Link>
      </div>
    )
  }
  else {
  
    return (
      <div className='cartView'>
        <h1 className='titleCarrito'>Tu carrito</h1>
        <table className='tabla'>
        <thead className='tableHead'>
          <tr>
            <th>X</th>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map(({id, nombre, imagen, precio, count})=>{
              return <CartView
                        key={id} 
                        nombre={nombre} 
                        imagen={imagen}
                        precio={precio}
                        cantidad={count}
                        fn={()=> removeItem(id)}
                    />
            })
          }
        </tbody>
      </table>   
        <h1 className='titleTotal'>TOTAL: ${totalPrice()}</h1>
        <div className='divTotalFinish'>
          <Button onFinish={()=> navigateTo("/formcheckout")}>Finalizar Compra</Button>
          <Button onFinish={vaciarCarrito}>Vaciar carrito</Button>
        </div>
      
    </div>
    )
  }
}

export default CartViewContainer