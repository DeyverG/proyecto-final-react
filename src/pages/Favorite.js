import React, { useEffect, useState } from 'react'
import Character from '../components/Character'
import '../assets/style/favorite.css'
import { Link } from "react-router-dom";
import Particles from 'react-particles-js';

const Favorite = () => {

    const [characters, setCharacters] = useState([]);
    const [bandera, setBandera] = useState(true);

    const consulta = () => {
        const peticion = JSON.parse(localStorage.getItem('pjs'))
        setCharacters(peticion);
    }

    const deleteAll = () => {
        localStorage.setItem('pjs', '[]');
        setBandera(true)
    }
    useEffect(() => {
        if (bandera) {
            consulta()
            setBandera(false)
        }
    }, [bandera])

    return (
        <>
            <Particles className="tspartciles" />
            <div className="contenedorIconos">
                <Link to="/Character"><i className="fas fa-arrow-left colorIcon iconoIzq"></i></Link>
                <Link to="/Information"><i className="fas fa-question-circle colorIcon iconoIzq"></i></Link>
            </div>
            <div className="contenedorBtn">
                <button className="btn btnFavorite" onClick={deleteAll}>Eliminar Todo</button>
            </div>
            <div className="scroll scrollDiv">
                <div className="contenedorFavorite">
                    {characters.map(pj => (
                        <Character
                            character={pj}
                        />
                    ))}

                </div>
            </div>
        </>
    );
}

export default Favorite;