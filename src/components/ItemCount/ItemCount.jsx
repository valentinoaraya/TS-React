import React from 'react'
import { useState } from 'react'
import "./ItemCount.css"
import Button from '../Button/Button'

function ItemCount({stock, onPressButton}) {
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
  )
}

export default ItemCount