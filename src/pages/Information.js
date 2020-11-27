import React from 'react'
import '../assets/style/information.css'
import Particles from 'react-particles-js';
import { Link } from "react-router-dom";
import ReactLogo from '../assets/img/react.png';

const Information = () => {
    return (
        <>
            <Particles className="tspartciles" />
            <div className="contenedorIconos">
                <Link to="/Favorite"><i className="fas fa-star colorIcon iconoIzq"></i></Link>
            </div>
            <div className="texto">
                <h1 className="tituloInfo">INFORMACION DE DESARROLLO</h1>
                <div className="division">
                    <h2 className="subtituloInfo">Framework Utilizado:</h2>
                    <h4 className="parrafoInfo">ReactJS</h4>
                    <h2 className="subtituloInfo">API utilizada</h2>
                    <h4 className="parrafoInfo">https://breakingbadapi.com/</h4>
                    <h2 className="subtituloInfo">Diseño y Estilos</h2>
                    <h4 className="parrafoInfo">CSS y HTML</h4>
                </div>
                <div className="division">
                    <img className="imgReact" src={ReactLogo} alt=""/>
                </div>

            </div>
        </>
    );
}

export default Information;