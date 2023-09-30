import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { LoginContext } from '../../context/contexto';
import {useContext, useState, useEffect} from 'react';

export default function Header() {
  
  const{
    username, setUsername, setTipoUsuario, tipoUsuario
} = useContext(LoginContext);

  const logout = () => {
    setUsername('');
    setTipoUsuario('4');
    localStorage.setItem('id_usuario','');

  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      {tipoUsuario == 1 ?
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Revista Productos
          </Typography>
          <Button color="inherit" href="/home" onClick = {logout}>Logout</Button>

          
        </Toolbar> :

        tipoUsuario == 2 ? 
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tiendas
          </Typography>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/home" onClick = {logout}>Logout</Button>
          
        </Toolbar> :

        tipoUsuario == 3 ?
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tiendas
          </Typography>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/home" onClick = {logout}>Logout</Button>
        </Toolbar> :

        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tiendas
          </Typography>
          <Button color="inherit" href="/signUp">SignUp</Button>
          <Button color="inherit" href="/signIn">SingIn</Button>
          <Button color="inherit" href="/home">Home</Button>
        </Toolbar>
      }
      </AppBar>
    </Box>
  );
}