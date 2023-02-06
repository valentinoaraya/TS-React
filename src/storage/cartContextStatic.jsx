import { createContext } from 'react';

const cartContext = createContext([])
const Provider = cartContext.Provider

const CartContextProvider = ({children})=>{
    const value = {
        cart: [],
        saludo: "Hola, estoy en el context."
    }
    
    return(
        <Provider value={value}>
            {children}
        </Provider>
    )
}
