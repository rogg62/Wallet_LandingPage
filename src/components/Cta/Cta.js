import React from "react";
import "./Cta.css";
import Gif from "../../assets/GIF.svg";

const Cta = () => {
  return (
    <section id="cta">
      <div id="caixa">
        <div id="box1">
          <h1 className="paragraf">Questions? Let's talk </h1>
          <p className="paragraf">
            Contact us through our 24/7 live chat. We're always happy to help!
          </p>
          <a href="#login">
            <button className="paragraf">Get started</button>
          </a>
        </div>
        <div id="box2">
          <img src={Gif} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Cta;
