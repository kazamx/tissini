import React from 'react';
import './css/header.css';

//import App from '../App';


function Header({titulo}) {

    return(
        <div className="encabezado">
             <h1 >{titulo}</h1>
        </div>
           
        
        
    )
}

export default Header;