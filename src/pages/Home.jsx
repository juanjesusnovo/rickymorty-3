import React from "react"
import "../sass/styles.sass"
import logo3 from "../images/logo3.png"
import { BallTriangle } from "react-loader-spinner"
import { characterListPagination} from "../hooks/useFetch"
import ShowCharacters from "../components/ShowCharacters"


function home(){

    const { data, loading, error } = characterListPagination(
        "https://rickandmortyapi.com/api/character/[1,2,244]"
    )
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
        return <h1>{error}</h1>
    }
        
    return(
        <main className="main-inix">
            <img className="logoRyM" src={logo3} alt="logo rick y morty" />
            <ShowCharacters characters={data}></ShowCharacters>
        </main>
    )
}

export default home