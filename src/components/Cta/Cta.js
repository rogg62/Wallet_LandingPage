import "./Cta.css";
import Gif from "../../assets/GIF.svg";

import React from "react";

const Cta = () => {
  return (
    <section id="cta">
      <div id="caixa">
        <div id="box1">
          <h1>Questions? Let's talk </h1>
          <p>
            Contact us through our 24/7 live chat. We're always happy to help!
          </p>
          <a href="#login"><button>Get started</button></a>
        </div>
        <div id="box2">
          <img src={Gif} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Cta;
