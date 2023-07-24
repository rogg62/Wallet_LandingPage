import "./Footer.css";
import Logo from "../../assets/Wallet logo.svg";

import React from "react";

const Footer = () => {
  return (
    <footer>
      <a href="#principal" id="img">
        <img src={Logo} alt="" />
      </a>
      <div>
        <button>&copy; Wallet 2022</button>
        <button>Privacy policy</button>
        <button>Cookies policy</button>
        <button>Terms of use</button>
      </div>
    </footer>
  );
};

export default Footer;
