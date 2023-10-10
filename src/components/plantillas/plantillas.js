import React, { useState } from "react";

const Articulo = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  
  const handleImageUpload = (e) => {
    const imageFile = e.target.files[0];
    if (imageFile) {
      const imageUrl = URL.createObjectURL(imageFile);
      setSelectedImage(imageUrl);
    }
  };

  
  const handleDrop = (e) => {
    e.preventDefault();
    const imageFile = e.dataTransfer.files[0];
    if (imageFile) {
      const imageUrl = URL.createObjectURL(imageFile);
      setSelectedImage(imageUrl);
    }
  };

  
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
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  borderRadius: "15px",
                  marginTop: "15px",
                  marginBottom: "15px",
                }}
              />
            ) : (
              <p>
                Arrastra y suelta una imagen.
              </p>
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
              width: "300px",
              float: "left",
              marginRight: "20px",
              marginLeft: "70px",
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
                borderRadius: "15px",
              }}
            ></div>
            <div
              style={{
                border: "2px solid black",
                backgroundColor: "#f0f0f0",
                marginBottom: "20px",
                height: "250px",
                width: "80%",
                borderRadius: "15px",
              }}
            ></div>
          </div>
        </div>
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
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                borderRadius: "15px",
                marginTop: "15px",
                marginBottom: "15px",
              }}
            />
          ) : (
            <p>Arrastra y suelta una imagen.</p>
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
            width: "300px",
            float: "left",
            marginRight: "20px",
            marginLeft: "10px",
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
              width: "200px",
              borderRadius: "15px",
            }}
          ></div>
          <div
            style={{
              border: "2px solid black",
              backgroundColor: "#f0f0f0",
              marginBottom: "20px",
              height: "250px",
              width: "200px",
              borderRadius: "15px",
            }}
          ></div>
        </div>
        <h3>Escrito por:</h3>
        <div className="article-content">
          <div
            style={{
              border: "2px solid black",
              backgroundColor: "#f0f0f0",
              marginBottom: "20px",
              height: "40px",
              borderRadius: "15px",
              width: "100%",
              alignItems: "end",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Articulo;
