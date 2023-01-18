import "./ItemList.css"
import Flex from "../Flex/Flex"
import Item from "../Item/Item"
import Loading from "../Loading/Loading"
import {getItemsCategory} from "../../services/firebase"
import { getItems } from "../../services/firebase"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const ItemList = ()=>{

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {category} = useParams()

    useEffect(()=>{

        if(category === undefined){
            getItems()
         .then((res)=>{
            setProducts(res)
            setIsLoading(false)
         })
         .catch((err)=> console.error(err))
        }else{
            getItemsCategory(category)
             .then((res)=> setProducts(res))
             .catch((err)=> console.log(err))
        }

        
    },[category])

    return (
        <>
            {
                isLoading ? <Loading title={"Cargando productos..."}/>
                :
                <Flex>
                    {
                        products.map(({id, nombre, imagen, precio, sabor, cat, discount, initialPrice}) =>{
                            return <Item
                            key={id}
                            id={id}
                            nombre={nombre}
                            imagen={imagen}
                            precio={precio}
                            sabor={sabor}
                            categoria={cat}
                            initialPrice={initialPrice}
                            discount={discount}
                            />
                        })
                    }
                </Flex>
            }
        </>
    )
}

export default ItemList