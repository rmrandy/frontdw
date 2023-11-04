import React, { useState, useEffect } from "react";
import "./Perfil.css";

function Profile() {
  const usuario = localStorage.getItem("username");
  const contraseña = localStorage.getItem("password");
  const [name, setName] = useState(usuario);
  const [password, setPassword] = useState(contraseña);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    setPasswordMatch(newPassword === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    setPasswordMatch(password === newConfirmPassword);
  };

  const toggleCommentVisibility = (index) => {
    const updatedComments = [...comments];
    updatedComments[index].hidden = !updatedComments[index].hidden;
    setComments(updatedComments);
  };

  return (
    <div>
      <div className="profile-container">
        <h2>Perfil de Usuario</h2>
        <div style={{ marginRight: "15px" }}>
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div style={{ marginRight: "15px" }}>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div style={{ marginRight: "15px" }}>
          <label>Confirmar Contraseña:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className={passwordMatch ? "match" : "no-match"}
          />
        </div>
        {passwordMatch ? (
          <p style={{ color: "green" }}>Las contraseñas coinciden</p>
        ) : (
          <p style={{ color: "red" }}>Las contraseñas no coinciden</p>
        )}
        <button onClick={() => alert("Perfil actualizado")}>
          Guardar Cambios
        </button>
      </div>
      <div className="comentarios-container" >
        <h2>Comentarios Reportados:</h2>
        <ul>
          {comments.map(
            (comment, index) =>
              !comment.hidden &&
              comment.dislikes > 5 && (
                <li key={index}>
                  <p>{comment.text}</p>
                  <p>Dislikes: {comment.dislikes}</p>
                  <button onClick={() => toggleCommentVisibility(index)}>
                    {comment.hidden ? "Mostrar" : "Ocultar"}
                  </button>
                </li>
              )
          )}
        </ul>
      </div>
      <div classname= "revisión-container">
        <h1> donde va esto???</h1>
      </div>
    </div>
  );
}

export default Profile;
