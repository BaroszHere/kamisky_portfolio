import React from "react";
import "./contactme.css";
import Blob1 from '../../assets/Blob1.png';
import emailjs from 'emailjs-com'

const Contactme = () => {
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm(
    'service_piuivf5',
    'template_pwjocud',
     e.target,
    "tkmg8HJzR_Aks0jHK").then(res=>{
      console.log(res);
    }).catch(err=> console.log(err));
    e.target.reset()
  }
  return (
  <div className="contactme section__padding" id="contactme">
    <div className="contactme__heading">
<h2 className="gradient__text">How to contact me?</h2>
</div>
<div className="contactme__content">

    <form onSubmit={sendEmail}>
      <p>Name</p>
      <input type="text" name="name" placeholder="John" required/>
      <p>Email</p>
      <input type="email" name="email" placeholder="John@gmail.com" required/>
      <p>Phone</p>
      <input type="text" name="phone" placeholder="665 123 123" required/>
      <p>Message</p>
      <textarea  name="message"  rows="4" placeholder="How can we help you?"></textarea>
      <button type="submit" value="Send">Send</button>
    </form>
    <div className="contactme__image">
    <img src={Blob1} alt="Blob1" />
    </div>
      
</div>

  </div>
  
    );
};

export default Contactme;
