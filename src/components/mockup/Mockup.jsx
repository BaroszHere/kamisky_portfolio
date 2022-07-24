import React from "react";
import "./mockup.css";

const Mockup = ({ imgUrl, title, txt }) => {
  return (
    <div className="mockup__article">
      <div className="mockup__article_img">
        <img src={imgUrl} alt="whatido image" />
      </div>
      <div className="mockup__article_content">
        
          <h3 >{title}</h3>
          <p>{txt}</p>

        
      </div>
    </div>
  );
};

export default Mockup;
