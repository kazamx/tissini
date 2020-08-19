import React from "react";
import "./css/producto.css";
//import Carrito from './Carrito';

const Producto = ({ producto, carrito, agregarProducto, productos }) => {
  const { nombre, precio, id, imagen } = producto;

  //Agregar producto al carrito
  const seleccionarProducto = (id) => {
    const producto = productos.filter((producto) => producto.id === id)[0]; // con [0] accedo al objeto.
    agregarProducto([...carrito, producto]);
  };

  // Elimina un producto del carrito
  const eliminarProducto = (id) => {
    const productos = carrito.filter((producto) => producto.id !== id);

    // Colocar los productos en el State
    agregarProducto(productos);
  };

  return (
    <div className="producto">
      <h2>{nombre}</h2>
      <img src={imagen} className="imagenes" alt="No cargó la imagen" />
      <br />
      <div className='precioboton'>
        <h3>Precio: ${precio}</h3>
        {productos ? (
          <button
            className="boton"
            type="button"
            onClick={() => seleccionarProducto(id)}
          >
            Comprar
          </button>
        ) : (
          <button
            className="boton"
            type="button"
            onClick={() => eliminarProducto(id)}
          >
            Eliminar
          </button>
        )}
      </div>
    </div>
  );
};

export default Producto;