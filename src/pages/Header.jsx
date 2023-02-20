import "../sass/styles.sass"
import photoHeader from "../images/logoHeader.png"
import logoHeader from "../images/header.jpg"
import {FaSistrix} from "react-icons/fa"
import {FaUserAlt} from "react-icons/fa"
import {FaAlignJustify} from "react-icons/fa"
import { NavLink, Link, useNavigate } from "react-router-dom"
import { useUserContext } from "../context/UserContext"

function header(){

    const { user, setUser, favs, setFavs, loged, setLoged } = useUserContext()
    const navigate = useNavigate()

    const cerrarSesion = () => {
        setLoged(false)
        localStorage.setItem(user+"favs", favs)
        setFavs(null)
        navigate("/")
    }

    return(
        <header>
            <Link to="/"><img className="logoHeader" src={photoHeader} alt="Acceso a página de inicio"/></Link>
            <nav className="navHeader">
                <ul className="buttonsHeader">
                    <li><NavLink to="/characters">Personajes</NavLink></li>
                    <li><NavLink to="/seasons">Capitulos</NavLink></li>
                    <li><NavLink to="/contact">Contactos</NavLink></li>
                </ul>
            </nav>
            <img className="photoHeader" src={logoHeader} alt="a"/>
            <ul className="iconsHeader">
                <label className="menu" htmlFor="menuDesplegable"><FaAlignJustify/>
                    <input className="menuCheck" type="checkbox" id="menuDesplegable"/>
                    <ul className="menuDesplegado">
                        <li><NavLink to="/characters">Personajes</NavLink></li>
                        <li><NavLink to="/seasons">Capitulos</NavLink></li>
                        <li><NavLink to="/contact">Contactos</NavLink></li>
                    </ul>
                </label>
                {
                    loged ? (
                        <nav className="navLoged">
                            <ul className="buttonsHeader">
                                <li><NavLink to="/myFavs">Favoritos</NavLink></li>
                                <button onClick={cerrarSesion}>Cerrar Sesion</button>
                            </ul>
                        </nav>
                    ) : (
                        <li><NavLink to="/login"><FaUserAlt/></NavLink></li>
                    )
                }
            </ul>
        </header>
    )
}
export default header