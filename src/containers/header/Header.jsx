import React from "react";
import "./header.css";
import Blob1 from '../../assets/Blob1.png'
const Header = () => {
  return (
    <div className="Header_hero section__padding" id="home">
      <div className="Header_hero-content">
          <h3>Hi, my name is</h3>
          <h1>Bartosz Kamiński.</h1>
        <div className="Header_hero-content-atext">
          <h2>I&nbsp;</h2>
          <h2 id="change">Build&nbsp;</h2>
          <h2>things for</h2>
        </div>
           <h2>web business.</h2>
           <p>Do you want to shine on the web?</p>
           <button type="button">Lets Talk</button>

      </div>
      <div className="Header_image">
            <img src={Blob1} alt="Blob1" />
      </div>
    </div>
  );
};

export default Header;
