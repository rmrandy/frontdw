import React from "react";
import "./prueba.css";
import album from "../Prueba/Images/Killers_album-scaled.jpg";
import cine from "../Prueba/Images/image.jpg";
import arte from "../Prueba/Images/la-mona-lisa-cke.jpg";

const Entretenimiento = () => {
  const nombreCategoriaUsuario = localStorage.getItem("nombreCategoriaUsuario");

  return (
    <>
      <div className="categorias-container">
        <h1>Categorías Disponibles:</h1>
        <div className="categorias1">
          <h1>Entretenimiento</h1>
        </div>
        <div className="categorias2">
          <h2>Deportes</h2>
        </div>
        <div className="categorias3">
          <h3>{nombreCategoriaUsuario}</h3>
        </div>
      </div>
      <div className="contenido-ent">
        <div>
          <h4> Sub Categorías</h4>{" "}
        </div>
        <div className="sub1">
          <img src={cine} alt="Cine" className="imagen" />
          <p>Cine </p>
        </div>
        <div className="sub2">
          <img src={album} alt="Cine" className="imagen" />
          <p>Musica </p>
        </div>
        <div className="sub3">
          <img src={arte} alt="Cine" className="imagen" />
          <p>Arte </p>
        </div>
      </div>
    </>
  );
};
export default Entretenimiento;
