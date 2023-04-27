import "./Features.css";

import Image2 from "../assets/Image (1).svg";
import Card from "../assets/Cards icon.svg";
import Coin from "../assets/Coin icon.svg";
import Purse from "../assets/Purse icon.svg";
import React from "react";

const Features = () => {

  return (
    <section id="features">
      <div id="caixa1">
        <div className="div">
          <img src={Card} alt="" />
          <div className="box">
            <h1>Customizable card</h1>
            <p>
              Custom your own card for your exact incomes and expenses needs.
            </p>
          </div>
        </div>

        <div className="div">
          <img src={Coin} alt="" />
          <div className="box">
            <h1>No payment fee</h1>
            <p>Transfer your payment all over the world with no payment fee.</p>
          </div>
        </div>

        <div className="div">
          <img src={Purse} alt="" />
          <div className="box">
            <h1>All in one place</h1>
            <p>
              The right place to keep your credit and debit cards, boarding
              passes & more.
            </p>
          </div>
        </div>
      </div>

      <div id="caixa2">
        <img src={Image2} alt="" />
      </div>
    </section>
  );
};

export default Features;
