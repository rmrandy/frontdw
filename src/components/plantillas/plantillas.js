import React, { useState } from "react";
import "./plantilla.css"; 

export default function Articulo() {
  const [categorias, setCategorias] = useState([]);
  const [nombreCategoria, setNombreCategoria] = useState("");
  const [subcategoria, setSubcategoria] = useState("");
  const [descripcionGeneral, setDescripcionGeneral] = useState("");
  const [imagen, setImagen] = useState("");

  const handleNuevaCategoria = () => {
    const nuevaCategoria = {
      nombreCategoria,
      subcategoria,
      descripcionGeneral,
      imagen,
    }; 
    setCategorias([...categorias, nuevaCategoria]);

    
    setNombreCategoria("");
    setSubcategoria("");
    setDescripcionGeneral("");
    setImagen("");
  };

  return (
    <div className="categorias-container">
      <h2 className="categorias-heading">Crear Nueva Categoría</h2>
      <div className="form-container">
        <input
          type="text"
          placeholder="Nombre de Categoría"
          value={nombreCategoria}
          onChange={(e) => setNombreCategoria(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subcategoría"
          value={subcategoria}
          onChange={(e) => setSubcategoria(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripción General"
          value={descripcionGeneral}
          onChange={(e) => setDescripcionGeneral(e.target.value)}
        />
        <input
          type="text"
          placeholder="URL de la Imagen"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
        />
        <button onClick={handleNuevaCategoria} className="add-button">
          Agregar Categoría
        </button>
      </div>

      <h2 className="categorias-heading">Categorías Creadas</h2>
      <div className="categorias-list">
        {categorias.map((categoria, index) => (
          <div key={index} className="categoria-item">
            <h3>{categoria.nombreCategoria}</h3>
            <p>Subcategoría: {categoria.subcategoria}</p>
            <p>Descripción General: {categoria.descripcionGeneral}</p>
            <img
              src={categoria.imagen}
              alt={categoria.nombreCategoria}
              className="categoria-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}



// import React, { useState, useEffect } from "react";

// const Articulo = () => {
//   const [messages, setMessages] = useState([]); 

//   useEffect(() => {
//     const jsonFilePath = "./mensajes.json";
//     fetch(jsonFilePath)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Data", data);
//         setMessages(data);
//       })
//       .catch((error) => {
//         console.error("Error al cargar el JSON:", error);
//       });
//   }, []);

//   return (
//     <div className="page-container" style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
//       <div className="content-container" style={{ flex: 1, display: "flex", flexDirection: "column" , paddingTop: "130px"}}>
//         <div className="message-container">
//           {messages.map((message, index) => (
//             <div
//               key={index}
//               style={{
//                 border: "2px solid black",
//                 backgroundColor: "#f0f0f0",
//                 borderRadius: "15px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 position: "relative",
//                 margin: "10px", 
//                 padding: "10px", 
//                 flexDirection: "row", 
//               }}
//             >
//               <img
//                 src={message.image} 
//                 alt="Imagen"
//                 style={{
//                   width: "40px", 
//                   height: "auto", 
//                   marginRight: "10px", 
//                 }}
//               />
//               <p style={{ margin: 0 }}>{message.message}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Articulo;
