import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "./Admin.css"; 

const AdminDashboard = ({ contentData }) => {
  return (
    <div className="admin-dashboard">
      <h1>Contenido del Carrusel</h1>
      <Carousel showStatus={false}>
        {contentData.map((content, index) => (
          <div key={index} className="content-item">
            <img
              src={content.image}
              alt={content.title}
              className="content-image"
            />
            <div className="content-details">
              <Link to={`/articulo/${content.id}`} className="content-link">
                <h2 className="content-title">{content.title}</h2>
              </Link>
              <p className="content-description">{content.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default AdminDashboard;
