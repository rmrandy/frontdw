import React, { useEffect, useState } from "react";
import "./plantilla1.css";
import data from "./articulo.json";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useHistory } from "react-router-dom";
import publicidad from "../Home/assets/THEWK.jpg";

const Revista = () => {
  function rutaAleatoria() {
    const routes = ["/plantilla_noticia", "/articuloTW" , "/musica"];
    const randomIndex = Math.floor(Math.random() * routes.length);
    return routes[randomIndex];
  }

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

  const history = useHistory();

  function Anuncio() {
    const handleAnuncioClick = () => {
      const randomRoute = rutaAleatoria();
      history.push(randomRoute);
    };

    return (
      <div
        className="anuncio"
        style={{
          position: "fixed",
          right: 0,
          top: 100,
          border: "4px solid white",
          borderRadius: "15px",
          transition: "box-shadow 0.3s",
          cursor: "pointer",
          display: "flex",
          flexFlow: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "10px",
          backgroundColor: "aliceblue",
        }}
        onClick={handleAnuncioClick}
      >
        <p>¿The Weeknd es sucesor de Michael Jackson?</p>
        <img
          src={publicidad}
          alt="Anuncio"
          style={{ width: "200px", height: "auto", borderRadius: "15px" }}
        />
      </div>
    );
  }

  return (
    <div className="revista">
      <h1
        className="magazine-title"
        style={{ fontSize: "35px", fontFamily: "Times New Roman" }}
      >
        {data.title}
      </h1>
      {data.issues.map((issue, index) => (
        <div key={index} className="issue">
          <h2 style={{ textAlign: "center" }}>{issue.title}</h2>
          <Carousel showArrows={true} showThumbs={false}>
            {issue.images.map((imgURL, imgIndex) => (
              <img
                src={imgURL}
                alt={`img ${imgIndex}`}
                className="article-image"
              />
            ))}
          </Carousel>
          <div className="articles">
            {issue.articles.map((article, articleIndex) => (
              <div key={articleIndex} className="article">
                <h3 style={{ textAlign: "center" }}>{article.title}</h3>
                <p className="author" style={{ textAlign: "center" }}>
                  Autor: {article.author}
                </p>
                <p className="article-content" style={{ textAlign: "center" }}>
                  {article.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
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
      <div className="crear-articulo-botón" style={{ textAlign: "center" }}>
        <button onClick={nuevoArticulo} className="botón">
          Crear Nuevo Artículo
        </button>
      </div>
      <Anuncio />
    </div>
  );
};

const nuevoArticulo = () => {};
export default Revista;
