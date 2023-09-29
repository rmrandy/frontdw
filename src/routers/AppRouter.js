import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useParams
} from "react-router-dom"
import { LoginContext } from "../context/contexto"; //para usar variables de usuario y tipo en la app
import SignUp from "../components/SignUp/SignUp";
import { useContext } from "react";

export default function AppRouter(){
    
    const{
        username, setUsername, setTipoUsuario, tipoUsuario
    } = useContext(LoginContext);

    
    
    return(
        <Router>
            {tipoUsuario == 1 ?
            <Switch>
            <Route path = "/signUp" component={SignUp}/>

            </Switch> :

            tipoUsuario == 2?
            <Switch>
            <Route path = "/signUp" component={SignUp}/>

        </Switch> :
        tipoUsuario == 3?
        <Switch>
        <Route path = "/signUp" component={SignUp}/>
        
    </Switch> :
     <Switch>
                <Route path = "/signUp" component={SignUp}/>

            </Switch>
            }
        </Router>
    );
}