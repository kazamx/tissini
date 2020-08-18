import React,{Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  // Crear listado de productos
  const [productos, guardarProductos ]= useState([
    { id:1,nombre:'Blusa', precio:10, imagen:"https://api.tissini.app/img/products/textiles/blusas/2002-123_0.jpg" },
    { id:2,nombre:'Bodie', precio:20, imagen:"https://api.tissini.app/img/products/textiles/bodies/2002-122_0.jpg" },
    { id:3,nombre:'Faja', precio:30, imagen:"https://api.tissini.app/img/products/textiles/fajas/2002-150_0.jpg" },
    { id:4,nombre:'Jean', precio:40, imagen:"https://api.tissini.app/img/products/textiles/jeans/2006-130_0.jpg" },
    { id:5,nombre:'Pantalón', precio:50, imagen: "https://api.tissini.app/img/products/textiles/pantalones/2006-104_0.jpg"},
    { id:6,nombre:'Ropa interior', precio:60, imagen: "https://api.tissini.app/img/products/textiles/ropa-interior/2006-156_0.jpg"},
    { id:7,nombre:'Sport', precio:70, imagen: "https://api.tissini.app/img/products/textiles/sport/2006-111_0.jpg"}
  ]);

  // State para un carrito de compras
  const [carrito, agregarProducto] = useState([

  ]);

  // Obterner la fecha
  const fecha = new Date().getFullYear();

  return (
    <Router>
      <Header
      titulo='Tienda Virtual'
      />
      {/* PRUEBA */}
      <Switch>

        <Route path="/categorias">    {/* ---------------CATEGORÍAS--------------- */}
          Categorias
        </Route>
        <Route path="/catalogo">      {/* ---------------CATÁLOGO--------------- */}
          
          <div className="contenedor_producto">
        <h1>Lista de productos</h1>
      {productos.map(producto=>(
        <Producto
          key = {producto.id}
          producto = {producto}
          productos={productos}
          carrito = {carrito}
          agregarProducto = {agregarProducto}
        />
       
      ))}
       </div>
      <Carrito
        carrito={carrito}
        agregarProducto = {agregarProducto}
      
      />
        </Route>

        <Route path="/">                {/* ---------------Inicio--------------- */}
          Módulo de autenticación
        </Route>
      </Switch>
      <Footer
      fecha = {fecha}
      />
    </Router>
  );
}

export default App;

/*

<Fragment>
      <Header
      titulo='Tienda Virtual'
      numero = {20}
      />

      <h1>Lista de productos</h1>
      {productos.map(producto=>(
        <Producto
          key = {producto.id}
          producto = {producto}
          productos={productos}
          carrito = {carrito}
          agregarProducto = {agregarProducto}
        />
      ))}
      <Carrito
        carrito={carrito}
        agregarProducto = {agregarProducto}
      
      />
      

      <Footer
      fecha = {fecha}
      />
    </Fragment>

*/