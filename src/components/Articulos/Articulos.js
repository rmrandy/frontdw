import React from "react";
import fotobb from "../Home/assets/6.jpg";
import otroBB from "../Home/assets/BB3.jpg"
import "../Articulos/Articulo.css";

const Articulo = () => {
  return (
    <div className="page-container">
      <div className="content-container">
        <div className="image-title-container">
          <div className="image-title">
            <img
              src={fotobb}
              style={{
                maxWidth: "50%",
                float: "left",
                marginRight: "20px",
                marginBottom: "20px",
                borderRadius: "15px",
              }}
              alt="Bad Bunny"
            />
            <h1>¿Por qué Bad Bunny es el mejor Artista de todos los tiempos?</h1>
          </div>
          <img
            src={otroBB}
            style={{
              maxWidth: "50%",
              maxHeight: "50%",
              float: "right",
              marginLeft: "20px",
              marginBottom: "20px",
              borderRadius: "15px",
            }}
            alt="Bad Bunny"
          />
        </div>
        <div className="article-content">
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

          <h2>¿Cómo ha influido en la moda y en la musica?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eget metus nec sapien vestibulum auctor. Nulla facilisi. Fusce
            convallis odio vel arcu fermentum, vel vehicula erat ultricies. Sed
            et ante eget metus tristique posuere. Suspendisse potenti. Cras at
            ipsum non urna sollicitudin tincidunt.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eget metus nec sapien vestibulum auctor. Nulla facilisi. Fusce
            convallis odio vel arcu fermentum, vel vehicula erat ultricies. Sed
            et ante eget metus tristique posuere. Suspendisse potenti. Cras at
            ipsum non urna sollicitudin tincidunt.
          </p>
          <br />
          <h2>¿Qué sigue despues?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eget metus nec sapien vestibulum auctor. Nulla facilisi. Fusce
            convallis odio vel arcu fermentum, vel vehicula erat ultricies. Sed
            et ante eget metus tristique posuere. Suspendisse potenti. Cras at
            ipsum non urna sollicitudin tincidunt.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eget metus nec sapien vestibulum auctor. Nulla facilisi. Fusce
            convallis odio vel arcu fermentum, vel vehicula erat ultricies. Sed
            et ante eget metus tristique posuere. Suspendisse potenti. Cras at
            ipsum non urna sollicitudin tincidunt.
          </p>
          <br/>
          <br/>
          <br/>
          
          <br/>
          <h3>Escrito por: </h3>
          <p>
            Randy Rivera
          </p>
        </div>
      </div>
    </div>
  );
};

export default Articulo;
