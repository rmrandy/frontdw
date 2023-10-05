import React from "react";
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import fotobb from "../Home/assets/5.jpg";
import fotobb2 from "../Home/assets/6.jpg";
import { Button, Grid, TextField, Typography } from "@mui/material";
// import { Link } from 'react-router-dom';
import { Box } from "@mui/system";
import axios from "axios";
import HomeBox from "../HomeBox/HomeBox";
import InfoBox from "./InfoBox/InfoBox";

const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const dataEnviar = {
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    correo: data.get("email"),
    message: data.get("message"),
  };
  console.log(dataEnviar);
  axios({
    method: "post",
    url: "http://localhost/proyectodiseño/signUp.php",
    data: dataEnviar,
  });
};

export default function Home() {
  const [datos, setDatos] = React.useState([[]]);
  const [diseño, setdiseño] = React.useState([[]]);
  const [prods, setProds] = React.useState([[]]);
  const [box1, setBox1] = React.useState([]);
  const [box2, setBox2] = React.useState([]);
  const [box3, setBox3] = React.useState([]);
  const [box4, setBox4] = React.useState([]);
  const [box5, setBox5] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost/proyectodiseño/homepage.php")
      .then((response) => {
        setDatos(response.data);
        console.log(datos);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost/proyectodiseño/cincodiseño.php")
      .then((response) => {
        setdiseño(response.data);
        console.log(datos);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost/proyectodiseño/getProductosNuevos.php")
      .then((response) => {
        setProds(response.data);
        console.log(datos);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost/proyectodiseño/homeBox.php?id=1")
      .then((response) => {
        setBox1(response.data);
        console.log(datos);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost/proyectodiseño/homeBox.php?id=2")
      .then((response) => {
        setBox2(response.data);
        console.log(datos);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost/proyectodiseño/homeBox.php?id=3")
      .then((response) => {
        setBox3(response.data);
        console.log(datos);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost/proyectodiseño/homeBox.php?id=4")
      .then((response) => {
        setBox4(response.data);
        console.log(datos);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost/proyectodiseño/homeBox.php?id=5")
      .then((response) => {
        setBox5(response.data);
        console.log(datos);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div
      style={{
        padding: "1% 5%",
      }}
    >
      <h3>Mejores Articulos</h3>
      <Carousel>
        {prods.map((ro) => (
          <div style={{ display: "flex", alignItems: "flex-start" }}>
          <img src={fotobb} style={{ marginRight: "10px" }} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              maxWidth: "calc(100% - 310px)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" , marginLeft:"10px" , marginRight: "85px"}}>
            <h1 style={{marginRight: "85px"}}>¿Por qué Bad Bunny es el mejor Artista de todos los tiempos?</h1>
              <div style={{ textAlign: "justify", flex: "1" }}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget
                  metus nec sapien vestibulum auctor. Nulla facilisi. Fusce convallis odio
                  vel arcu fermentum, vel vehicula erat ultricies. Sed et ante eget metus
                  tristique posuere. Suspendisse potenti. Cras at ipsum non urna sollicitudin
                  tincidunt. In hac habitasse platea dictumst. Pellentesque ultricies elit id
                  metus malesuada, non fringilla sapien posuere. Integer in nulla nec nisl
                  pharetra blandit. Vivamus ut ipsum eget nulla hendrerit efficitur. Fusce
                  eget semper ligula, a tristique mi. Quisque ullamcorper, ante id tincidunt
                  sagittis, est justo vehicula metus, sed ultricies quam libero eu libero.
                  Suspendisse potenti. Donec sed tortor vel erat convallis hendrerit.
                  Vivamus ac velit in arcu tincidunt euismod. Nunc interdum velit vel
                  lacinia bibendum.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        ))}
        {prods.map((ro) => (
          <div style={{ display: "flex", alignItems: "flex-start" }}>
          <img src={fotobb} style={{ marginRight: "10px" }} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              maxWidth: "calc(100% - 310px)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" , marginLeft:"10px" , marginRight: "85px"}}>
              <h1 style={{marginRight: "85px"}}>¿Por qué Bad Bunny es el mejor Artista de todos los tiempos?</h1>
              <div style={{ textAlign: "justify", flex: "1" }}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget
                  metus nec sapien vestibulum auctor. Nulla facilisi. Fusce convallis odio
                  vel arcu fermentum, vel vehicula erat ultricies. Sed et ante eget metus
                  tristique posuere. Suspendisse potenti. Cras at ipsum non urna sollicitudin
                  tincidunt. In hac habitasse platea dictumst. Pellentesque ultricies elit id
                  metus malesuada, non fringilla sapien posuere. Integer in nulla nec nisl
                  pharetra blandit. Vivamus ut ipsum eget nulla hendrerit efficitur. Fusce
                  eget semper ligula, a tristique mi. Quisque ullamcorper, ante id tincidunt
                  sagittis, est justo vehicula metus, sed ultricies quam libero eu libero.
                  Suspendisse potenti. Donec sed tortor vel erat convallis hendrerit.
                  Vivamus ac velit in arcu tincidunt euismod. Nunc interdum velit vel
                  lacinia bibendum.
                </p>
              </div>
            </div>
          </div>
        </div>
        ))}
        {prods.map((ro) => (
          <div style={{ display: "flex", alignItems: "flex-start" }}>
          <img src={fotobb} style={{ marginRight: "10px" }} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              maxWidth: "calc(100% - 310px)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" , marginLeft:"10px" , marginRight: "85px"}}>
            <h1 style={{marginRight: "85px"}}>¿Por qué Bad Bunny es el mejor Artista de todos los tiempos?</h1>
              <div style={{ textAlign: "justify", flex: "1" }}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget
                  metus nec sapien vestibulum auctor. Nulla facilisi. Fusce convallis odio
                  vel arcu fermentum, vel vehicula erat ultricies. Sed et ante eget metus
                  tristique posuere. Suspendisse potenti. Cras at ipsum non urna sollicitudin
                  tincidunt. In hac habitasse platea dictumst. Pellentesque ultricies elit id
                  metus malesuada, non fringilla sapien posuere. Integer in nulla nec nisl
                  pharetra blandit. Vivamus ut ipsum eget nulla hendrerit efficitur. Fusce
                  eget semper ligula, a tristique mi. Quisque ullamcorper, ante id tincidunt
                  sagittis, est justo vehicula metus, sed ultricies quam libero eu libero.
                  Suspendisse potenti. Donec sed tortor vel erat convallis hendrerit.
                  Vivamus ac velit in arcu tincidunt euismod. Nunc interdum velit vel
                  lacinia bibendum.
                </p>
              </div>
            </div>
          </div>
        </div>
        ))}
      </Carousel>
      <h3>Articulos Más Nuevos</h3>
      <Carousel>
        {prods.map((ro) => (
                 <div style={{ display: "flex", alignItems: "flex-start" }}>
                 <img src={fotobb2} style={{ marginRight: "10px" }} />
                 <div
                   style={{
                     display: "flex",
                     flexDirection: "column",
                     width: "100%",
                     maxWidth: "calc(100% - 310px)",
                   }}
                 >
                   <div style={{ display: "flex", justifyContent: "space-between" , marginLeft:"10px" , marginRight: "85px"}}>
                   <h1 style={{marginRight: "85px"}}>¿Cúal es la mejor canción de Bad Bunny?</h1>
                     <div style={{ textAlign: "justify", flex: "1" }}>
                       <p>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget
                         metus nec sapien vestibulum auctor. Nulla facilisi. Fusce convallis odio
                         vel arcu fermentum, vel vehicula erat ultricies. Sed et ante eget metus
                         tristique posuere. Suspendisse potenti. Cras at ipsum non urna sollicitudin
                         tincidunt. In hac habitasse platea dictumst. Pellentesque ultricies elit id
                         metus malesuada, non fringilla sapien posuere. Integer in nulla nec nisl
                         pharetra blandit. Vivamus ut ipsum eget nulla hendrerit efficitur. Fusce
                         eget semper ligula, a tristique mi. Quisque ullamcorper, ante id tincidunt
                         sagittis, est justo vehicula metus, sed ultricies quam libero eu libero.
                         Suspendisse potenti. Donec sed tortor vel erat convallis hendrerit.
                         Vivamus ac velit in arcu tincidunt euismod. Nunc interdum velit vel
                         lacinia bibendum.
                       </p>
                     </div>
                   </div>
                 </div>
               </div>
        ))}
        {prods.map((ro) => (
          <div style={{ display: "flex", alignItems: "flex-start" }}>
          <img src={fotobb2} style={{ marginRight: "10px" }} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              maxWidth: "calc(100% - 310px)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" , marginLeft:"10px" , marginRight: "85px"}}>
            <h1 style={{marginRight: "85px"}}>¿Cúal es la mejor canción de Bad Bunny?</h1>
              <div style={{ textAlign: "justify", flex: "1" }}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget
                  metus nec sapien vestibulum auctor. Nulla facilisi. Fusce convallis odio
                  vel arcu fermentum, vel vehicula erat ultricies. Sed et ante eget metus
                  tristique posuere. Suspendisse potenti. Cras at ipsum non urna sollicitudin
                  tincidunt. In hac habitasse platea dictumst. Pellentesque ultricies elit id
                  metus malesuada, non fringilla sapien posuere. Integer in nulla nec nisl
                  pharetra blandit. Vivamus ut ipsum eget nulla hendrerit efficitur. Fusce
                  eget semper ligula, a tristique mi. Quisque ullamcorper, ante id tincidunt
                  sagittis, est justo vehicula metus, sed ultricies quam libero eu libero.
                  Suspendisse potenti. Donec sed tortor vel erat convallis hendrerit.
                  Vivamus ac velit in arcu tincidunt euismod. Nunc interdum velit vel
                  lacinia bibendum.
                </p>
              </div>
            </div>
          </div>
        </div>
        ))}
        {prods.map((ro) => (
          <div style={{ display: "flex", alignItems: "flex-start" }}>
          <img src={fotobb2} style={{ marginRight: "10px" }} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              maxWidth: "calc(100% - 310px)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" , marginLeft:"10px" , marginRight: "85px"}}>
            <h1 style={{marginRight: "85px"}}>¿Cúal es la mejor canción de Bad Bunny?</h1>
              <div style={{ textAlign: "justify", flex: "1" }}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget
                  metus nec sapien vestibulum auctor. Nulla facilisi. Fusce convallis odio
                  vel arcu fermentum, vel vehicula erat ultricies. Sed et ante eget metus
                  tristique posuere. Suspendisse potenti. Cras at ipsum non urna sollicitudin
                  tincidunt. In hac habitasse platea dictumst. Pellentesque ultricies elit id
                  metus malesuada, non fringilla sapien posuere. Integer in nulla nec nisl
                  pharetra blandit. Vivamus ut ipsum eget nulla hendrerit efficitur. Fusce
                  eget semper ligula, a tristique mi. Quisque ullamcorper, ante id tincidunt
                  sagittis, est justo vehicula metus, sed ultricies quam libero eu libero.
                  Suspendisse potenti. Donec sed tortor vel erat convallis hendrerit.
                  Vivamus ac velit in arcu tincidunt euismod. Nunc interdum velit vel
                  lacinia bibendum.
                </p>
              </div>
            </div>
          </div>
        </div>
        ))}
      </Carousel>

      <InfoBox title={datos[0].titulo} body={datos[0].contenido} />
      <div
        style={{
          display: "flex",
        }}
      >
        <HomeBox title={box1.titulo} body={box1.cuerpo} img={box1.link} />

        <HomeBox title={box2.titulo} body={box2.cuerpo} img={box2.link} />

        <HomeBox title={box3.titulo} body={box3.cuerpo} img={box3.link} />

        <HomeBox title={box4.titulo} body={box4.cuerpo} img={box4.link} />

        <HomeBox title={box5.titulo} body={box5.cuerpo} img={box5.link} />
      </div>

      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Typography gutterBottom variant="h5" component="div">
          Contactanos !!!
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="Nombre"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Apellido"
              name="lastName"
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="message"
              label="Mensaje"
              type="text"
              id="message"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Enviar Datos
        </Button>
      </Box>
    </div>
  );
}
