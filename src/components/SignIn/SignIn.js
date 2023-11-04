import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useHistory } from "react-router-dom";
import "./../SignIn/signin.css";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../Home/assets/Black and White Minimalist Modern Clean Technology Logo .jpg";

const theme = createTheme();

export default function SignIn() {
  const history = useHistory();
  const correoGuardado = localStorage.getItem("correoElectronico");
  const contraseñaGuardada = localStorage.getItem("Contraseña");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const correoElectronico = data.get("correoElectronico");
    const usercontraseña = data.get("contraseña");

    if (
      correoElectronico === correoGuardado &&
      usercontraseña === contraseñaGuardada
    ) {
      if (correoGuardado === "Randy") {
        history.push("/home", { from: "SignIn" });
      }
    } else {
      alert(
        "Autenticación fallida. Verifique su nombre de usuario y contraseña."
      );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        style={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "15px",
          marginTop: "130px",
          marginBottom: "30px",
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
            width: "100%",
            padding: "20px",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <Typography variant="h6" color={"black"}>
            Bienvenido de nuevo
          </Typography>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <form onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="correoElectronico"
                label="Correo Electrónico"
                type="email"
                id="correoElectronico"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="contraseña"
                label="Contraseña"
                type="password"
                id="contraseña"
                autoComplete="current-contraseña"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </form>

            <Grid container>
              <Grid item xs>
                <Link href="#">¿Olvidaste tu contraseña?</Link>
              </Grid>
              <Grid item>
                <Link href="/signUp" variant="body2">
                  {"¿Aún no tienes una cuenta? Crea una aquí"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
