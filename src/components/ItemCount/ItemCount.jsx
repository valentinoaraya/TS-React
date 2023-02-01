import React from 'react'
import { useState } from 'react'
import "./ItemCount.css"
import Button from '../Button/Button'

function ItemCount({stock, onPressButton, isInCart}) {
    const [count, setCount] = useState(1)

    const handleAdd = ()=> count < stock? setCount(count+1) : setCount(count)

    const handleSubstract = ()=> count > 1? setCount(count-1) : setCount(count)
  
    return (

    <div>
        {
            stock === 0?
                <h3 className='sinStock'>No hay stock disponible</h3>
            :
            <div className='itemCount'>
                {
                    isInCart?
                    <h3 className='sinStock'>Este producto ya ha sido agregado al carrito</h3>
                    :
                    <div>
                        <h4 className='sinStock'>{stock} unidades disponibles</h4>
                        <div>
                            <Button onFinish={handleSubstract}>
                                -
                            </Button>
                            <span className='price'>{count}</span>
                            <Button onFinish={handleAdd}>
                                +
                            </Button>
                        </div>
                        <div>
                            <Button onFinish={()=> onPressButton(count)}>
                                Agregar al carrito
                            </Button>
                        </div>
                    </div>
                }
                
            </div>
        }
    </div>
  )
}

export default ItemCount