import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Articulo() {
  const [articulo, setArticulo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const jsonDataPath = "/articulo1.json";
    fetch(jsonDataPath)
      .then((response) => response.json())
      .then((data) => {
       
        const selectedArticulo = data.find((item) => item.id === id);
        setArticulo(selectedArticulo);
      })
      .catch((error) => {
        console.error("Error al cargar el archivo JSON:", error);
      });
  }, [id]);

  if (!articulo) {
    return <div>Cargando...</div>;
  }

  return (
    <div style={{ padding: "1% 5%", marginTop: "100px" }}>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <img
          src={process.env.PUBLIC_URL + "/" + articulo.fotobb}
          style={{ marginRight: "10px", borderRadius: "15px" , maxHeight:"20%"}}
          alt="Imagen del artículo"
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
              to={"/articulo/${id}"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h1
                style={{
                  marginRight: "85px",
                  color: "white",
                  marginTop: "150px",
                }}
              >
                {articulo.titulo}
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
                  color: "white",
                  marginTop: "100px",
                }}
              >
                {articulo.descripcion}
              </p>
            </div>
          </div>
        </div>
      </div>

      <p style={{ color: "white" }}>{articulo.contenido}</p>
      <p style={{ color: "white" }}>Autor: {articulo.autor}</p>
      <p style={{ color: "white" }}>Fecha de publicación: {articulo.fechaPublicacion}</p>
      <p style={{ color: "white" }}>
        Etiquetas: {articulo.etiquetas ? articulo.etiquetas.join(", ") : "Sin etiquetas"}
      </p>
    </div>
  );
}
