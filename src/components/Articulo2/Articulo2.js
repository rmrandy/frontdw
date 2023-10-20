import React from "react";
import "./Articulo2.css";
import foto from "../Home/assets/7.jpg";
import theWK from "../Home/assets/THEWK.jpg"
import theWK2 from "../Home/assets/THEWK2.jpg"


function Articulo2() {
 
  return (
    <div className="article-container">
      <div className="article-content-container">
        <div className="article-title-container">
          <h1 className="article-title">Título del Artículo</h1>
        </div>
        <div className="article-image-container">
          <img src={foto} alt="The Weeknd" className="article-image" />
        </div>
        <div className="article-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non
            lectus vel ligula luctus iaculis. Aliquam erat volutpat. Nullam
            tincidunt vehicula purus, id euismod odio vestibulum et. Sed sit
            amet urna purus. Sed ac malesuada nisl, et malesuada lectus. Sed id
            dui euismod, eleifend est eu, fermentum orci. Proin vel mi lectus.
            Fusce non nisl quis arcu suscipit tincidunt.
          </p>
          <div className="article-inline-image">
            <img src={theWK2 } alt="The Weeknd" className="inline-article-image"  style={{maxHeight: "600px"}}/>
          </div>
          <p>
            Nullam id eleifend metus. Etiam vel arcu odio. Vivamus et lectus sit
            amet odio bibendum mattis. Nam suscipit felis id nunc blandit, a
            interdum lectus efficitur. Sed eu libero nec eros convallis viverra.
            Fusce a odio velit. Praesent id ligula ac augue posuere tincidunt
            non eu est.
          </p>
          <p>
            Sed vel erat aliquet, fringilla justo eu, malesuada ligula. Nulla
            facilisi. Aenean sit amet justo id ex luctus eleifend. Curabitur a
            libero eu orci suscipit venenatis. Sed tristique nisl eu nulla
            ultricies, vel convallis erat mattis. Nunc ut est sit amet neque
            auctor ultrices. Integer et diam mi. Vestibulum id venenatis lorem.
          </p>
          <p>
            Donec blandit vitae quam a accumsan. Fusce quis iaculis lorem.
            Nullam sit amet dui ut ex tincidunt tincidunt. Sed nec vehicula
            lorem. Sed euismod dui eu ipsum consequat, non laoreet tortor
            malesuada. Fusce vehicula ligula eu tellus ullamcorper, nec
            facilisis ligula finibus.
          </p>
          <div className="article-inline-image">
            <img src={theWK} alt="The Weeknd" className="inline-article-image"  style={{maxHeight: "600px"}}/>
          </div>
          <p>
            Nam suscipit, massa et aliquam tincidunt, leo turpis tincidunt
            velit, non vestibulum metus sapien ut purus. Vivamus in risus
            lacinia, hendrerit justo vel, congue massa. Etiam congue, nulla ac
            mattis ullamcorper, elit neque tincidunt tortor, at mattis justo
            elit id ante.
          </p>
          <p>
            Praesent id dolor id justo iaculis varius eget vitae libero. Sed sit
            amet purus vel odio pellentesque tristique ut vitae elit. Vivamus
            non auctor dolor. Nunc id viverra velit. Phasellus eget dictum urna.
          </p>
        </div>
        <div className="article-author-container">
          <p className="article-author">Escrito por: Nombre del Autor</p>
        </div>
      </div>
    </div>
  );
}

export default Articulo2;
