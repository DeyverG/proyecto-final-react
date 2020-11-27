import React from 'react';
import '../assets/style/character.css';
const Character = ({ character }) => {


    return (
        <div className="contenedorpj">
            <p className="text paddingtbottom">{character.name}</p>
            <img className="img" src={character.img} alt="" />
            <p className="text paddingtext">Estado: {character.status === 'Deceased' ? <span className="dead">{character.status}</span> : <span className="alive">{character.status}</span>} </p>
        </div>
    );
}

export default Character;