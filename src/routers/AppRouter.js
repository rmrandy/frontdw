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
import Prueba from "../components/Prueba/prueba"
import Plantillas from "../components/plantillas/plantillas"
import Articulo2 from "../components/Articulo2/Articulo2";




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
          <Route path="/categorías" component={Prueba} /> 
          <Route path="/plantilla_noticia" component={Plantillas} /> 
          <Route path="/articuloTW" component={Articulo2} /> 
        </Switch>

      ) : tipoUsuario === 2 ? (
        <Switch>
          <Route path="/signUp" component={SignUp} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/registroRevista" component={RegistroRevista} />
          <Route path="/home" component={Home} />
          <Route path="/plantilla" component={Plantilla} />
          <Route path="/articuloBB" component={Articulos} />
          <Route path="/categorías" component={Prueba} /> 
          <Route path="/articuloTW" component={Articulo2} /> 
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
          <Route path="/articuloTW" component={Articulo2} /> 
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
          <Route path="/articuloTW" component={Articulo2} /> 
        </Switch>
      )}
    </Router>
  );
}

export default AppRouter;
