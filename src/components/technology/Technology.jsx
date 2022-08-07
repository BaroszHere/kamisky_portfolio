import React from "react";
import "./technology.css";

const Technology = ({ TechImg, TechTxt }) => {
  return (
    <div className="slide">
        <img src={TechImg} alt="Technology Image" />
        <div className="slide__overlay">
            <div className="slide__overlay__txt">
                {TechTxt}
            </div>
        </div>
    </div>
  );
};

export default Technology;
