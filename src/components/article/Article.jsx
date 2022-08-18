import React, { useEffect } from "react";
import "./article.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Article = ({ imgUrl, title, txt, animation }) => {

useEffect(()=>{
  AOS.init({duration:1000});
}, []);

  return (

    <div className="whatido__container-article" data-aos={animation} >
      <div className="whatido__container-article_img">
        <img src={imgUrl} alt="whatido image" />
      </div>
      <div className="whatido__container-article_content">
        
          <h3 >{title}</h3>
          <p>{txt}</p>
          <a href="#contactme">
          <button className="button ">Dowiedz się więcej</button>
          </a>
      </div>
    </div>


  );
};

export default Article;
