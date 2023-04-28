import "./Principal.css";
import GroupPrincipal from "../assets/Group.svg";
import { Link } from "react-router-dom";

import React from "react";

const Principal = () => {
  return (
    <section id="principal">
      <div>
        <h1>Get started with Wallet</h1>
        <p>
          Wallet is where you keep your credit, debit, and transit cards,
          boarding passes, tickets, and more — all in one place.
        </p>

        <Link to="/Login">
          <button>Get started</button>
        </Link>
      </div>

      <img src={GroupPrincipal} alt="" />
    </section>
  );
};

export default Principal;
