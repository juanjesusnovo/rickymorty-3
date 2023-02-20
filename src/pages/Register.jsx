import React from 'react'
import { useNavigate } from 'react-router'
import { useUserContext } from '../context/UserContext'
import logo3 from "../images/logo3.png"

export default function Register() {

    const {loged, setLoged} = useUserContext()
    const navigate = useNavigate()

    const createUser = (e) => {
        e.preventDefault()
        if(!localStorage.hasOwnProperty(e.target.usuario.value)){
            localStorage.setItem(e.target.usuario.value, e.target.password.value)
            localStorage.setItem(e.target.usuario.value+"favs", [])
            navigate("/login")
        }
    }

    return (
        <div className='main-sesion'>
            <img className="logoRyMs" src={logo3} alt="Logo de Rick y Morty" />
            <form className="formularioSesion" onSubmit={createUser}>
                    <label htmlFor="nombre">
                        <input className="sesion" type="text" id="nombre" name="nombre" placeholder="Nombre" required />
                    </label>
                    <label htmlFor="correo">
                        <input className="sesion" type="email" id="correo" name="correo" placeholder="Correo" required />
                    </label>
                    <label htmlFor="usuario">
                        <input className="sesion" type="text" id="usuario" name="usuario" placeholder="Usuario" required />
                    </label>
                    <label htmlFor="password">
                        <input className="sesion" type="password" id="password" name="password" placeholder="password" required />
                    </label>
                    <label htmlFor="Rpassword">
                        <input className="sesion" type="password" id="Rpassword" name="Rpassword" placeholder="Repetir password" required/>
                    </label>
                    <label htmlFor='age'>
                        <input className='sesion' type="date" id='birthday' name='birthday' />
                    </label>
                    <label htmlFor='ads'>
                        <div className='checkbox'>
                            <input className='sesion' type="checkbox" id="ads" name='ads' />
                            <p className='formulario'>Quieres recibir publicidad completamente engañosa?</p>
                        </div>
                    </label>
                <input title="registrarse" className="boton" type="submit" placeholder="Registrarse" />
            </form>
        </div>
    )
}
