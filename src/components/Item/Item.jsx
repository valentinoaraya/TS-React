import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({nombre, imagen, precio, sabor, id, initialPrice, discount})=>{

    return (
        <Link className="link" to={`/item/${id}`}>
            <div className="card">
                <img src={imagen} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <div className="pricesDiscounts">
                            <div className="priceFlavorItem divDiscount">
                                {initialPrice && <p className="initialPrice">$ {initialPrice}</p>}
                                <p className={`parrafButton ${discount && "priceDiscount"}`}>$ {precio}</p>
                            </div>
                            { discount && 
                                <div className="divDiscount">
                                    <p className="parrafButton parrafDiscounts">{discount}% OFF</p>
                                </div>
                            }
                        </div>
                    </li>
                    {sabor && <li className="list-group-item priceFlavorItem">Sabor: {sabor}</li>}
                </ul>
           </div>
        </Link>
    )
}

export default Item