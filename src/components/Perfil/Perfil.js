import React, { useState } from "react";
import "./Perfil.css";

function Profile() {
  const [name, setName] = useState("John Doe");
  const [password, setPassword] = useState("********");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

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

  return (
    <div className="profile-container">
      <h2>Perfil de Usuario</h2>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
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
      <button onClick={() => alert("Perfil actualizado")}>Guardar Cambios</button>
    </div>
  );
}

export default Profile;
