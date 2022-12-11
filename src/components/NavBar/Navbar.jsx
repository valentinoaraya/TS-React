import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";


const Navbar = ()=>{
    return <nav className="navbar navbar-expand-lg fondoNav">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img className="imgLogo" src="https://res.cloudinary.com/dyzoubfmd/image/upload/v1669420510/imagenes%20ThikiaSport/logoThikia_efmpsr.png" alt="Logo Thikia" /></Link>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="sections" to={"/category/Proteina"}>Proteínas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="sections" to="/category/Aimnoacido">Aminoácidos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="sections" to="/category/Shaker">Shakers</Link>
                            </li>
                        </ul>
                    <CartWidget/>
                </div>
            </nav>
}

export default Navbar