import React from "react";

import "./Logos.css";
import Logos from "../../assets/Logos.svg";

const Logo = () => {
  return (
    <section id="logos">
      <div>
        <img src={Logos} alt="" className="img" />
      </div>
    </section>
  );
};

export default Logo;
