import React, { useState } from 'react'
import "../sass/styles.sass"
import { BallTriangle } from "react-loader-spinner"
import { characterListPagination} from "../hooks/useFetch"
import ShowCharacters from "../components/ShowCharacters"
import NotFound from './NotFound'
import { NavLink } from 'react-router-dom'


export default function Characters() {
    let url = `https://rickandmortyapi.com/api/character/?`
    const [page, setPage] = useState(`https://rickandmortyapi.com/api/character/?page=1`)
    const { data, loading, error } = characterListPagination(page)
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
        return (
            <div className='error-char'>
                <h1>No Character Found</h1>
                <div className='filtrado'>
                    <form onSubmit={filterAll} className="Filtros">
                        <input id='name' placeholder='Introduce el nombre del personaje deseado'></input>
                        <select id="status" onChange={filterCharacter}>
                            <option value="alive">Alive</option>
                            <option value="dead">Dead</option>
                            <option value="unknown">Unknown</option>
                        </select>
                        <select id="gender" onChange={filterCharacter}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="genderless">Genderless</option>
                            <option value="unknown">Unknown</option>
                        </select>
                        <select id="species" onChange={filterCharacter}>
                            <option value="human">Human</option>
                            <option value="alien">Alien</option>
                            <option value="animal">Animal</option>
                            <option value="humanoid">Humanoid</option>
                            <option value="robot">Robot</option>
                        </select>
                        <button onClick={resetFilter}>Reset Filters</button>
                        <input type='submit' value='Filtrar' title='filtrar'/>
                    </form>
                </div>
            </div>
        )
    }
    const handlePreviousPage = () => {
        if(data.info.prev !== null){
            setPage(data.info.prev)
        }
        window.scrollTo(0, 0)
    }
    const handleNextPage = () => {
        if(data.info.next !== null){
            setPage(data.info.next)
        }
        window.scrollTo(0, 0)
    }
    const filterCharacter = (e) => {
        url += `${e.target.id}=${e.target.value}&`
        console.log();
        setPage(url)
    }
    const resetFilter = () => {
        setPage(`https://rickandmortyapi.com/api/character/?page=1`)
    }
    const filterAll = (e) => {
        e.preventDefault()
        if(e.target.name.value !== ""){
            setPage(`https://rickandmortyapi.com/api/character/?name=${e.target.name.value}`)
        }
    }
        
    return(
        <main className="main-inix">
            <ul>
                <li>
                    <button onClick={handlePreviousPage}>Prev</button>
                </li>
                <div className='filtrado'>
                    <form onSubmit={filterAll} className="Filtros">
                        <input id='name' placeholder='Introduce el nombre del personaje deseado'></input>
                        <select id="status" onChange={filterCharacter}>
                            <option value="alive">Alive</option>
                            <option value="dead">Dead</option>
                            <option value="unknown">Unknown</option>
                        </select>
                        <select id="gender" onChange={filterCharacter}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="genderless">Genderless</option>
                            <option value="unknown">Unknown</option>
                        </select>
                        <select id="species" onChange={filterCharacter}>
                            <option value="human">Human</option>
                            <option value="alien">Alien</option>
                            <option value="animal">Animal</option>
                            <option value="humanoid">Humanoid</option>
                            <option value="robot">Robot</option>
                        </select>
                        <button onClick={resetFilter}>Reset Filters</button>
                        <input type='submit' value='Filtrar' title='filtrar'/>
                    </form>
                </div>
                <li>
                    <button onClick={handleNextPage}>Next</button>
                </li>
            </ul>
            <ShowCharacters characters={data.results}></ShowCharacters>
            <ul>
                <li>
                    <button onClick={handlePreviousPage}>Prev</button>
                </li>
                <li>
                    <button onClick={handleNextPage}>Next</button>
                </li>
            </ul>
        </main>
    )
}
