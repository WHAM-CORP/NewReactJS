import Logo from "../Logo/Logo"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import "./NavBar.css"
import CartWidget from "../CartWitget/CartWidget "
import imagenes from "../../imagenes/image02.webp"
const NavBar = () => {
    return <div className="containerHeader">
        <Logo src={imagenes} alt="holamundo" />
        <ItemListContainer>
            <ol className="menu">
                <li>Inicio</li>
                <li>Nosotros</li>
                <li>Mision</li>
                <CartWidget />
            </ol>
        </ItemListContainer>
    </div>
}
export default NavBar;