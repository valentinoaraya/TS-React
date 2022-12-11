import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import TitleSection from '../TitleSection/TItleSection';
import Bienvenida from "../Bienvenida/Bienvenida";

const ItemListContainer = ()=>{

    return (
        <div>
            <Bienvenida text={"Bienvenido a"} resalt={"Thikia Sport"} subtext={"Los mejores suplementos deportivos"}/>
            <TitleSection titleSection={"Productos"} />
            <ItemList/>
        </div>
    )
    
}

export default ItemListContainer