import React, { useState } from 'react';

function Navbar() {
  const [activeItem, setActiveItem] = useState(null);

  // Función para manejar el clic en un elemento
  const handleClick = (index) => {
    setActiveItem(index);
  };

  return (
    <nav className="navbar">
      <ul>
        <li
          className={`navbar-item ${activeItem === 0 ? 'active' : ''}`}
          onClick={() => handleClick(0)}
        >
          <a href="#inicio">Inicio</a>
        </li>
        <li
          className={`navbar-item ${activeItem === 1 ? 'active' : ''}`}
          onClick={() => handleClick(1)}
        >
          <a href="#contacto">Contacto</a>
        </li>
        <li
          className={`navbar-item ${activeItem === 2 ? 'active' : ''}`}
          onClick={() => handleClick(2)}
        >
          <a href="#perfiles">Perfiles</a>
        </li>
        <li
          className={`navbar-item ${activeItem === 3 ? 'active' : ''}`}
          onClick={() => handleClick(3)}
        >
          <a href="#blogs">Blogs</a>
        </li>
        <li
          className={`navbar-item ${activeItem === 4 ? 'active' : ''}`}
          onClick={() => handleClick(4)}
        >
          <a href="#nuevo-blog">Nuevo Blog</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

