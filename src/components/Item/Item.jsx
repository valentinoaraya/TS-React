import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({nombre, imagen, precio, sabor, id})=>{

    return (
        <Link to={`/item/${id}`}>
            <div className="card" style={{width: "18rem"}}>
                <img src={imagen} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">$  {precio}</li>
                    <li className="list-group-item">Sabor: {sabor}</li>
                </ul>
           </div>
        </Link>
    )
}

export default Item