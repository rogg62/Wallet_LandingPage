import "./Menu.css";
import Logo from "../assets/Wallet logo.svg";

import React from "react";

const Menu = () => {
  return (
    <header>
      <a href="1">
        <img src={Logo} alt="" />
      </a>

      <nav>
        <a href="1">Sign up</a>
        <button>Log in</button>
      </nav>
    </header>
  );
};

export default Menu;
