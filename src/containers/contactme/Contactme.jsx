import React from "react";
import "./contactme.css";
import Blob1 from '../../assets/Blob1.png'

const Contactme = () => {
  return (
  <div className="contactme section__padding" id="contactme">
    <div className="contactme__heading">
<h2 className="gradient__text">How to contact me?</h2>
</div>
<div className="contactme__content">

    <form>
      <p>Name</p>
      <input type="text" id="name" placeholder="John" required/>
      <p>Email</p>
      <input type="email" id="email" placeholder="John@gmail.com" required/>
      <p>Phone</p>
      <input type="text" id="phone" placeholder="665 123 123" required/>
      <p>Message</p>
      <textarea  id="message"  rows="4" placeholder="How can we help you?"></textarea>
      <button type="submit">Send</button>
    </form>
    <div className="contactme__image">
    <img src={Blob1} alt="Blob1" />
    </div>
      
</div>

  </div>
  
    );
};

export default Contactme;
