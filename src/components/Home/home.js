import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import fotobb from "../Home/assets/5.jpg";
import fotobb2 from "../Home/assets/6.jpg";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import HomeBox from "../HomeBox/HomeBox";
import InfoBox from "./InfoBox/InfoBox";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Home/toast.css";

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

  React.useEffect(() => {
    
    const storedData = localStorage.getItem("carouselData");
    if (storedData) {
      
      const parsedData = JSON.parse(storedData);
      setDatos(parsedData);
    } else {
      
      const defaultData = [
        
        {
          title: "Título 1",
          image: "imagen1.jpg",
        },
        {
          title: "Título 2",
          image: "imagen2.jpg",
        },
      ];
      setDatos(defaultData);

      
      localStorage.setItem("carouselData", JSON.stringify(defaultData));
    }

    
  });

  const [datos, setDatos] = React.useState([[]]);
  const [, setdiseño] = React.useState([[]]);
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

  const mostrarNotificacionCarga = () => {
    toast.info("Tu artículo está cargando", {
      position: "",
      autoClose: 4000,
    });
  };

  return (
    <div
      style={{
        padding: "1% 5%",
        marginTop: "100px",
      }}
    >
      <h1 style={{ color: "white", marginBottom: "30px" }}>
        Mejores Articulos
      </h1>
      <Carousel>
        {prods.map((ro) => (
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <img
              src={fotobb}
              style={{ marginRight: "10px", borderRadius: "15px" }}
              alt="Bad Bunny"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                maxWidth: "calc(100% - 310px)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "10px",
                  marginRight: "85px",
                }}
              >
                <Link
                  to="/articuloBB"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <h1
                    style={{
                      marginRight: "85px",
                      color: "white",
                      marginTop: "150px",
                    }}
                  >
                    ¿Cúal es la mejor canción de bad Bunny?
                  </h1>
                </Link>
                <div
                  style={{
                    textAlign: "justify",
                    flex: "1",
                    paddingLeft: "85px",
                  }}
                >
                  <p
                    style={{
                      marginRight: "85px",
                      color: "white",
                      marginTop: "100px",
                    }}
                  >
                    Bad Bunny, nacido el 10 de marzo de 1994 en Vega Baja,
                    Puerto Rico, es un artista que ha logrado trascender
                    fronteras geográficas y culturales. Su música, que a menudo
                    fusiona ritmos latinos con influencias de hip-hop y música
                    electrónica, ha llevado el reguetón y el trap a un nivel
                    completamente nuevo. Bad Bunny, nacido el 10 de marzo de
                    1994 en Vega Baja, Puerto Rico, es un artista que ha logrado
                    trascender fronteras geográficas y culturales. Su música,
                    que a menudo fusiona ritmos latinos con influencias de
                    hip-hop y música electrónica, ha llevado el reguetón y el
                    trap a un nivel completamente nuevo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        {prods.map((ro) => (
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <img
              src={fotobb}
              style={{ marginRight: "10px", borderRadius: "15px" }}
              alt="Bad Bunny"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                maxWidth: "calc(100% - 310px)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "10px",
                  marginRight: "85px",
                }}
              >
                <Link
                  to="/articuloBB"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <h1
                    style={{
                      marginRight: "85px",
                      color: "white",
                      marginTop: "150px",
                    }}
                  >
                    ¿Por qué Bad Bunny es el mejor Artista de todos los tiempos?
                  </h1>
                </Link>
                <div
                  style={{
                    textAlign: "justify",
                    flex: "1",
                    paddingLeft: "85px",
                  }}
                >
                  <p
                    style={{
                      marginRight: "85px",
                      color: "white",
                      marginTop: "100px",
                    }}
                  >
                    A lo largo de su carrera, Bad Bunny ha lanzado una serie de
                    álbumes exitosos, incluyendo "X 100pre," "YHLQMDLG" y "El
                    Último Tour Del Mundo." Sus colaboraciones con otros
                    artistas de renombre, como J Balvin, Cardi B y Drake, han
                    dominado las listas de éxitos y han demostrado su
                    versatilidad como intérprete. A lo largo de su carrera, Bad
                    Bunny ha lanzado una serie de álbumes exitosos, incluyendo
                    "X 100pre," "YHLQMDLG" y "El Último Tour Del Mundo." Sus
                    colaboraciones con otros artistas de renombre, como J
                    Balvin, Cardi B y Drake, han dominado las listas de éxitos y
                    han demostrado su versatilidad como intérprete.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        {prods.map((ro) => (
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <img
              src={fotobb}
              style={{ marginRight: "10px", borderRadius: "15px" }}
              alt="Bad Bunny"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                maxWidth: "calc(100% - 310px)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "10px",
                  marginRight: "85px",
                }}
              >
                <Link
                  to="/articuloBB"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <h1
                    style={{
                      marginRight: "85px",
                      color: "white",
                      marginTop: "150px",
                    }}
                  >
                    ¿Por qué Bad Bunny es el mejor Artista de todos los tiempos?
                  </h1>
                </Link>
                <div
                  style={{
                    textAlign: "justify",
                    flex: "1",
                    paddingLeft: "85px",
                  }}
                >
                  <p
                    style={{
                      marginRight: "85px",
                      color: "white",
                      marginTop: "100px",
                    }}
                  >
                    Bad Bunny también ha incursionado en el mundo de la
                    actuación, haciendo apariciones en películas y programas de
                    televisión. Su carisma y presencia en pantalla lo han
                    convertido en un nombre familiar en la industria del
                    entretenimiento.
                    <br />
                    Bad Bunny también ha incursionado en el mundo de la
                    actuación, haciendo apariciones en películas y programas de
                    televisión. Su carisma y presencia en pantalla lo han
                    convertido en un nombre familiar en la industria del
                    entretenimiento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <h1 style={{ color: "white", marginTop: "50px", marginBottom: "50px" }}>
        Articulos Más Nuevos
      </h1>
      <Carousel>
        {prods.map((ro) => (
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <img
              src={fotobb2}
              style={{ marginRight: "10px", borderRadius: "15px" }}
              alt="Bad Bunny"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                maxWidth: "calc(100% - 310px)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "10px",
                  marginRight: "85px",
                }}
              >
                <Link
                  to="/articuloTW"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <h1
                    className="h1-custom-style"
                    style={{
                      marginRight: "85px",
                      color: "white",
                      marginTop: "150px",
                    }}
                  >
                    ¿Cuál es la mejor canción de Bad Bunny?
                  </h1>
                </Link>
                <div
                  style={{
                    textAlign: "justify",
                    flex: "1",
                    paddingLeft: "85px",
                  }}
                >
                  <p
                    style={{
                      marginRight: "85px",
                      color: "white",
                      marginTop: "100px",
                    }}
                  >
                    Bad Bunny, nacido el 10 de marzo de 1994 en Vega Baja,
                    Puerto Rico, es un artista que ha logrado trascender
                    fronteras geográficas y culturales. Su música, que a menudo
                    fusiona ritmos latinos con influencias de hip-hop y música
                    electrónica, ha llevado el reguetón y el trap a un nivel
                    completamente nuevo. Bad Bunny, nacido el 10 de marzo de
                    1994 en Vega Baja, Puerto Rico, es un artista que ha logrado
                    trascender fronteras geográficas y culturales. Su música,
                    que a menudo fusiona ritmos latinos con influencias de
                    hip-hop y música electrónica, ha llevado el reguetón y el
                    trap a un nivel completamente nuevo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        {prods.map((ro) => (
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <img
              src={fotobb2}
              style={{ marginRight: "10px", borderRadius: "15px" }}
              alt="Bad Bunny"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                maxWidth: "calc(100% - 310px)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "10px",
                  marginRight: "85px",
                }}
              >
                <Link
                  to="/articuloTW"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <h1
                    className="h1-custom-style"
                    style={{
                      marginRight: "85px",
                      color: "white",
                      marginTop: "150px",
                    }}
                  >
                    ¿Cuál es la mejor canción de Bad Bunny?
                  </h1>
                </Link>
                <div
                  style={{
                    textAlign: "justify",
                    flex: "1",
                    paddingLeft: "85px",
                  }}
                >
                  <p
                    style={{
                      marginRight: "85px",
                      color: "white",
                      marginTop: "100px",
                    }}
                  >
                    A lo largo de su carrera, Bad Bunny ha lanzado una serie de
                    álbumes exitosos, incluyendo "X 100pre," "YHLQMDLG" y "El
                    Último Tour Del Mundo." Sus colaboraciones con otros
                    artistas de renombre, como J Balvin, Cardi B y Drake, han
                    dominado las listas de éxitos y han demostrado su
                    versatilidad como intérprete. A lo largo de su carrera, Bad
                    Bunny ha lanzado una serie de álbumes exitosos, incluyendo
                    "X 100pre," "YHLQMDLG" y "El Último Tour Del Mundo." Sus
                    colaboraciones con otros artistas de renombre, como J
                    Balvin, Cardi B y Drake, han dominado las listas de éxitos y
                    han demostrado su versatilidad como intérprete.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        {prods.map((ro) => (
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <img
              src={fotobb2}
              style={{ marginRight: "10px", borderRadius: "15px" }}
              alt="Bad Bunny"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                maxWidth: "calc(100% - 310px)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "10px",
                  marginRight: "85px",
                }}
              >
                <Link
                  to="/articuloTW"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <h1
                    className="h1-custom-style"
                    style={{
                      marginRight: "85px",
                      color: "white",
                      marginTop: "150px",
                    }}
                  >
                    ¿Cuál es la mejor canción de Bad Bunny?
                  </h1>
                </Link>
                <div
                  style={{
                    textAlign: "justify",
                    flex: "1",
                    paddingLeft: "85px",
                  }}
                >
                  <p
                    style={{
                      marginRight: "85px",
                      color: "white",
                      marginTop: "100px",
                    }}
                  >
                    Bad Bunny también ha incursionado en el mundo de la
                    actuación, haciendo apariciones en películas y programas de
                    televisión. Su carisma y presencia en pantalla lo han
                    convertido en un nombre familiar en la industria del
                    entretenimiento.
                    <br />
                    Bad Bunny también ha incursionado en el mundo de la
                    actuación, haciendo apariciones en películas y programas de
                    televisión. Su carisma y presencia en pantalla lo han
                    convertido en un nombre familiar en la industria del
                    entretenimiento.
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
