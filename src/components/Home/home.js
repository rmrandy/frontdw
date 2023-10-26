import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "./comments.css"

export default function Home() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    const jsonDataPath = "/data.json";
    const jsonDataPath2 = "/data2.json";

    fetch(jsonDataPath)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error al cargar el archivo JSON:", error);
      });

    fetch(jsonDataPath2)
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

  return (
    <div
      style={{
        padding: "1% 5%",
        marginTop: "100px",
      }}
    >
      <h1 style={{ color: "black", marginBottom: "30px" }}>
        Mejores Articulos
      </h1>
      <Carousel>
        {sortByClicks(data).map((item) => (
          <div key={item.titulo}>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <img
                src={item.fotobb}
                style={{ marginRight: "10px", borderRadius: "15px" }}
                alt="Bad Bunny"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  maxWidth: "calc(100% - 310px)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginLeft: "10px",
                    marginRight: "85px",
                  }}
                >
                  <Link
                    to={`/articuloTW`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <h1
                      style={{
                        marginRight: "85px",
                        color: "black",
                        marginTop: "150px",
                      }}
                    >
                      {item.titulo}
                    </h1>
                  </Link>
                  <div
                    style={{
                      textAlign: "justify",
                      flex: "1",
                      paddingLeft: "85px",
                    }}
                  >
                    <p
                      style={{
                        marginRight: "85px",
                        color: "black",
                        marginTop: "100px",
                      }}
                    >
                      {item.descripcion}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      <h1 style={{ color: "black", marginTop: "30px", marginBottom: "30px" }}>
        Nuevos Articulos
      </h1>
      <Carousel>
        {data2.map((item) => (
          <div key={item.titulo}>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <img
                src={process.env.PUBLIC_URL + "/" + item.fotobb2}
                style={{ marginRight: "10px", borderRadius: "15px" }}
                alt="Imagen"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  maxWidth: "calc(100% - 310px)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginLeft: "10px",
                    marginRight: "85px",
                  }}
                >
                  <Link
                    to={`/articuloBB`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <h1
                      style={{
                        marginRight: "85px",
                        color: "black",
                        marginTop: "150px",
                      }}
                    >
                      {item.titulo}
                    </h1>
                  </Link>
                  <div
                    style={{
                      textAlign: "justify",
                      flex: "1",
                      paddingLeft: "85px",
                    }}
                  >
                    <p
                      style={{
                        marginRight: "85px",
                        color: "black",
                        marginTop: "100px",
                      }}
                    >
                      {item.descripcion}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <div
        style={{
          marginTop: "50px",
          borderTop: "2px solid #ddd",
          paddingTop: "20px",
        }}
      >
        <h2 style={{ color: "black", marginBottom: "20px" }}>Contáctanos</h2>
        <form onSubmit={handleContactSubmit}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              required
            />
          </div>
          <button type="submit" style={{ marginTop: "20px" }}>
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
}
