import "./ItemDetail.css"

const ItemDetail = ({arrayProduct})=>{

    return <div className="itemDetail">
                <h2 className="subtitle">{arrayProduct.nombre}</h2>
                <img className="img" src={arrayProduct.imagen} alt="" />
                <p className="parraf">$ {arrayProduct.precio}</p>
                <p className="p">{arrayProduct.descripcion}</p>
            </div>
}

export default ItemDetail