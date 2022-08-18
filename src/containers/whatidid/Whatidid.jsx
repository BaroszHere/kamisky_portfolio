import React, { useEffect } from "react";
import "./whatidid.css";
import { Mockup } from '../../components';
import {Mockup1, Mockup2} from './imports';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Whatidid = () => {

  useEffect(()=>{
    AOS.init({duration:1000});
  }, []);

  return (
<div className="whatidid section__padding" id="whatidid">
<div className="whatidid__heading">
<h2 className="gradient__text" data-aos="fade-left" >What I Did</h2>
</div>

<div className="whatidid__container">
{/* <Mockup imgUrl={Mockup1} title="Projekt1"/> */}
<Mockup />
<Mockup />
<Mockup />
<Mockup />
</div>
</div>

  );
};

export default Whatidid;
