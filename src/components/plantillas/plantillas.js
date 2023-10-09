import React, { useState } from "react";
import "../Articulos/Articulo.css";

const Articulo = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Función para manejar la carga de la imagen
  const handleImageUpload = (e) => {
    const imageFile = e.target.files[0];
    if (imageFile) {
      const imageUrl = URL.createObjectURL(imageFile);
      setSelectedImage(imageUrl);
    }
  };

  // Función para manejar el drag and drop de la imagen
  const handleDrop = (e) => {
    e.preventDefault();
    const imageFile = e.dataTransfer.files[0];
    if (imageFile) {
      const imageUrl = URL.createObjectURL(imageFile);
      setSelectedImage(imageUrl);
    }
  };

  // Evita que el navegador abra la imagen al soltarla
  const preventDefault = (e) => {
    e.preventDefault();
  };

  return (
    <div className="page-container">
      <div className="content-container">
        <div
          className="image-title-container"
          style={{ display: "flex" }}
          onDragOver={preventDefault}
          onDrop={handleDrop}
        >
          <div
            style={{
              width: "300px",
              float: "right",
              marginLeft: "10px",
              marginBottom: "20px",
              borderRadius: "15px",
              border: "2px solid black",
              backgroundColor: "#f0f0f0",
              height: "600px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Imagen seleccionada"
                style={{ maxWidth: "100%", maxHeight: "100%" , borderRadius: "15px" , marginTop: "15px", marginBottom:"15px"}}
              />
            ) : (
              <p>Arrastra y suelta una imagen o haz clic para seleccionar una.</p>
            )}
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
          </div>
          <div
            style={{
              width: "200px",
              float: "left",
              marginRight: "20px",
              marginLeft: "50px",
              marginBottom: "20px",
              borderRadius: "15px",
              border: "2px solid black",
              backgroundColor: "#f0f0f0",
              height: "600px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1 style={{ marginLeft: "30px" }}>Título del artículo</h1>
            
            <div
              style={{
                border: "2px solid black",
                backgroundColor: "#f0f0f0",
                marginBottom: "20px",
                height: "250px",
                width: "80%",
                borderRadius:"15px"
              }}
            >
              {/* Contenido del nuevo div */}
            </div>
            <div
              style={{
                border: "2px solid black",
                backgroundColor: "#f0f0f0",
                marginBottom: "20px",
                height: "250px",
                width: "80%",
                borderRadius:"15px"
              }}
            >
              {/* Contenido del nuevo div */}
            </div>
          </div>
        </div>
        <div
          style={{
            border: "2px solid black",
            backgroundColor: "#f0f0f0",
            height: "300px",
            width: "300px",
            marginLeft: "10px",
            borderRadius: "15px",
          }}
        >
          {/* Placeholder de nombre del autor */}
        </div>
        <h3>Escrito por:</h3>
        <div className="article-content">
          <div
            style={{
              border: "2px solid black",
              backgroundColor: "#f0f0f0",
              marginBottom: "20px",
              height: "200px",
              borderRadius: "15px",
              width: "300px",
              alignItems: "end",
            }}
          >
            {/* Placeholder de texto Lorem Ipsum */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articulo;
