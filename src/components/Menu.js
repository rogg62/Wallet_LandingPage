import "./Menu.css";
import Logo from "../assets/Wallet logo.svg";
import { Link } from "react-router-dom";
import React from "react";

const Menu = () => {
  return (
    <header>
      <a href="#principal">
        <img src={Logo} alt="" />
      </a>

      <nav>
        <Link id="Link" to="/Login">Sign up</Link>
        <button>Log in</button>
      </nav>
    </header>
  );
};

export default Menu;
