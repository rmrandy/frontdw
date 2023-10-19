import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    const jsonDataPath = "/data.json";
    const jsonDataPath2 = "/data2.json";

    fetch(jsonDataPath)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error al cargar el archivo JSON:", error);
      });

    fetch(jsonDataPath2)
      .then((response) => response.json())
      .then((data) => {
        setData2(data);
      })
      .catch((error) => {
        console.error("Error al cargar el segundo archivo JSON:", error);
      });
  }, []);

  // Función para ordenar los artículos por la cantidad de clics
  const sortByClicks = (items) => {
    return items.slice().sort((a, b) => b.clicks - a.clicks);
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
        {sortByClicks(data).map((item) => (
          <div key={item.titulo}>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <img
                src={ item.fotobb}
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
                    to={`/articuloTW`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <h1
                      style={{
                        marginRight: "85px",
                        color: "white",
                        marginTop: "150px",
                      }}
                    >
                      {item.titulo}
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
                      {item.descripcion}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      <h1 style={{ color: "white", marginTop: "30px", marginBottom: "30px" }}>
        Nuevos Articulos
      </h1>
      <Carousel>
        {data2.map((item) => (
          <div key={item.titulo}>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <img
                src={process.env.PUBLIC_URL + "/" + item.fotobb2}
                style={{ marginRight: "10px", borderRadius: "15px" }}
                alt="Imagen"
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
                    to={`/articuloBB`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <h1
                      style={{
                        marginRight: "85px",
                        color: "white",
                        marginTop: "150px",
                      }}
                    >
                      {item.titulo}
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
                      {item.descripcion}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

//         {/* /* </div>
//         {prods.map((ro) => (
//           <div style={{ display: "flex", alignItems: "flex-start" }}>
//             <img
//               src={fotobb}
//               style={{ marginRight: "10px", borderRadius: "15px" }}
//               alt="Bad Bunny"
//             />
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 width: "100%",
//                 maxWidth: "calc(100% - 310px)",
//               }}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   marginLeft: "10px",
//                   marginRight: "85px",
//                 }}
//               >
//                 <Link
//                   to="/articuloBB"
//                   style={{ textDecoration: "none", color: "inherit" }}
//                 >
//                   <h1
//                     style={{
//                       marginRight: "85px",
//                       color: "white",
//                       marginTop: "150px",
//                     }}
//                   >
//                     ¿Por qué Bad Bunny es el mejor Artista de todos los tiempos?
//                   </h1>
//                 </Link>
//                 <div
//                   style={{
//                     textAlign: "justify",
//                     flex: "1",
//                     paddingLeft: "85px",
//                   }}
//                 >
//                   <p
//                     style={{
//                       marginRight: "85px",
//                       color: "white",
//                       marginTop: "100px",
//                     }}
//                   >
//                     A lo largo de su carrera, Bad Bunny ha lanzado una serie de
//                     álbumes exitosos, incluyendo "X 100pre," "YHLQMDLG" y "El
//                     Último Tour Del Mundo." Sus colaboraciones con otros
//                     artistas de renombre, como J Balvin, Cardi B y Drake, han
//                     dominado las listas de éxitos y han demostrado su
//                     versatilidad como intérprete. A lo largo de su carrera, Bad
//                     Bunny ha lanzado una serie de álbumes exitosos, incluyendo
//                     "X 100pre," "YHLQMDLG" y "El Último Tour Del Mundo." Sus
//                     colaboraciones con otros artistas de renombre, como J
//                     Balvin, Cardi B y Drake, han dominado las listas de éxitos y
//                     han demostrado su versatilidad como intérprete.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//         {prods.map((ro) => (
//           <div style={{ display: "flex", alignItems: "flex-start" }}>
//             <img
//               src={fotobb}
//               style={{ marginRight: "10px", borderRadius: "15px" }}
//               alt="Bad Bunny"
//             />
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 width: "100%",
//                 maxWidth: "calc(100% - 310px)",
//               }}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   marginLeft: "10px",
//                   marginRight: "85px",
//                 }}
//               >
//                 <Link
//                   to="/articuloBB"
//                   style={{ textDecoration: "none", color: "inherit" }}
//                 >
//                   <h1
//                     style={{
//                       marginRight: "85px",
//                       color: "white",
//                       marginTop: "150px",
//                     }}
//                   >
//                     ¿Por qué Bad Bunny es el mejor Artista de todos los tiempos?
//                   </h1>
//                 </Link>
//                 <div
//                   style={{
//                     textAlign: "justify",
//                     flex: "1",
//                     paddingLeft: "85px",
//                   }}
//                 >
//                   <p
//                     style={{
//                       marginRight: "85px",
//                       color: "white",
//                       marginTop: "100px",
//                     }}
//                   >
//                     Bad Bunny también ha incursionado en el mundo de la
//                     actuación, haciendo apariciones en películas y programas de
//                     televisión. Su carisma y presencia en pantalla lo han
//                     convertido en un nombre familiar en la industria del
//                     entretenimiento.
//                     <br />
//                     Bad Bunny también ha incursionado en el mundo de la
//                     actuación, haciendo apariciones en películas y programas de
//                     televisión. Su carisma y presencia en pantalla lo han
//                     convertido en un nombre familiar en la industria del
//                     entretenimiento.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Carousel>
//       <h1 style={{ color: "white", marginTop: "50px", marginBottom: "50px" }}>
//         Articulos Más Nuevos
//       </h1>
//       <Carousel>
//         {prods.map((ro) => (
//           <div style={{ display: "flex", alignItems: "flex-start" }}>
//             <img
//               src={fotobb2}
//               style={{ marginRight: "10px", borderRadius: "15px" }}
//               alt="Bad Bunny"
//             />
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 width: "100%",
//                 maxWidth: "calc(100% - 310px)",
//               }}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   marginLeft: "10px",
//                   marginRight: "85px",
//                 }}
//               >
//                 <Link
//                   to="/articuloTW"
//                   style={{ textDecoration: "none", color: "inherit" }}
//                 >
//                   <h1
//                     className="h1-custom-style"
//                     style={{
//                       marginRight: "85px",
//                       color: "white",
//                       marginTop: "150px",
//                     }}
//                   >
//                     ¿Cuál es la mejor canción de Bad Bunny?
//                   </h1>
//                 </Link>
//                 <div
//                   style={{
//                     textAlign: "justify",
//                     flex: "1",
//                     paddingLeft: "85px",
//                   }}
//                 >
//                   <p
//                     style={{
//                       marginRight: "85px",
//                       color: "white",
//                       marginTop: "100px",
//                     }}
//                   >
//                     Bad Bunny, nacido el 10 de marzo de 1994 en Vega Baja,
//                     Puerto Rico, es un artista que ha logrado trascender
//                     fronteras geográficas y culturales. Su música, que a menudo
//                     fusiona ritmos latinos con influencias de hip-hop y música
//                     electrónica, ha llevado el reguetón y el trap a un nivel
//                     completamente nuevo. Bad Bunny, nacido el 10 de marzo de
//                     1994 en Vega Baja, Puerto Rico, es un artista que ha logrado
//                     trascender fronteras geográficas y culturales. Su música,
//                     que a menudo fusiona ritmos latinos con influencias de
//                     hip-hop y música electrónica, ha llevado el reguetón y el
//                     trap a un nivel completamente nuevo.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//         {prods.map((ro) => (
//           <div style={{ display: "flex", alignItems: "flex-start" }}>
//             <img
//               src={fotobb2}
//               style={{ marginRight: "10px", borderRadius: "15px" }}
//               alt="Bad Bunny"
//             />
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 width: "100%",
//                 maxWidth: "calc(100% - 310px)",
//               }}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   marginLeft: "10px",
//                   marginRight: "85px",
//                 }}
//               >
//                 <Link
//                   to="/articuloTW"
//                   style={{ textDecoration: "none", color: "inherit" }}
//                 >
//                   <h1
//                     className="h1-custom-style"
//                     style={{
//                       marginRight: "85px",
//                       color: "white",
//                       marginTop: "150px",
//                     }}
//                   >
//                     ¿Cuál es la mejor canción de Bad Bunny?
//                   </h1>
//                 </Link>
//                 <div
//                   style={{
//                     textAlign: "justify",
//                     flex: "1",
//                     paddingLeft: "85px",
//                   }}
//                 >
//                   <p
//                     style={{
//                       marginRight: "85px",
//                       color: "white",
//                       marginTop: "100px",
//                     }}
//                   >
//                     A lo largo de su carrera, Bad Bunny ha lanzado una serie de
//                     álbumes exitosos, incluyendo "X 100pre," "YHLQMDLG" y "El
//                     Último Tour Del Mundo." Sus colaboraciones con otros
//                     artistas de renombre, como J Balvin, Cardi B y Drake, han
//                     dominado las listas de éxitos y han demostrado su
//                     versatilidad como intérprete. A lo largo de su carrera, Bad
//                     Bunny ha lanzado una serie de álbumes exitosos, incluyendo
//                     "X 100pre," "YHLQMDLG" y "El Último Tour Del Mundo." Sus
//                     colaboraciones con otros artistas de renombre, como J
//                     Balvin, Cardi B y Drake, han dominado las listas de éxitos y
//                     han demostrado su versatilidad como intérprete.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//         {prods.map((ro) => (
//           <div style={{ display: "flex", alignItems: "flex-start" }}>
//             <img
//               src={fotobb2}
//               style={{ marginRight: "10px", borderRadius: "15px" }}
//               alt="Bad Bunny"
//             />
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 width: "100%",
//                 maxWidth: "calc(100% - 310px)",
//               }}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   marginLeft: "10px",
//                   marginRight: "85px",
//                 }}
//               >
//                 <Link
//                   to="/articuloTW"
//                   style={{ textDecoration: "none", color: "inherit" }}
//                 >
//                   <h1
//                     className="h1-custom-style"
//                     style={{
//                       marginRight: "85px",
//                       color: "white",
//                       marginTop: "150px",
//                     }}
//                   >
//                     ¿Cuál es la mejor canción de Bad Bunny?
//                   </h1>
//                 </Link>
//                 <div
//                   style={{
//                     textAlign: "justify",
//                     flex: "1",
//                     paddingLeft: "85px",
//                   }}
//                 >
//                   <p
//                     style={{
//                       marginRight: "85px",
//                       color: "white",
//                       marginTop: "100px",
//                     }}
//                   >
//                     Bad Bunny también ha incursionado en el mundo de la
//                     actuación, haciendo apariciones en películas y programas de
//                     televisión. Su carisma y presencia en pantalla lo han
//                     convertido en un nombre familiar en la industria del
//                     entretenimiento.
//                     <br />
//                     Bad Bunny también ha incursionado en el mundo de la
//                     actuación, haciendo apariciones en películas y programas de
//                     televisión. Su carisma y presencia en pantalla lo han
//                     convertido en un nombre familiar en la industria del
//                     entretenimiento.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Carousel>

//       <InfoBox title={datos[0].titulo} body={datos[0].contenido} />
//       <div
//         style={{
//           display: "flex",
//         }}
//       >
//         <HomeBox title={box1.titulo} body={box1.cuerpo} img={box1.link} />

//         <HomeBox title={box2.titulo} body={box2.cuerpo} img={box2.link} />

//         <HomeBox title={box3.titulo} body={box3.cuerpo} img={box3.link} />

//         <HomeBox title={box4.titulo} body={box4.cuerpo} img={box4.link} />

//         <HomeBox title={box5.titulo} body={box5.cuerpo} img={box5.link} />
//       </div>

//       <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//         <Typography gutterBottom variant="h5" component="div">
//           Contactanos !!!
//         </Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               autoComplete="given-name"
//               name="firstName"
//               required
//               fullWidth
//               id="firstName"
//               label="Nombre"
//               autoFocus
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               required
//               fullWidth
//               id="lastName"
//               label="Apellido"
//               name="lastName"
//               autoComplete="family-name"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               required
//               fullWidth
//               id="email"
//               label="Email"
//               name="email"
//               autoComplete="email"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               required
//               fullWidth
//               name="message"
//               label="Mensaje"
//               type="text"
//               id="message"
//             />
//           </Grid>
//         </Grid>
//         <Button
//           type="submit"
//           fullWidth
//           variant="contained"
//           sx={{ mt: 3, mb: 2 }}
//         >
//           Enviar Datos
//         </Button>
//       </Box>
//     </div>
//   );
// } */}
