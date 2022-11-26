import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget";


const Navbar = ()=>{
    return <nav className="navbar navbar-expand-lg fondoNav">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img className="imgLogo" src="https://res.cloudinary.com/dyzoubfmd/image/upload/v1669420510/imagenes%20ThikiaSport/logoThikia_efmpsr.png" alt="Logo Thikia" /></a>
                        <ul className="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" className="sections" href="#">Proteínas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" className="sections" href="#">Aminoácidos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" className="sections" href="#">Shakers</a>
                            </li>
                        </ul>
                    <CartWidget/>
                </div>
            </nav>
}

export default Navbar