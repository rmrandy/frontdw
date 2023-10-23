import React, { useState, useEffect } from "react";

const Articulo = () => {
  const [messages, setMessages] = useState([]); 

  useEffect(() => {
    const jsonFilePath = "./mensajes.json";
    fetch(jsonFilePath)
      .then((response) => response.json())
      .then((data) => {
        console.log("Data", data);
        setMessages(data);
      })
      .catch((error) => {
        console.error("Error al cargar el JSON:", error);
      });
  }, []);

  return (
    <div className="page-container" style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div className="content-container" style={{ flex: 1, display: "flex", flexDirection: "column" , paddingTop: "130px"}}>
        <div className="message-container">
          {messages.map((message, index) => (
            <div
              key={index}
              style={{
                border: "2px solid black",
                backgroundColor: "#f0f0f0",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                margin: "10px", 
                padding: "10px", 
                flexDirection: "row", 
              }}
            >
              <img
                src={message.image} 
                alt="Imagen"
                style={{
                  width: "40px", 
                  height: "auto", 
                  marginRight: "10px", 
                }}
              />
              <p style={{ margin: 0 }}>{message.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articulo;
