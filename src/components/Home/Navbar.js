import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button, Link, AppBar, Toolbar } from '@mui/material';

export function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/profile">
          <Button color="inherit">Perfil</Button>
        </Link>
        <Link to="/categories">
          <Button color="inherit">Categorías</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
