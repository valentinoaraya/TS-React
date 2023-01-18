import { createContext, useState } from 'react';

const cartContext = createContext([])
const Provider = cartContext.Provider

const CartContextProvider = ({children})=>{
    
    const [cart, setCart] = useState([])
    const newCart = [...cart]

    const addToCart = (item,count)=>{
        let isItem = cart.findIndex(i => i.id === item.id)
        if (isItem === -1){
            newCart.push({...item, count})
            setCart(newCart)
        }
        else{
            newCart[isItem].count += count
            setCart(newCart)
        }
    }

    const totalItems = ()=>{
        let total = cart.reduce((acc, i) => acc + i.count, 0)
        return total
    }

    const vaciarCarrito = ()=> setCart([])

    const removeItem = (id)=>{
        let itemsEliminados = cart.filter(elem => elem.id !== id)
        setCart(itemsEliminados)
    } 

    const totalPrice = ()=>{
        let total = cart.reduce((acc, elem) =>{
            return acc + (elem.precio*elem.count)
        },0)

        return total
    }
    
    return(
        <Provider value={ {
            cart, 
            cantidad: totalItems,
            addToCart,
            vaciarCarrito,
            removeItem,
            totalPrice
        }}>
            {children}
        </Provider>
    )
}

export {cartContext, CartContextProvider}