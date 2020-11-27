import React from 'react';
import Particles from 'react-particles-js';
import LogoBreaking from '../assets/img/bb.svg';
import { Link } from "react-router-dom";
import '../assets/style/home.css';

const Home = () => {
    return (
        <>
            <Particles className="tspartciles" />
            <div className="contenedorHome">
                <img src={LogoBreaking} alt="" />
                <p className="titulo">Fabulosos Personajes De la Serie:</p>
                <Link to="/Character">
                    <button className="btn">Ver Personajes</button>
                </Link>
            </div>

        </>
    );
}

export default Home;