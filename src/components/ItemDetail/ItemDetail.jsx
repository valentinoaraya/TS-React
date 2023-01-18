import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import {cartContext} from "../../storage/cartContext"
import Button from "../Button/Button"

const ItemDetail = ({product})=>{
    const [countInCart, setCountInCart] = useState(0)
    const {addToCart} = useContext(cartContext)

    const handleAddToCart=(count)=>{
        setCountInCart(count)
        addToCart(product,count)
    }

    return (
        <div className="itemDetail">
            <h2 className="sub">{product.nombre}</h2>
            <div className="divflex-row">
                <div className="flexDetail">
                    <img className="img" src={product.imagen} alt="" />
                    <p className="price">$ {product.precio}</p>
                </div>
                <div className="flexDetail">
                    <p className="p">{product.descripcion}</p>
                </div>
            </div>
            {
                countInCart?
                <div>
                    <Link to={"/cart"}>
                        <Button>Ir al carrito</Button>
                    </Link>
                    <Link to={"/"}>
                        <Button>Seguir comprando</Button>
                    </Link>
                </div>
                
                :
                <ItemCount stock={product.stock} onPressButton={handleAddToCart}/>
            }
        </div>
    )
}
 
export default ItemDetail