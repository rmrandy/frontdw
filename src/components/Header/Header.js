import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { LoginContext } from "../../context/contexto";
import { useContext, useState } from "react"; // Importa useState
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom"; // Agrega la importación de Link

export default function Header() {
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = useState(null);
  const [categoryMenuAnchorEl, setCategoryMenuAnchorEl] = useState(null);

  const handleProfileClick = (event) => {
    setProfileMenuAnchorEl(event.currentTarget);
  };

  const handleCategoryClick = (event) => {
    setCategoryMenuAnchorEl(event.currentTarget);
  };

  const handleCloseProfileMenu = () => {
    setProfileMenuAnchorEl(null);
  };

  const handleCloseCategoryMenu = () => {
    setCategoryMenuAnchorEl(null);
  };

  const { setUsername, setTipoUsuario, tipoUsuario } = useContext(LoginContext);

  const logout = () => {
    setUsername("");
    setTipoUsuario("4");
    localStorage.setItem("id_usuario", "");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#26465F" }}>
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
              Articulos
            </Typography>
            <Button color="inherit" onClick={handleProfileClick}>
              Perfil
            </Button>
            <Menu
              anchorEl={profileMenuAnchorEl}
              open={Boolean(profileMenuAnchorEl)}
              onClose={handleCloseProfileMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={handleCloseProfileMenu}>Premium</MenuItem>
              <MenuItem onClick={handleCloseProfileMenu}>Gratuito</MenuItem>
            </Menu>
            <Button
              color="inherit"
              onClick={handleCategoryClick}
              sx={{
                "&:hover": {
                  color: "inherit",
                  backgroundColor: "transparent",
                },
              }}
            >
              Categorías
            </Button>
            <Menu
              anchorEl={categoryMenuAnchorEl}
              open={Boolean(categoryMenuAnchorEl)}
              onClose={handleCloseCategoryMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem>
                <Link to="/categorías_gratis">Categorías Gratis</Link>
              </MenuItem>
              <MenuItem onClick={handleCloseCategoryMenu}>Categorías Premium</MenuItem>
            </Menu>
            <Button color="inherit" href="/home">
              Home
            </Button>
          </Toolbar>
        )}
      </AppBar>
    </Box>
  );
}

