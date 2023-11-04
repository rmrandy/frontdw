import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    const infodata = "/data.json";
    const infodata2 = "/data2.json";

    fetch(infodata)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error al cargar el archivo JSON:", error);
      });

    fetch(infodata2)
      .then((response) => response.json())
      .then((data) => {
        setData2(data);
      })
      .catch((error) => {
        console.error("Error al cargar el segundo archivo JSON:", error);
      });
  }, []);

  const sortByClicks = (items) => {
    return items.slice().sort((a, b) => b.clicks - a.clicks);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();

    const contactData = {
      nombre,
      email,
      mensaje,
    };

    localStorage.setItem("contactData", JSON.stringify(contactData));

    setNombre("");
    setEmail("");
    setMensaje("");
  };

  const carouselStyle = {
    float: "left",
    marginRight: "20px",
    marginTop: "100px",
  };

  return (
    <div className="home" style={{ width: "1400px", marginTop: "150px" , height: "100vh" }}>
      <h1 style={{ color: "black", marginBottom: "20px", textAlign: "center" }}>
        Mejores Articulos
      </h1>
      <div style={{ clear: "both" }}>
        <Carousel style={carouselStyle}>
          {sortByClicks(data).map((item) => (
            <div key={item.titulo}>
              <div style={{ display: "flex", marginBottom: "20px" }}>
                <img
                  src={item.fotobb}
                  style={{
                    marginRight: "140px",
                    borderRadius: "15px",
                    maxWidth: "180px",
                    marginLeft: "220px",
                  }}
                  alt="Artículo"
                />
                <div style={{ flex: 1 }}>
                  <Link
                    to={`/articuloTW`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <h2 style={{ color: "black" }}>{item.titulo}</h2>
                  </Link>
                  <p style={{ color: "black" }}>{item.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <h1 style={{ color: "black", marginTop: "20px", marginBottom: "20px" , textAlign:"center"}}>
        Nuevos Articulos
      </h1>
      <div style={{ clear: "both" }}>
        <Carousel style={carouselStyle}>
          {data2.map((item) => (
            <div key={item.titulo}>
              <div style={{ display: "flex", marginBottom: "20px" }}>
                <img
                  src={process.env.PUBLIC_URL + "/" + item.fotobb2}
                  style={{
                    marginRight: "140px",
                    borderRadius: "15px",
                    maxWidth: "180px",
                    marginLeft: "220px",
                  }}
                  alt="Imagen"
                />
                <div style={{ flex: 1 }}>
                  <Link
                    to={`/articuloBB`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <h2 style={{ color: "black" }}>{item.titulo}</h2>
                  </Link>
                  <p style={{ color: "black" }}>{item.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div
        style={{
          marginTop: "50px",
          borderTop: "2px solid #ddd",
          paddingTop: "20px",
        }}
      >
        <h2 style={{ color: "black", marginBottom: "20px" }}>Contáctanos</h2>
        <form onSubmit={handleContactSubmit}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "20px",
            }}
          >
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "20px",
            }}
          >
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "20px",
            }}
          >
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              required
            />
          </div>
          <button type="submit">Enviar Mensaje</button>
        </form>
      </div>
    </div>
  );
}
