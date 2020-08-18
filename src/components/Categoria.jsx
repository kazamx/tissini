import React from 'react';
import './css/categorias.css';
import Producto from './Producto';

const Categoria = ({categorias,categoria}) => {
    const {id, nom_cat, imagen_categoria} = categoria;

    return (
        <div className="categoria">
        <h2>{nom_cat}</h2>
        <img src={imagen_categoria} className="imagenes" alt="No cargó la imagen"/>
        <br/>  
        
        </div>
        
    );
}

export default Categoria;