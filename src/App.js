import React from "react";
import AppRouter from "./routers/AppRouter";
import { LoginContext } from "./context/contexto";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  const getUsername = () => {
    const localUsername = localStorage.getItem("usuario");
    return localUsername ? JSON.parse(localUsername) : null;
  };

  const getTipoUsuario = () => {
    const localTipoUsuario = localStorage.getItem("tipoUsuario");
    return localTipoUsuario ? JSON.parse(localTipoUsuario) : 4;
  };

  const [username, setUsername] = useState(getUsername);
  const [tipoUsuario, setTipoUsuario] = useState(getTipoUsuario);

  useEffect(() => {
    localStorage.setItem("usuario", JSON.stringify(username));
    localStorage.setItem("tipoUsuario", JSON.stringify(tipoUsuario));
  });

  return (
    <Router>
      <div className="App">
        <LoginContext.Provider
          value={{ username, setUsername, setTipoUsuario, tipoUsuario }}
        >
          <AppRouter />
          <Header />
        </LoginContext.Provider>
      </div>
    </Router>
  );
}

export default App;
