import React from 'react'
import logo3 from "../images/logo3.png"
import "../sass/styles.sass"

export default function Contact() {
    return (
        <div className='main-contacto'>
            <img className="logoRyMc" src={logo3} alt="logo rickymorty"/>
            <form className="formularioC" method="get" action="recibidocompai">
                <div className="form1">
                    <label for="nombre">
                        <input className="contacto" type="text" id="nombre" name="nombre" value="Nombre" required/>
                    </label>
                    <label for="correo">
                        <input className="contacto" type="text" id="correo" name="correo" value="Correo" required/>
                    </label>
                    <label for="tfno">
                        <input className="contacto" type="number" id="tfno" name="teléfono" value="Teléfono" required/>
                    </label>
                </div>
                <div className="form2">
                    <label for="cuentanos">
                        <textarea id="cuentanos" name="cuentanos" required>Cuéntanos tu problema</textarea>
                    </label>
                </div>
                <input className="enviar" type="submit" name="enviar" value="Enviar"/>
            </form>
        </div>
)
}
