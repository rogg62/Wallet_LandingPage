import "./Footer.css";
import Logo from "../assets/Wallet logo.svg";


import React from "react";

const Footer = () => {
  return (
    <footer>
      <a href="1" id="img">
        <img src={Logo} alt="" />
      </a>
      <div>
        <a href="1">&copy; Wallet 2022</a>
        <a href="1">Privacy policy</a>
        <a href="1">Cookies policy</a>
        <a href="1">Terms of use</a>
      </div>
    </footer>
  );
};

export default Footer;
