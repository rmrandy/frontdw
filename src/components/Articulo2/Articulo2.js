import React, { useState } from "react";
import "./Articulo2.css";
import articleData from "../Articulo2/articulo2.json"; 


function Comment({ text, replies, onReply }) {
  
}

function Articulo2() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmitComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, { text: newComment, replies: [] }]);
      setNewComment("");
    }
  };

  const handleReply = (replyText, commentIndex) => {
    if (replyText.trim() !== "") {
      const updatedComments = [...comments];
      updatedComments[commentIndex].replies.push({ text: replyText, replies: [] });
      setComments(updatedComments);
    }
  };

  return (
    <div className="article-container">
      <div className="article-content-container">
        <div className="article-title-container">
          <h1 className="article-title">{articleData.title}</h1>
        </div>
        <div className="article-image-container">
          <img src={articleData.image} alt="The Weeknd" className="article-image" />
        </div>
        <div className="article-content">
          {articleData.content.map((item, index) => {
            if (item.type === "text") {
              return <p key={index}>{item.text}</p>;
            } else if (item.type === "image") {
              return (
                <div className="article-inline-image" key={index}>
                  <img src={item.src} alt={item.alt} className="inline-article-image" style={item.style} />
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="article-author-container">
          <p className="article-author">Escrito por: {articleData.author}</p>
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
            <Comment key={index} text={comment.text} replies={comment.replies} onReply={(replyText) => handleReply(replyText, index)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Articulo2;
