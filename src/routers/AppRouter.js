import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { LoginContext } from "../context/contexto";
import SignUp from "../components/SignUp/SignUp";
import SignIn from "../components/SignIn/SignIn";
import Home from "../components/Home/home";
import RegistroRevista from "../components/RegistroRevista/RegistroRevista";
import Plantilla from "../components/registroProductos/registroProducto";
import Articulos from "../components/Articulos/Articulos";
// import Categorias from "../components/Categorías/Categorias";
// import Categorias from "../components/Categorias/Categorias";
import Prueba from "../components/Prueba/prueba"
import Plantillas from "../components/plantillas/plantillas"





function AppRouter() {
  const {
    tipoUsuario,
  } = useContext(LoginContext);

  return (
    <Router>
      {tipoUsuario === 1 ? (
        <Switch>
          <Route path="/signUp" component={SignUp} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/registroRevista" component={RegistroRevista} />
          <Route path="/home" component={Home} />
          <Route path="/plantilla" component={Plantilla} />
          <Route path="/articuloBB" component={Articulos} />
          {/* <Route path="/categoria" component={Categorias} /> */}
          <Route path="/categorías_gratis" component={Prueba} /> 
          <Route path="/plantilla_noticia" component={Plantillas} /> 
        </Switch>
      ) : tipoUsuario === 2 ? (
        <Switch>
          <Route path="/signUp" component={SignUp} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/registroRevista" component={RegistroRevista} />
          <Route path="/home" component={Home} />
          <Route path="/plantilla" component={Plantilla} />
          <Route path="/articuloBB" component={Articulos} />
          <Route path="/categorías_gratis" component={Prueba} /> 
          <Route path="/plantilla_noticia" component={Plantillas} /> 
        </Switch>
      ) : tipoUsuario === 3 ? (
        <Switch>
          <Route path="/signUp" component={SignUp} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/registroRevista" component={RegistroRevista} />
          <Route path="/home" component={Home} />
          <Route path="/plantilla" component={Plantilla} />
          <Route path="/articuloBB" component={Articulos} />
          <Route path="/categorías" component={Prueba} /> 
          <Route path="/plantilla_noticia" component={Plantillas} /> 
        </Switch>
      ) : (
        <Switch>
          <Route path="/signUp" component={SignUp} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/registroRevista" component={RegistroRevista} />
          <Route path="/home" component={Home} />
          <Route path="/plantilla" component={Plantilla} />
          <Route path="/articuloBB" component={Articulos} />
          <Route path="/categorías" component={Prueba} /> 
          <Route path="/plantilla_noticia" component={Plantillas} /> 
        </Switch>
      )}
    </Router>
  );
}

export default AppRouter;
