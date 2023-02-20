import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo3 from "../images/logo3.png"
import "../sass/styles.sass"
import { useUserContext } from "../context/UserContext"



export default function Login() {

    const { user, setUser, loged, setLoged, favs, setFavs } = useUserContext()
    const navigate = useNavigate()

    const loginUser = (e) => {
        e.preventDefault()
        /* if(localStorage.getItem(e.target.user.value) === e.target.password.value){
            setUser(e.target.user.value)
            setFavs(JSON.parse(localStorage.getItem(user + "_favs")))
            setLoged(true)
            navigate("/")
        } */
        if(localStorage.hasOwnProperty(e.target.user.value+"favs")){
            setUser(e.target.user.value)
            setFavs(localStorage.getItem(e.target.user.value+"favs").split(","))
            setLoged(true)
            navigate("/")
        }
        else{
            setUser(e.target.user.value)
            setFavs([])
            setLoged(true)
            navigate("/")
        }
    }



    return (
        <div className='main-sesion'>
            <img className="logoRyMs" src={logo3} alt="Logo de Rick y Morty" />
            <form className="formularioSesion" onSubmit={loginUser}>
                <label htmlFor="usuario">
                    <input className="sesion" type="text" id="user" name="usuario" placeholder="user" required />
                </label>
                <label htmlFor="contraseña">
                    <input className="sesion" type="password" id="password" name="contraseña" placeholder="password" required />
                </label>
                <button type='submit'>Login</button>
                <NavLink to="/register">No tienes cuenta? Registrate!</NavLink>
            </form>
        </div>
    )
}
