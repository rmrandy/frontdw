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

  const handleSubmit = (event) => {
    event.preventDefault();

    const username = "Randy";
    const password = "123";

    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const userPassword = data.get("password");

    if (email === username && userPassword === password) {
      if (username === "Randy") {
        history.push("/home");
      } else {
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
          marginTop: "40px",
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
          <Typography variant="h6" color={"black"}>Bienvenido de nuevo</Typography>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
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
                <Link href="#">Forgot password?</Link>
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
