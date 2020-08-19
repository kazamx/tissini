// con imp autocompleta toda la línea siguiente
import React from 'react';
import './css/footer.css'
import { Link } from 'react-router-dom';

// con sfc autocompleta creando la estructura de la función flecha y el 'export default'
const Footer = ({fecha}) => {
    return (
        <footer>
            <Link to="/categorias" className="botones">
            <svg className='icon' viewBox="0 0 20 20" fill="currentColor" ><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
            Categorias</Link>
            <Link to="catalogo" className="botone">
            <svg viewBox="0 0 20 20" fill="currentColor" class="icon"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path></svg>
            Catálogo</Link>
            {/* <p>Todos lo derechos reservados &copy; {fecha}</p> */}
        </footer>
    )
}

export default Footer;