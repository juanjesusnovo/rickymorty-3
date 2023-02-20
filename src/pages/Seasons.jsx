import React from 'react'
import "../sass/styles.sass"
import temp1 from "../images/temp1.jpg"
import temp2 from "../images/temp2.jpg"
import temp3 from "../images/temp3.jpg"
import temp4 from "../images/temp4.jpg"
import temp5 from "../images/temp5.jpg"
import { Link } from 'react-router-dom'

export default function Seasons() {
    return (
        <section className="section-caps">
            <Link to="/seasons/chapters" className='temps'>
                <figure>
                    <img className="temporada" src={temp1} alt="temporada 1" />
                </figure>
                <div className="datos-temp">
                    <p>Temporada 1</p>
                    <p>11 Episodios</p>
                </div>
            </Link>
            <Link to="/seasons/chapters" className='temps'>
                <figure>
                    <img className="temporada" src={temp2} alt="temporada 2" />
                </figure>
                <div className="datos-temp">
                    <p>Temporada 2</p>
                    <p>10 Episodios</p>
                </div>
            </Link>
            <Link to="/seasons/chapters" className='temps'>
                <figure>
                    <img className="temporada" src={temp3} alt="temporada 3" />
                </figure>
                <div className="datos-temp">
                    <p>Temporada 3</p>
                    <p>10 Episodios</p>
                </div>
            </Link>
            <Link to="/seasons/chapters" className='temps'>
                <figure>
                    <img className="temporada" src={temp4} alt="temporada 4" />
                </figure>
                <div className="datos-temp">
                    <p>Temporada 4</p>
                    <p>10 Episodios</p>
                </div>
            </Link>
            <Link to="/seasons/chapters" className='temps'>
                <figure>
                    <img className="temporada" src={temp5} alt="temporada 5" />
                </figure>
                <div className="datos-temp">
                    <p>Temporada 5</p>
                    <p>8 Episodios</p>
                </div>
            </Link>
        </section>
    )
}
