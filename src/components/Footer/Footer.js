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
        <a href="wallet">&copy; Wallet 2022</a>
        <a href="privacy-policy">Privacy policy</a>
        <a href="cookies">Cookies policy</a>
        <a href="terms-of-use">Terms of use</a>
      </div>
    </footer>
  );
};

export default Footer;
