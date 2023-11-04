import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { LoginContext } from "../../context/contexto";
import { useContext, useState, useEffect } from "react";

import { Link } from 'react-router-dom';

import foto from "../Home/assets/EE3349FA-E81E-49A2-BA8B-3585D2243FA2_4_5005_c.jpeg";


export default function Header() {
  
  const [scrolling, setScrolling] = useState(false);

  const { setUsername, setTipoUsuario, tipoUsuario } = useContext(LoginContext);

  const logout = () => {
    setUsername("");
    setTipoUsuario("4", "1", "2", "3");
    localStorage.setItem("id_usuario", "");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0 && !scrolling) {
        setScrolling(true);
      } else if (window.scrollY === 0 && scrolling) {
        setScrolling(false);
      }
    });
  }, [scrolling]);

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar 
        position="fixed"
        sx={{
          background: scrolling
            ? "linear-gradient(to bottom, #dde4ec, #7c8dbc)"
            : "linear-gradient(to bottom, #dde4ec, #7c8dbc)",
          transition: "background 6s",
        }}
      >
        {tipoUsuario === 1 ? (
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Revista Productos
            </Typography>
            <Button color="inherit" href="/home" onClick={logout}>
              Logout
            </Button>
          </Toolbar>
        ) : tipoUsuario === 2 ? (
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Articulos
            </Typography>
            <Button color="inherit" href="/">
              Home
            </Button>
            <Button color="inherit" href="/home" onClick={logout}>
              Logout
            </Button>
          </Toolbar>
        ) : tipoUsuario === 3 ? (
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Articulos
            </Typography>
            <Button color="inherit" href="/">
              Home
            </Button>
            <Button color="inherit" href="/home" onClick={logout}>
              Logout
            </Button>
          </Toolbar>
        ) : (
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/home" style={{ textDecoration: "none" }}>
                <img
                  src={foto}
                  alt="Logo"
                  style={{
                    width: "200px",
                    height: "80px",
                    marginTop: "5px",
                    borderRadius: "15px",
                  }}
                />
              </Link>
            </Typography>
            <Button color="inherit" href="/perfil">
              Perfil
            </Button>
            <Button color="inherit" href="/categorías">
              Categorías
            </Button>
            <Button color="inherit" href="/home">
              Inicio
            </Button>
            <Button color="inherit" href="/plantilla_premium">
              Crear Categoría 
            </Button>
            <Button color="inherit" href="/signIn">
              Cerrar Sesión 
            </Button>
          </Toolbar>
        )}
      </AppBar>
    </Box>
  );
}
