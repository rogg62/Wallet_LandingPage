import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Wallet logo.svg"

import "./login.css"
const login = () => {
  return (
    <section id="container-login">
      <img src={Logo} alt="" />

      <form>
        <label>
          <input type="email" name="" id="" placeholder="Email"/>
        </label>
        <label>
          <input type="password" name="" id="" placeholder="Password"/>
        </label>
        <Link to='/'><button type="submit">Entrar</button></Link>
      </form>
    </section>
  );
};

export default login;
