import React, { useState } from 'react'
import "../sass/styles.sass"
import { BallTriangle } from "react-loader-spinner"
import { NavLink, useNavigate } from 'react-router-dom'
import { characterListPagination} from "../hooks/useFetch"
import ShowCharacters from "../components/ShowCharacters"
import { useUserContext } from "../context/UserContext"

import NotFound from './NotFound'


export default function myFavs() {

    const {user, setUser, favs, setFavs, loged, setLoged} = useUserContext()

    let link = ""

    if(favs.length = 1){ link = `https://rickandmortyapi.com/api/character/${favs[0]}` }
    else{ link = `https://rickandmortyapi.com/api/character/${favs}` }

    const { data, loading, error } = characterListPagination(link)

    if (loading) {
        return (<BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
        />)
    }
    if (error) {
        return(
            <NotFound />
        )
    }
    const showData = () => {
        console.log(data)
        console.log(favs)
    }
        
    return(
        <main className="main-inix">
            <button onClick={showData}>data</button>
            <ShowCharacters characters={data.results}></ShowCharacters>
        </main>
    )
}
