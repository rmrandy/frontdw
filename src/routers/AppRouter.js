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
import Prueba from "../components/Prueba/prueba"
import Plantillas from "../components/plantillas/plantillas"
import Articulo2 from "../components/Articulo2/Articulo2";
import PerfilAdmin from "../components/Perfiles/Admin"
import Plantilla2 from "../components/plantillas/plantillapremium";
import Perfil from "../components/Perfil/Perfil"
import Entretenimiento from "../components/Prueba/Entretenimiento";
import Musica from "../components/Prueba/musica"


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
          <Route path="/categorías" component={Prueba} /> 
          <Route path="/plantilla_noticia" component={Plantillas} /> 
          <Route path="/articuloTW" component={Articulo2} /> 
          <Route path="/admin" component={PerfilAdmin} /> 
          <Route path="/plantilla_premium" component={Plantilla2} /> 
          <Route path="/perfil" component={Perfil} /> 
          <Route path="/pruebassss" component={Entretenimiento} />
          <Route path= "/musica" component={Musica} />
        </Switch>

      ) : tipoUsuario === 2 ? (
        <Switch>
          <Route path="/signIn" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/registroRevista" component={RegistroRevista} />
          <Route path="/home" component={Home} />
          <Route path="/categorías" component={Prueba} /> 
          <Route path="/articuloTW" component={Articulo2} /> 
          <Route path="/admin" component={PerfilAdmin} /> 
          <Route path="/plantilla_premium" component={Plantilla2} /> 
          <Route path="/perfil" component={Perfil} /> 
          <Route path="/pruebassss" component={Entretenimiento} />
          
        </Switch>
      ) : tipoUsuario === 3 ? (
        <Switch>
          <Route path="/signIn" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/registroRevista" component={RegistroRevista} />
          <Route path="/home" component={Home} />
          <Route path="/categorías" component={Prueba} /> 
          <Route path="/plantilla_noticia" component={Plantillas} /> 
          <Route path="/articuloTW" component={Articulo2} /> 
          <Route path="/admin" component={PerfilAdmin} /> 
          <Route path="/plantilla_premium" component={Plantilla2} /> 
          <Route path="/perfil" component={Perfil} /> 
          <Route path="/pruebassss" component={Entretenimiento} />
          <Route path= "/musica" component={Musica} />
        </Switch>
      ) : (
        <Switch>
          <Redirect from="/" to="/signIn" exact />
          <Route path="/signIn" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/registroRevista" component={RegistroRevista} />
          <Route path="/home" component={Home} />
          <Route path="/categorías" component={Prueba} /> 
          <Route path="/plantilla_noticia" component={Plantillas} /> 
          <Route path="/articuloTW" component={Articulo2} /> 
          <Route path="/admin" component={PerfilAdmin} /> 
          <Route path="/plantilla_premium" component={Plantilla2} /> 
          <Route path="/perfil" component={Perfil} /> 
          <Route path="/pruebassss" component={Entretenimiento} />
          <Route path= "/musica" component={Musica} />
        </Switch>
      )}
    </Router>
  );
}

export default AppRouter;
