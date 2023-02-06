import { useEffect } from 'react';
import { createContext, useState } from 'react';

const cartContext = createContext([])
const Provider = cartContext.Provider

const CartContextProvider = ({children})=>{
    
    const [cart, setCart] = useState([])
    const newCart = [...cart]

    const isLocalStorage = ()=> {
        let cartInStorage = JSON.parse(localStorage.getItem("Cart"))

        if (!cartInStorage){
            console.log("carrito vacío")
        }else{
            setCart(cartInStorage)
        }
    }

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

    const setearCantidad = (id, count)=> {
        let isItem = cart.findIndex(i => i.id === id)
        newCart[isItem].count = count
        setCart(newCart)
        localStorage.setItem("Cart", JSON.stringify(cart))
    }

    const totalItems = ()=>{
        let total = cart.reduce((acc, i) => acc + i.count, 0)
        return total
    }

    const vaciarCarrito = ()=> {
        setCart([])
        localStorage.removeItem("Cart")
    }

    const removeItem = (id)=>{
        let itemsEliminados = cart.filter(elem => elem.id !== id)
        setCart(itemsEliminados)
        localStorage.setItem("Cart", JSON.stringify(itemsEliminados))
    } 

    const totalPrice = ()=>{
        let total = cart.reduce((acc, elem) =>{
            return acc + (elem.precio*elem.count)
        },0)

        return total
    }

    useEffect(()=>{
        isLocalStorage()
    },[])
    

    return(
        <Provider value={ {
            cart, 
            cantidad: totalItems,
            addToCart,
            vaciarCarrito,
            removeItem,
            totalPrice,
            setearCantidad
        }}>
            {children}
        </Provider>
    )
}

export {cartContext, CartContextProvider}