import "../sass/styles.sass"
import logo from "../images/logo.jpg"
import {FaTwitter} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaFacebookSquare} from "react-icons/fa"

function footer(){
    return(
        <footer>
            <div className="mediaIcons">
                <img src={logo} className="logoFooter" alt="" />
                <ul className="iconsFooter">
                    <li><FaTwitter/></li>
                    <li><FaInstagram/></li>
                    <li><FaFacebookSquare/></li>
                </ul>
            </div>
            <nav className="navFooter">
                <ul className="buttonsFooter">
                    <li>Aviso Legal</li>
                    <li>Política de Privacidad</li>
                    <li>Cookies</li>
                </ul>
            </nav>
        </footer>
    )
}
export default footer