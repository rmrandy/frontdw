import React from "react";
import "../Categorías/categorias.css";


const Categorias = () => {
  return (
    <div className="categorias-container">
      <div className="category">
        <img src="../Home/assets/4.jpg" alt="Imagen" />
        <h1>Tu título aquí</h1>
        <p>Contenido de la categoría "Noticia"</p>
      </div>

      <div className="category">
        <img src="../Home/assets/4.jpg" alt="Imagen" />
        <h1>Tu título aquí</h1>
        <p>Contenido de la categoría "Opinión"</p>
      </div>

      <div className="category">
        <img src="../Home/assets/4.jpg" alt="Imagen" />
        <h1>Tu título aquí</h1>
        <p>Contenido de la categoría "Reseñas"</p>
      </div>
    </div>
  );
};

export default Categorias;
