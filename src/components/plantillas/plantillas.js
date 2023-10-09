import React from "react";
import "../Articulos/Articulo.css";

const Articulo = () => {
  return (
    <div className="page-container">
      <div className="content-container">
        <div className="image-title-container">
          <div
            style={{
              width: "auto", // Establecemos el ancho automático
              float: "left",
              marginRight: "20px",
              marginBottom: "20px",
              borderRadius: "15px",
              border: "2px solid black",
              backgroundColor: "#f0f0f0",
              height: "500px",
              display: "flex",
              alignItems: "center",
              padding: "0 10px", // Agregamos un poco de espaciado
            }}
          >
            <h1 style={{ margin: "0" }}>Título del artículo</h1>
          </div>
          <div
            style={{
              width: "200px", // Mantenemos el ancho del div de la imagen
              float: "right",
              marginLeft: "20px",
              marginBottom: "20px",
              borderRadius: "15px",
              border: "2px solid black",
              backgroundColor: "#f0f0f0",
              height: "500px",
            }}
          ></div>
        </div>
        <div className="article-content">
          <div
            style={{
              border: "2px solid black",
              backgroundColor: "#f0f0f0",
              marginBottom: "20px",
              height: "200px",
              borderRadius: "15px"
            }}
          >
            {/* Placeholder de texto Lorem Ipsum */}
          </div>

          <h2>Conclusiones</h2>
          <div
            style={{
              border: "2px solid black",
              backgroundColor: "#f0f0f0",
              marginBottom: "20px",
              height: "200px",
              borderRadius: "15px"
            }}
          >
            {/* Placeholder de texto Lorem Ipsum */}
          </div>

          {/* Más contenido similar aquí */}

          <h3>Escrito por:</h3>
          <div
            style={{
              border: "2px solid black",
              backgroundColor: "#f0f0f0",
              height: "40px",
            }}
          >
            {/* Placeholder de nombre del autor */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articulo;
