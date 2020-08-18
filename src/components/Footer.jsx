// con imp autocompleta toda la línea siguiente
import React from 'react';
import './css/footer.css'
import { Link } from 'react-router-dom';

// con sfc autocompleta creando la estructura de la función flecha y el 'export default'
const Footer = ({fecha}) => {
    return (
        <footer>
            <Link to="/categorias" className="botones">Categorias</Link>
            <Link to="catalogo" className="botones">Catálogo</Link>
            {/* <p>Todos lo derechos reservados &copy; {fecha}</p> */}
        </footer>
    )
}

export default Footer;

