import React,{Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';
import Categoria from './components/Categoria';
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import categoria from './components/Categoria';


function App() {

  // Crear listado de productos
  const [productos, guardarProductos ]= useState([
    { id:1,nombre:'Blusa', precio:10, imagen:"https://api.tissini.app/img/products/textiles/blusas/2002-123_0.jpg" },
    { id:2,nombre:'Bodie', precio:20, imagen:"https://api.tissini.app/img/products/textiles/bodies/2002-122_0.jpg" },
    { id:3,nombre:'Faja', precio:30, imagen:"https://api.tissini.app/img/products/textiles/fajas/2002-150_0.jpg" },
    { id:4,nombre:'Jean', precio:40, imagen:"https://api.tissini.app/img/products/textiles/jeans/2006-130_0.jpg" },
    { id:5,nombre:'Pantalón', precio:50, imagen: "https://api.tissini.app/img/products/textiles/pantalones/2006-104_0.jpg"},
    { id:6,nombre:'Ropa interior', precio:60, imagen: "https://api.tissini.app/img/products/textiles/ropa-interior/2006-156_0.jpg"},
    { id:7,nombre:'Sport', precio:70, imagen: "https://api.tissini.app/img/products/textiles/sport/2006-111_0.jpg"},
    { id:8,nombre:'Blusa Liah', precio:80, imagen: "https://api.tissini.app/img/products/textiles/blusas/2006-139_0.jpg"},
    { id:9,nombre:'chaqueta', precio:90, imagen: "https://api.tissini.app/img/products/textiles/sport/2006-193_0.jpg"}
  ]);

  // State para imagenes de categorias
  const [categorias,guardarCategorias] = useState([
    {id:1,nom_cat:'Lo más vendido',imagen_categoria:"https://api.tissini.app/img/categories/bestsellers.png?vuetify-preload"},
    {id:2,nom_cat:'Recomendado',imagen_categoria:"https://api.tissini.app/img/categories/recommended.png?vuetify-preload"},
    {id:3,nom_cat:'Temporada',imagen_categoria:"https://api.tissini.app/img/categories/season.png?vuetify-preload"}
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
      
      <Switch>

        <Route path="/categorias">    {/* ---------------CATEGORÍAS--------------- */}
          <h1>CATEGORIAS</h1>
          <div className="contenedor_categorias">
          {categorias.map(categoria=>(
          <Categoria
            key={categoria.id}
            categoria={categoria}
            categorias={categorias}
          />
          ))}

          </div>
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
          <div className="contenedor_login">
          <Login/>
          </div>
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