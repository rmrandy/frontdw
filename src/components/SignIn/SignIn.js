import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { LoginContext } from '../../context/contexto';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './../SignIn/signin.css';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function SignIn() {
  const {
    setUsername,
    setTipoUsuario,
  } = useContext(LoginContext);

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Usuario registrado como "Randy" y contraseña "123"
    const username = 'Randy';
    const password = '123';
  
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const userPassword = data.get('password');
  
    // Comprobar si el usuario y la contraseña coinciden
    if (email === username && userPassword === password) {
      // Verificar que el usuario sea Randy
      if (username === 'Randy') {
        // Redirigir a la ruta `/home`
        history.push('/home');
      } else {
        // El usuario no es Randy
        alert('El usuario no está autorizado para acceder a esta ruta.');
      }
    } else {
      // Manejar la lógica de autenticación fallida
      alert('Autenticación fallida. Verifique su nombre de usuario y contraseña.');
    }
  };
  

  
  
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
