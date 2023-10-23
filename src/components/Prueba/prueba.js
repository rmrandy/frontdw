import React from "react";
import { Link } from "react-router-dom"; 
import foto from "../Home/assets/4.jpg";
import foto2 from "../Home/assets/0FD9ABA0-E3E6-461C-B06A-DF38B7D0D995.jpg";
import foto3 from "../Home/assets/BB3.jpg";

import "./prueba.css";

const Categorias = () => {  

  return (
    <div className="categorias-container" style={{ height: "100vh" , marginTop: "80px"}} >
      <div className="category">
        <Link to="/plantilla_noticia">
          <div className="category-content">
            <div className="category-image">
              <img
                src={foto2}
                alt="Imagen"
                style={{
                  borderRadius: "20px",
                  width: "350px",
                  height: "500px",
                  objectFit: "cover",
                  display: "block",
                  margin: "0 auto",
                  marginTop: "30px",
                  marginBottom: "60px",
                }}
              />
            </div>
            <div className="category-text">
              <h1>Tu título aquí</h1>
              <p>Aquí tu contenido de un articulo de noticia</p>
            </div>
          </div>
        </Link>
      </div>

      <div className="category">
        <Link to="/plantilla_premium">
        <div className="category-content">
          <div className="category-image">
            <img
              src={foto}
              alt="Imagen"
              style={{
                borderRadius: "15px",
                width: "350px",
                height: "500px",
                objectFit: "cover",
                display: "block",
                margin: "0 auto",
                marginTop: "30px",
                marginBottom: "60px",
              }}
            />
          </div>
          <div className="article-container">
            <div className="category-text">
              <h1>Tu título aquí</h1>
              <p>Aquí tu contenido de un artículo de opinión</p>
            </div>
          </div>
          <div className="category-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-crown"
            >
              <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
            </svg>
          </div>
        </div>
        </Link>
      </div>

      <div className="category">
        <div className="category-content">
          <div className="category-image">
            <img
              src={foto3}
              alt="Imagen"
              style={{
                borderRadius: "15px",
                width: "350px",
                height: "500px",
                objectFit: "cover",
                display: "block",
                margin: "0 auto",
                marginTop: "30px",
                marginBottom: "60px",
              }}
            />
          </div>
          <div className="category-text">
            <h1>Tu título aquí</h1>
            <p>Aquí tu contenido de un articulo de reseñas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categorias;
