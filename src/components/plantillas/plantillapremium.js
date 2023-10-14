import React from "react";
import "../Articulo2/Articulo2.css";
import foto from "../Home/assets/7.jpg";
import theWK from "../Home/assets/THEWK.jpg";
import theWK2 from "../Home/assets/THEWK2.jpg";

function Plantilla2() {
  
  return (
    <div className="article-container">
      <div className="article-content-container" style={{ border: "2px solid black" }}>
        <div className="article-title-container" style={{ border: "2px solid black" }}>
          <h1 className="article-title">Título del Artículo</h1>
        </div>
        <div className="article-image-container" style={{ border: "2px solid black" }}>
          <img src={foto} alt="The Weeknd" className="article-image" />
        </div>
        <div className="article-content" style={{ border: "2px solid black" }}>
          <p style={{ border: "2px solid black" }}>
            {/* Texto eliminado */}
          </p>
          <div className="article-inline-image" style={{ border: "2px solid black" }}>
            <img src={theWK2} alt="The Weeknd" className="inline-article-image" style={{ maxHeight: "600px" }} />
          </div>
          <p style={{ border: "2px solid black" }}>
            {/* Texto eliminado */}
          </p>
          <p style={{ border: "2px solid black" }}>
            {/* Texto eliminado */}
          </p>
          <p style={{ border: "2px solid black" }}>
            {/* Texto eliminado */}
          </p>
          <div className="article-inline-image" style={{ border: "2px solid black" }}>
            <img src={theWK} alt="The Weeknd" className="inline-article-image" style={{ maxHeight: "600px" }} />
          </div>
          <p style={{ border: "2px solid black" }}>
            {/* Texto eliminado */}
          </p>
          <p style={{ border: "2px solid black" }}>
            {/* Texto eliminado */}
          </p>
        </div>
        <div className="article-author-container" style={{ border: "2px solid black" }}>
          <p className="article-author">Escrito por: Nombre del Autor</p>
        </div>
      </div>
    </div>
  );
}

export default Plantilla2;
