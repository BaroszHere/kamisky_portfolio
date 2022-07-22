import React, {useState} from "react";
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import "./navbar.css";

const Menu = () => (
  <>
  <p><a href="#home">HOME</a></p>
  <p><a href="#About">ABOUT</a></p>
  <p><a href="#WHAT_I_DO">WHAT I DO</a></p>
  <p><a href="#WHAT_I_DID">PROJECTS</a></p>
  <p><a href="#Contact_me">CONTACT</a></p>
  </>
)


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
<div className="Header__navbar">
<div className="Header__navbar_logo">
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
