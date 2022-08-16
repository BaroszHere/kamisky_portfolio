import React from "react";
import "./article.css";
import { useSpring, animated } from 'react-spring'


const Article = ({ imgUrl, title, txt }) => {
  const props = useSpring({ 
    from: { opacity: 0, x:-100 },
    to: { opacity: 1, x:0},
  
    config:{ duration: 400 },
    delay:200,

  })

  return (
    <animated.div style={props}>
    <div className="whatido__container-article" >
      <div className="whatido__container-article_img">
        <img src={imgUrl} alt="whatido image" />
      </div>
      <div className="whatido__container-article_content">
        
          <h3 >{title}</h3>
          <p>{txt}</p>
          <button className="button ">Dowiedz się więcej</button>
        
      </div>
    </div>
    </animated.div>

  );
};

export default Article;
