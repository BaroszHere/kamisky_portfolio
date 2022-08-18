import React, {useEffect} from "react";
import "./footer.css";
import {fb,fbb,ig,igb,li,lib} from './imports';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

  useEffect(()=>{
    AOS.init({duration:1000});
  }, []);


  return (
    <div className="footer section__padding" id="footer">
      <div className="footer__left"> 
        <div className="footer__left_logo" data-aos="fade-right">
        <h2>KAMISKY</h2>
        <p>KAMISKY © 2022</p>
          </div>   

        <div className="footer__left_wrap" data-aos="fade-in">
                 <div className="footer__left__wrap_cards">
                  <p><a href="#home">HOME</a></p>
                  <p><a href="#About">ABOUT</a></p>
                  <p><a href="#WHAT_I_DO">WHAT I DO</a></p>
                  <p><a href="#WHAT_I_DID">PROJECTS</a></p>
                  <p><a href="#Contact_me">CONTACT</a></p>
                </div>

                <div className="footer__left__wrap_privacy" >
                  <p>Privacy Policy</p>
                  <p>Terms & Conditions</p>
                  <p>Security</p>
                </div>
        </div>

      </div>
      <div className="footer__right" data-aos="fade-left">
        <h3>Social Media</h3>
        <div className="footer__right__social">
        <img src={ig} alt="IG" />
        <img src={fb} alt="FB" />
        <img src={li} alt="Linkedin" />
        </div>
      </div>

    </div>
  );
};

export default Footer;
