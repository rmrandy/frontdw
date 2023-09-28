import React, { useState } from 'react';

function Navbar() {
  const [activeItem, setActiveItem] = useState(null);
  const [showSubMenu, setShowSubMenu] = useState(false);


  const handleClick = (index) => {
    setActiveItem(index);
    
    if (index === 0) {
      setShowSubMenu(!showSubMenu);
    }
  };

  return (
    <nav className="navbar">
      <ul>
        <li
          className={`navbar-item ${activeItem === 0 ? 'active' : ''}`}
          onClick={() => handleClick(0)}
        >
          <a href="#inicio">Articulos Publicados</a>
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
      {showSubMenu && (
        <div className="submenu">
          <ul>
            <li className="navbar-item">
              <a href="#destacados">Destacados</a>
            </li>
            <li className="navbar-item">
              <a href="#categorias">Categorías</a>
            </li>
            <li className="navbar-item">
              <a href="#subcategorias">Subcategorías</a>
            </li>
            <li className="navbar-item">
              <a href="#header">Header</a>
            </li>
            <li className="navbar-item">
              <a href="#footer">Footer</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
