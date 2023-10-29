import React from "react";
import { Link } from "react-router-dom";

import "./prueba.css";

const Categorias = () => {
  const nombreCategoriaUsuario = localStorage.getItem("nombreCategoriaUsuario");

  return (
    <div className="categorias-container">
      <h1>Categorías Disponibles</h1>
      <Link
        to="/pruebassss"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="categorias1">
          <h1>Entretenimiento</h1>
        </div>
      </Link>
      <div className="categorias2">
        <h1>Deportes</h1>
      </div>
      <div className="categorias3">
        <h1>{nombreCategoriaUsuario}</h1>
      </div>
    </div>
  );
};
export default Categorias;
