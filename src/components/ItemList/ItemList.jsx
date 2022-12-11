import "./ItemList.css"
import Flex from "../Flex/Flex"
import Item from "../Item/Item"
import getItems, {getItemsCategory} from "../../services/generales"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const ItemList = ()=>{

    const [products, setProducts] = useState([])

    const {category} = useParams()

    useEffect(()=>{

        if(category === undefined){
            getItems()
         .then((res)=>{
            setProducts(res)
         })
         .catch((err)=> console.error(err))
        }else{
            getItemsCategory(category)
             .then((res)=> setProducts(res))
        }

        
    },[category])

    return <Flex>
            {
                products.map(({id, nombre, imagen, precio, sabor, cat}) =>{
                    return <Item
                    key={id}
                    id={id}
                    nombre={nombre}
                    imagen={imagen}
                    precio={precio}
                    sabor={sabor}
                    categoria={cat}
                    />
                })
            }
           </Flex>
}

export default ItemList