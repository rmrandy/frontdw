import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SignIn from "../components/SignIn/SignIn";
import { LoginContext } from "../context/contexto";
import SignUp from "../components/SignUp/SignUp";
import Home from "../components/Home/home";
import RegistroRevista from "../components/RegistroRevista/RegistroRevista";
import Plantilla from "../components/registroProductos/registroProducto";
import Articulos from "../components/Articulos/Articulos";
import Prueba from "../components/Prueba/prueba"
import Plantillas from "../components/plantillas/plantillas"
import Articulo2 from "../components/Articulo2/Articulo2";
import PerfilAdmin from "../components/Perfiles/Admin"




function AppRouter() {
  const {
    tipoUsuario,
  } = useContext(LoginContext);

  return (
    <Router>
      {tipoUsuario === 1 ? (
        <Switch>
          <Redirect from="/" to="/login" exact />
          <Route path="/signIn" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/registroRevista" component={RegistroRevista} />
          <Route path="/home" component={Home} />
          <Route path="/plantilla" component={Plantilla} />
          <Route path="/articuloBB" component={Articulos} />
          <Route path="/categorías" component={Prueba} /> 
          <Route path="/plantilla_noticia" component={Plantillas} /> 
          <Route path="/articuloTW" component={Articulo2} /> 
          <Route path="/admin" component={PerfilAdmin} /> 
        </Switch>

      ) : tipoUsuario === 2 ? (
        <Switch>
          <Route path="/signIn" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/registroRevista" component={RegistroRevista} />
          <Route path="/home" component={Home} />
          <Route path="/plantilla" component={Plantilla} />
          <Route path="/articuloBB" component={Articulos} />
          <Route path="/categorías" component={Prueba} /> 
          <Route path="/articuloTW" component={Articulo2} /> 
          <Route path="/admin" component={PerfilAdmin} /> 
        </Switch>
      ) : tipoUsuario === 3 ? (
        <Switch>
          <Route path="/signIn" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/registroRevista" component={RegistroRevista} />
          <Route path="/home" component={Home} />
          <Route path="/plantilla" component={Plantilla} />
          <Route path="/articuloBB" component={Articulos} />
          <Route path="/categorías" component={Prueba} /> 
          <Route path="/plantilla_noticia" component={Plantillas} /> 
          <Route path="/articuloTW" component={Articulo2} /> 
          <Route path="/admin" component={PerfilAdmin} /> 
        </Switch>
      ) : (
        <Switch>
          <Redirect from="/" to="/signIn" exact />
          <Route path="/signIn" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/registroRevista" component={RegistroRevista} />
          <Route path="/home" component={Home} />
          <Route path="/plantilla" component={Plantilla} />
          <Route path="/articuloBB" component={Articulos} />
          <Route path="/categorías" component={Prueba} /> 
          <Route path="/plantilla_noticia" component={Plantillas} /> 
          <Route path="/articuloTW" component={Articulo2} /> 
          <Route path="/admin" component={PerfilAdmin} /> 
        </Switch>
      )}
    </Router>
  );
}

export default AppRouter;
