// con imp autocompleta toda la línea siguiente
import React from 'react';
import './css/footer.css'

// con sfc autocompleta creando la estructura de la función flecha y el 'export default'
const Footer = ({fecha}) => {
    return (
        <footer>
            <p>Todos lo derechos reservados &copy; {fecha}</p>
        </footer>
    )
}

export default Footer;

