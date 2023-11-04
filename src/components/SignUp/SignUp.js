import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useHistory } from 'react-router-dom';

const theme = createTheme();

export default function SignUp() {
  const history = useHistory();
  const [formData, setFormData] = React.useState({
    Nombre: '',
    Apellido: '',
    CorreoElectronico: '',
    Contraseña: '',
    confirmContraseña: '',
  });
  const [showContraseña, setShowContraseña] = React.useState(false);
  const [showConfirmContraseña, setShowConfirmContraseña] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.Nombre ||
      !formData.Apellido ||
      !formData.CorreoElectronico ||
      !formData.Contraseña ||
      !formData.confirmContraseña
    ) {
      alert('Por favor, llene todos los campos.');
      return;
    }

    const { Nombre, Apellido, CorreoElectronico, Contraseña, confirmContraseña } = formData;

    if (Contraseña !== confirmContraseña) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const contraseñaGuardada = Contraseña;
    const correoGuardado = CorreoElectronico;

    const userData = {
      Nombre,
      Apellido,
      CorreoElectronico,
      Contraseña,
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    setFormData({
      Nombre: '',
      Apellido: '',
      CorreoElectronico: '',
      Contraseña: '',
      confirmContraseña: '',
    });

    // Puedes utilizar las variables contraseñaGuardada y correoGuardado en otra parte de tu código si es necesario.
    console.log('Contraseña guardada:', contraseñaGuardada);
    console.log('Correo guardado:', correoGuardado);

    history.push('/signUp');
  };

  const toggleShowContraseña = () => {
    setShowContraseña(!showContraseña);
  };

  const toggleShowConfirmContraseña = () => {
    setShowConfirmContraseña(!showConfirmContraseña);
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '15px' }}>
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
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="Nombre"
                    required
                    fullWidth
                    id="Nombre"
                    label="Nombre"
                    autoFocus
                    value={formData.Nombre}
                    onChange={(e) =>
                      setFormData({ ...formData, Nombre: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="Apellido"
                    label="Apellido"
                    name="Apellido"
                    autoComplete="family-name"
                    value={formData.Apellido}
                    onChange={(e) =>
                      setFormData({ ...formData, Apellido: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="Correo Electronico"
                    label="Correo Electronico"
                    name="Correo Electronico"
                    autoComplete="Correo Electronico"
                    value={formData.CorreoElectronico}
                    onChange={(e) =>
                      setFormData({ ...formData, CorreoElectronico: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="Contraseña"
                    label="Contraseña"
                    type={showContraseña ? 'text' : 'Contraseña'}
                    id="Contraseña"
                    autoComplete="new-Contraseña"
                    value={formData.Contraseña}
                    onChange={(e) =>
                      setFormData({ ...formData, Contraseña: e.target.value })
                    }
                    InputProps={{
                      endAdornment: (
                        <IconButton
                          onClick={toggleShowContraseña}
                          edge="end"
                        >
                          {showContraseña ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirmContraseña"
                    label="Confirma tu contraseña"
                    type={showConfirmContraseña ? 'text' : 'Contraseña'}
                    id="confirmContraseña"
                    value={formData.confirmContraseña}
                    onChange={(e) =>
                      setFormData({ ...formData, confirmContraseña: e.target.value })
                    }
                    InputProps={{
                      endAdornment: (
                        <IconButton
                          onClick={toggleShowConfirmContraseña}
                          edge="end"
                        >
                          {showConfirmContraseña ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/signIn" variant="body2">
                    ¿Ya tienes una cuenta? Inicia Sesión
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}
