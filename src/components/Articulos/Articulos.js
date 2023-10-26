import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Articulo() {
  const [articulo, setArticulo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    
    const jsonDataPath = "./articulo1.json";

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
      <h1>{articulo.titulo}</h1>
      <p>{articulo.descripcion}</p>
      <p>{articulo.contenido}</p>
      <p>Autor: {articulo.autor}</p>
      <p>Fecha de publicación: {articulo.fechaPublicacion}</p>
      <p>
        Etiquetas: {articulo.etiquetas ? articulo.etiquetas.join(", ") : "Sin etiquetas"}
      </p>

      <img
        src={process.env.PUBLIC_URL + "/" + articulo.fotobb}
        style={{ marginRight: "10px", borderRadius: "15px", maxHeight: "20%" }}
        alt="Imagen del artículo"
      />
    </div>
  );
}
