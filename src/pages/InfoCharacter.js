import React, { useEffect, useState } from 'react';
import Particles from 'react-particles-js';
import Character from '../components/Character';
import '../assets/style/infoCharacter.css';
import { Link } from "react-router-dom";
import axios from 'axios';

const InfoCharacter = ({history}) => {

    const [character, setCharacter] = useState({
        name: '',
        img: '',
        status: ''
    })
    const [bandera, setBandera] = useState(true);
    const handleBandera = () => { setBandera(true) };
    const consulta = async () => {
        const request = await axios.get('https://www.breakingbadapi.com/api/character/random').then();
        if (!request) {
            return;
        }
        setCharacter({
            name: request.data[0].name,
            img: request.data[0].img,
            status: request.data[0].status
        })
    }

    const handleSubmit = () =>{
        const pjs = JSON.parse(localStorage.getItem('pjs'));
        if(!pjs){
            localStorage.setItem('pjs', '[]');
            return;
        }
        pjs.push(character);
        localStorage.setItem('pjs', JSON.stringify(pjs));
        history.push('/Favorite')
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
                <Link to="/"><i className="fas fa-arrow-left colorIcon iconoIzq"></i></Link>
                <Link to="/Information"><i className="fas fa-question-circle colorIcon iconoIzq"></i></Link>
                <Link to="/Favorite"><i className="fas fa-star colorIcon iconoDer"></i></Link>
            </div>
            <div className="contenedorInfoC">
                <Character character={character} />
                <button className="btn" onClick={handleBandera}>Nuevo Personaje</button>
                <button className="btn btnGuardar" onClick={handleSubmit}>Guardar Personaje</button>
            </div>
        </>
    );
}

export default InfoCharacter;