import React from "react";
import "./prueba.css";
import album from "../Prueba/Images/Killers_album-scaled.jpg";
import cine from "../Prueba/Images/image.jpg";
import arte from "../Prueba/Images/la-mona-lisa-cke.jpg";
import { useHistory } from "react-router-dom";

const Entretenimiento = () => {
  const nombreCategoriaUsuario = localStorage.getItem("nombreCategoriaUsuario");
  const history = useHistory();

  const handleCineClick = () => {
    history.push("/plantilla_noticia");
  };

  const handleCineClickMusica = () => {
    history.push("/musica");
  };

  

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
        <div className="sub-cat">
          <h4> Sub Categorías</h4>
        </div>
        <div className="sub1" onClick={handleCineClick}>
          <img src={cine} alt="Cine" className="imagen" />
          <p>Cine</p>
          <p className="texto-adicional">
            Este es un artículo de entretenimiento acerca del cine. Encontrarás
            información interesante sobre películas, actores y más.
          </p>
        </div>
        <div className="sub2" onClick={handleCineClickMusica}>
          <img src={album} alt="Música" className="imagen" />
          <p>Música</p>
          <p className="texto-adicional">
            Descubre las últimas noticias y tendencias musicales. Explora
            reseñas de álbumes, artistas destacados y conciertos emocionantes.
          </p>
        </div>
        <div className="sub3">
          <img src={arte} alt="Arte" className="imagen" />
          <p>Arte</p>
          <p className="texto-adicional">
            Sumérgete en el mundo del arte. Explora obras maestras, artistas
            contemporáneos y las últimas exposiciones artísticas.
          </p>
        </div>
      </div>
    </>
  );
};
export default Entretenimiento;
