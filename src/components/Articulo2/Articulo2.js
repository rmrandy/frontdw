import React from "react";
import foto from "../Home/assets/4.jpg";
import "./Articulo2.css"; 

function Articulo2() {
  return (
    <div className="article-container">
      <img
        src={foto}
        alt="Imagen del artículo"
        className="article-image"
      />
      <div className="article-content">
        <h1 className="article-title">Título del Artículo</h1>
        <p className="article-description">
          Descripción breve del artículo. Puedes agregar más contenido aquí.
        </p>
        <p className="article-author">Escrito por: Nombre del Autor</p>
      </div>
    </div>
  );
}

export default Articulo2;
