import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail"
import Loading from "../Loading/Loading"
import { getSingleItem } from "../../services/firebase"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ItemDetailContainer = ()=>{
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const {id} = useParams()
        
    useEffect(()=>{
        getSingleItem(id)
         .then((res)=> {
            setProduct(res)
            setIsLoading(false)
        })
         .catch((err)=> console.error(err))
    },[id])

    return (
        <div className="itemDetailContainer">
            {isLoading ? <Loading title={"Cargando producto..."}/> : <ItemDetail product={product}/>}
        </div>
    )   
}

export default ItemDetailContainer