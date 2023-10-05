import React from "react";
import fotobb from "../Home/assets/6.jpg";
import "../Articulos/Articulo.css";

const Articulo = () => {
  return (
    <div className="page-container">
      <div className="content-container">
        <h1>¿Por qué Bad Bunny es el mejor Artista de todos los tiempos?</h1>
        <img
          src={fotobb}
          style={{
            maxWidth: "400px",
            maxHeight: "500px",
            marginBottom: "20px",
            borderRadius: "15px",
            display: "block",
            margin: "0 auto", 
          }}
          alt="Bad Bunny"
        />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eget metus nec sapien vestibulum auctor. Nulla facilisi. Fusce
            convallis odio vel arcu fermentum, vel vehicula erat ultricies. Sed
            et ante eget metus tristique posuere. Suspendisse potenti. Cras at
            ipsum non urna sollicitudin tincidunt. In hac habitasse platea
            dictumst. Pellentesque ultricies elit id metus malesuada, non
            fringilla sapien posuere. Integer in nulla nec nisl pharetra
            blandit. Vivamus ut ipsum eget nulla hendrerit efficitur. Fusce eget
            semper ligula, a tristique mi. Quisque ullamcorper, ante id
            tincidunt sagittis, est justo vehicula metus, sed ultricies quam
            libero eu libero. Suspendisse potenti. Donec sed tortor vel erat
            convallis hendrerit. Vivamus ac velit in arcu tincidunt euismod.
            Nunc interdum velit vel lacinia bibendum.
          </p>
        </div>
        <div>
          <h2>Conclusiones</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eget metus nec sapien vestibulum auctor. Nulla facilisi. Fusce
            convallis odio vel arcu fermentum, vel vehicula erat ultricies. Sed
            et ante eget metus tristique posuere. Suspendisse potenti. Cras at
            ipsum non urna sollicitudin tincidunt.
          </p>
        </div>
        <div>
          <h2>Recomendaciones</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eget metus nec sapien vestibulum auctor. Nulla facilisi. Fusce
            convallis odio vel arcu fermentum, vel vehicula erat ultricies. Sed
            et ante eget metus tristique posuere. Suspendisse potenti. Cras at
            ipsum non urna sollicitudin tincidunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Articulo;
