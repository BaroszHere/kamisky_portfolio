import React from "react";
import "./article.css";

const Article = ({ imgUrl, title, txt }) => {
  return (
    <div className="whatido__container-article">
      <div className="whatido__container-article_img">
        <img src={imgUrl} alt="whatido image" />
      </div>
      <div className="whatido__container-article_content">
        
          <h3 >{title}</h3>
          <p>{txt}</p>
          <button className="button ">Dowiedz się więcej</button>
        
      </div>
    </div>
  );
};

export default Article;
