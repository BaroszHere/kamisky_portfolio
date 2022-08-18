import React, {useState, useEffect} from "react";
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import "./navbar.css";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Menu = () => (
  <>
  <p><a href="#home">HOME</a></p>
  <p><a href="#Whatido">WHAT I DO</a></p>
  <p><a href="#whatidid">PROJECTS</a></p>
  <p><a href="#whatiuse">WHAT I USE</a></p>
  <p><a href="#contactme">CONTACT</a></p>
  </>
)


const Navbar = () => {

  useEffect(()=>{
    AOS.init({duration:1000});
  }, []);

  const [toggleMenu, setToggleMenu] = useState(false);
  return (
<div className="Header__navbar">
<div className="Header__navbar_logo" data-aos="fade-right">
      <a href="#">KAMISKY</a>
    </div>
  <div className="Header__navbar-links">


    <div className="Header__navbar-links_container">
<Menu />
    </div>
  </div>
  <div className="header__navbar-menu">
    {toggleMenu
      ? <RiCloseLine color="fff" size={27} onClick={() => setToggleMenu(false)}/>
      : <RiMenu3Line color="fff" size={27} onClick={() => setToggleMenu(true)}/>
    }
    {toggleMenu && (
      <div className="Header__navbar-menu_container">
        <div className="Header__navbar_menu_container-links">
        <Menu />
        </div>
      </div>
    )}
  </div>
</div>

  )
};

export default Navbar;
