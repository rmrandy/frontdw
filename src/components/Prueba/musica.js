import React, { useState, useEffect } from "react";
import jsonArticulo from "./musica.json";
import "./musica.css";
import publi from "./Images/Killers_album-scaled.jpg";

function Musica() {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    localStorage.setItem("ruta", "/articuloTW");
  }, []);

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem("comments"));
    if (storedComments) {
      setComments(storedComments);
    }
  }, []);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleReply = (replyText, commentIndex) => {
    const updatedComments = [...comments];
    updatedComments[commentIndex].replies.push({
      text: replyText,
      likes: 0,
      dislikes: 0,
      replies: [],
    });
    setComments(updatedComments);

    localStorage.setItem("comments", JSON.stringify(updatedComments));
  };

  const handleLike = (commentIndex, isReply = false) => {
    const updatedComments = [...comments];
    if (isReply) {
      updatedComments[commentIndex].likes += 1;
    } else {
      updatedComments[commentIndex].likes += 1;
    }
    setComments(updatedComments);

    localStorage.setItem("comments", JSON.stringify(updatedComments));
  };

  const handleDislike = (commentIndex, isReply = false) => {
    const updatedComments = [...comments];
    if (isReply) {
      updatedComments[commentIndex].dislikes += 1;
    } else {
      updatedComments[commentIndex].dislikes += 1;
    }
    setComments(updatedComments);

    localStorage.setItem("comments", JSON.stringify(updatedComments));
  };

  const handleSubmitComment = () => {
    if (newComment) {
      setComments([
        ...comments,
        { text: newComment, likes: 0, dislikes: 0, replies: [] },
      ]);
      setNewComment("");

      localStorage.setItem(
        "comments",
        JSON.stringify([
          ...comments,
          { text: newComment, likes: 0, dislikes: 0, replies: [] },
        ])
      );
    }
  };

  const Comment = ({ comment, onReply, onLike, onDislike }) => {
    const [replyText, setReplyText] = useState("");
    const [showReplyForm, setShowReplyForm] = useState(false);

    const handleReply = (e) => {
      e.preventDefault();
      onReply(replyText);
      setReplyText("");
      setShowReplyForm(false);
    };

    return (
   
      <div className="comment">
        <p>{comment.text}</p>
        <div className="likes-dislikes">
          <button onClick={() => onLike()}>{comment.likes} Likes</button>
          <button onClick={() => onDislike()}>
            {comment.dislikes} Dislikes
          </button>
        </div>
        {comment.replies.length > 0 && (
          <div className="replies">
            {comment.replies.map((reply, index) => (
              <Comment
                key={index}
                comment={reply}
                onReply={(replyText) => handleReply(replyText, index)}
                onLike={() => handleLike(index)}
                onDislike={() => handleDislike(index)}
              />
            ))}
          </div>
        )}
        <button onClick={() => setShowReplyForm(!showReplyForm)}>
          Responder
        </button>
        {showReplyForm && (
          <div className="reply-form">
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
            />
            <button onClick={handleReply}>Enviar respuesta</button>
          </div>
        )}
      </div>
    );
  };

  const Ad = () => {
    const rutaAleatoria = () => {
      const routes = ["/musica", "/plantilla_noticia", "/articuloTW"];
      const randomIndex = Math.floor(Math.random() * routes.length);
      return routes[randomIndex];
    };

    const handleAdClick = () => {
      const randomRoute = rutaAleatoria();
      window.location.href = randomRoute;
    };

    const adContainerStyle = {
      position: "fixed",
      top: 110,
      right: 95,
      display: "flex",
      flexDirection: "column",
      alignItems: "center", 
      justifyContent: "center", 
      padding: "10px",
      backgroundColor: "white",
      borderRadius: "15px",
      width: "250px",
      
    };
  

    return (
      <div style={adContainerStyle} onClick={handleAdClick}>
      <p>¡También te podría interesar esto!</p>
      <img
        src={publi}
        alt="Anuncio"
        style={{ width: "200px", height: "auto", borderRadius: "15px" }}
      />
    </div>
    );
  };

  return (
    <div>
    <div className="article-container">
      <div className="article-content-container">
        <div className="article-title-container">
          <h1 className="article-title">{jsonArticulo.title}</h1>
        </div>
        <div className="article-image-container">
          <img
            src={jsonArticulo.image}
            alt="The Weeknd"
            className="article-image"
          />
        </div>
        <div className="article-content">
          {jsonArticulo.content.map((item, index) => {
            if (item.type === "text") {
              return <p key={index}>{item.text}</p>;
            } else if (item.type === "image") {
              return (
                <div className="article-inline-image" key={index}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="inline-article-image"
                    style={item.style}
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="article-author-container">
          <p className="article-author">Escrito por: {jsonArticulo.author}</p>
        </div>
        <form>
          <textarea
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Escribe tu comentario aquí"
          />
          <button type="button" onClick={handleSubmitComment}>
            Comentar
          </button>
        </form>
        <div className="article-comments">
          {comments.map((comment, index) => (
            <Comment
              key={index}
              comment={comment}
              onReply={(replyText) => handleReply(replyText, index)}
              onLike={() => handleLike(index)}
              onDislike={() => handleDislike(index)}
            />
          ))}
        </div>
      </div>
      <div className="ad-container">
        <Ad />
      </div>
    </div>
    </div>
  );
}

export default Musica;
