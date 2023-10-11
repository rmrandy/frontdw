import React from "react";
import "./Articulo2.css";
import foto from "../Home/assets/7.jpg";

function Articulo2() {
  return (
    <div className="article-container">
      <div className="article-content-container">
        <h1 className="article-title">Título del Artículo</h1>
        <div className="article-author-container">
          <p className="article-author">Escrito por: Nombre del Autor</p>
        </div>
        <div className="article-image-container">
          <img src={foto} alt="The Weeknd" className="article-image" />
        </div>
        <div className="article-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non
            lectus vel ligula luctus iaculis. Aliquam erat volutpat. Nullam
            tincidunt vehicula purus, id euismod odio vestibulum et. Sed sit amet
            urna purus. Sed ac malesuada nisl, et malesuada lectus. Sed id dui
            euismod, eleifend est eu, fermentum orci. Proin vel mi lectus. Fusce
            non nisl quis arcu suscipit tincidunt.
          </p>
          <p>
            Nullam id eleifend metus. Etiam vel arcu odio. Vivamus et lectus sit
            amet odio bibendum mattis. Nam suscipit felis id nunc blandit, a
            interdum lectus efficitur. Sed eu libero nec eros convallis viverra.
            Fusce a odio velit. Praesent id ligula ac augue posuere tincidunt non
            eu est.
          </p>
          <p>
            Vestibulum sollicitudin odio ut justo tincidunt, euismod pellentesque
            turpis elementum. Donec mattis nec erat eu vestibulum. Integer in arcu
            vel quam euismod dignissim. Nam nec dolor a nisl vulputate mattis.
            Etiam vulputate enim vel interdum facilisis.
          </p>
          <p>
            Curabitur facilisis justo nec odio malesuada, id blandit arcu
            malesuada. In eu justo sed leo cursus aliquam. Sed eget nibh eget
            velit iaculis tristique. Fusce a congue felis, a semper erat. Nam
            pharetra, nisl id dapibus dictum, lectus velit consectetur dolor, at
            auctor turpis erat vel lorem.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Articulo2;
