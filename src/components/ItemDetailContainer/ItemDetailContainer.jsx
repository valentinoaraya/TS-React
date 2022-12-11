import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getSingleItem } from "../../services/generales"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const ItemDetailContainer = ()=>{
    const [product, setProduct] = useState([])

    const {id} = useParams()

    useEffect(()=>{
        getSingleItem(id)
         .then((res)=>{
            setProduct(res)
         })
         .catch((err)=> console.error(err))
    },[id])

    return <div className="itemDetailContainer">
                <ItemDetail arrayProduct={product}/>
            </div>
    
}

export default ItemDetailContainer