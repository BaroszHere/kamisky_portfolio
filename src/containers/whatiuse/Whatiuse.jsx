import React, { useEffect } from "react";
import "./whatiuse.css";
import {Technology} from '../../components';
import {ae,ai,blender,css,figma,github,html,js,ps, react, threejs, vsc} from './imports';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Whatiuse = () => {

  useEffect(()=>{
    AOS.init({duration:1000});
  }, []);

  return (
  <div className="whatiuse" id="whatiuse">
<div className="whatiuse__heading">
<h2 className="gradient__text" data-aos="fade-left" >What I Use</h2>
</div>
<div className="slider">
    <div className="slide-track">
      <Technology TechImg={ai} TechTxt="Adobe Illustrator"/>
      <Technology TechImg={ae} TechTxt="Adobe After Effect"/>
      <Technology TechImg={blender} TechTxt="Blender"/>
      <Technology TechImg={css} TechTxt="CSS3"/>
      <Technology TechImg={figma} TechTxt="Figma"/>
      <Technology TechImg={github} TechTxt="Github"/>
      <Technology TechImg={html} TechTxt="HTML5"/>
      <Technology TechImg={js} TechTxt="Java Script"/>
      <Technology TechImg={ps} TechTxt="Adobe Photoshop"/>
      <Technology TechImg={react} TechTxt="React"/>
      <Technology TechImg={threejs} TechTxt="Three.js"/>
      <Technology TechImg={vsc} TechTxt="Visual Studio Code"/>

      <Technology TechImg={ai} TechTxt="Adobe Illustrator"/>
      <Technology TechImg={ae} TechTxt="Adobe After Effect"/>
      <Technology TechImg={blender} TechTxt="Blender"/>
      <Technology TechImg={css} TechTxt="CSS3"/>
      <Technology TechImg={figma} TechTxt="Figma"/>
      <Technology TechImg={github} TechTxt="Github"/>
      <Technology TechImg={html} TechTxt="HTML5"/>
      <Technology TechImg={js} TechTxt="Java Script"/>
      <Technology TechImg={ps} TechTxt="Adobe Photoshop"/>
      <Technology TechImg={react} TechTxt="React"/>
      <Technology TechImg={threejs} TechTxt="Three.js"/>
      <Technology TechImg={vsc} TechTxt="Visual Studio Code"/>
    </div>
</div>

<div className="slider__two">
    <div className="slide-track__two">
      <Technology TechImg={ai} TechTxt="Adobe Illustrator"/>
      <Technology TechImg={github} TechTxt="Github"/>
      <Technology TechImg={blender} TechTxt="Blender"/>
      <Technology TechImg={js} TechTxt="Java Script"/>
      <Technology TechImg={css} TechTxt="CSS3"/>
      <Technology TechImg={figma} TechTxt="Figma"/>
      <Technology TechImg={react} TechTxt="React"/>
      <Technology TechImg={vsc} TechTxt="Visual Studio Code"/>
      <Technology TechImg={threejs} TechTxt="Three.js"/>
      <Technology TechImg={html} TechTxt="HTML5"/>
      <Technology TechImg={ae} TechTxt="Adobe After Effect"/>
      <Technology TechImg={ps} TechTxt="Adobe Photoshop"/>



      <Technology TechImg={ai} TechTxt="Adobe Illustrator"/>
      <Technology TechImg={github} TechTxt="Github"/>
      <Technology TechImg={react} TechTxt="React"/>
      <Technology TechImg={blender} TechTxt="Blender"/>
      <Technology TechImg={js} TechTxt="Java Script"/>
      <Technology TechImg={css} TechTxt="CSS3"/>
      <Technology TechImg={figma} TechTxt="Figma"/>
      <Technology TechImg={vsc} TechTxt="Visual Studio Code"/>
      <Technology TechImg={threejs} TechTxt="Three.js"/>
      <Technology TechImg={html} TechTxt="HTML5"/>
      <Technology TechImg={ae} TechTxt="Adobe After Effect"/>
      <Technology TechImg={ps} TechTxt="Adobe Photoshop"/>

    </div>
</div>

  </div>
    );
};

export default Whatiuse;
