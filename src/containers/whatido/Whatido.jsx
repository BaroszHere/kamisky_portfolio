import React from "react";
import "./whatido.css";
import { Article } from '../../components';
import {GrapDes, WebDes, WebDev} from './imports';
import whatidoBlob from '../../assets/WhatidoBlob.png';


const Whatido = () => {
  return (
  <div className="whatido section__padding" id="Whatido">
<div className="whatido__heading">
  <h2 className="gradient__text">What I Do</h2>
</div>
<div className="whatido__container ">
  <Article imgUrl={WebDes} title="Web Design" 
  txt="Potrzebujesz nowej wizji  na identyfikacje swojego biznesu w sieci? A może masz już pomysł jak pokazać się z jak najlepszej strony? "
  />
  <div className="whatido__container-blob">
    <div className="whatido__container-blob_img">
      <img src={whatidoBlob} alt="" />
    </div>
  </div>
  <Article imgUrl={WebDev} title="Web Development" 
  txt="Chcesz zaistnieć w sieci? A może potrzebujesz responsywnej strony internetowej, która będzie godnie reprezentować Twój biznes?"
  />
  <Article imgUrl={GrapDes} title="Graphic Design" 
  txt="Potrzebujesz pomocy grafika, lub chcesz wyrazić jak bardzo wspaniały jest twój produkt?"
  />

</div>

  </div>
    );
};

export default Whatido;
