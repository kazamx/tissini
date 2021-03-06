import React from "react";
import "./css/carrito.css";
import Producto from "./Producto";

const Carrito = ({ carrito, agregarProducto }) => (
  <div className="carrito">
    <h2 className='listaProductocarrito'>Tu carrito de compras</h2>

    {carrito.length === 0 ? (
      // Se utiliza esto en vez de un if. Se conoce como ternario.
      <p className='noCarrito'>No hay elementos en el carrito</p>
    ) : (
      carrito.map((producto) => (
        <Producto
          key={producto.id}
          producto={producto}
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
      ))
    )}
  </div>
);

export default Carrito;