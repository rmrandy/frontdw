import React, { useState } from "react";
import "./plantilla.css";

export default function Plantilla2() {
  
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
  
    
    const categoriasGuardadas = JSON.parse(localStorage.getItem('categorias')) || [];
    categoriasGuardadas.push(nuevaCategoria);
    localStorage.setItem('categorias', JSON.stringify(categoriasGuardadas));
  
    
    localStorage.setItem('nombreCategoriaUsuario', nombreCategoria);
  
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
