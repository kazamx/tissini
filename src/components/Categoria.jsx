import React from "react";
import "./css/categorias.css";

const Categoria = ({ producto }) => {
  const { nombre, precio, id, imagen, categoria } = producto;

  return (
    <div className="categoria">
      {producto.categoria === "lo mas vendido" ? (
        <div>
          <h2>categoria: {categoria}</h2>
          <h2>{nombre}</h2>
          <img src={imagen} className="imagenes" alt="No cargó la imagen" />
        </div>
      ) : (
        <h2></h2>
      )}
    </div>
  );
};

export default Categoria;