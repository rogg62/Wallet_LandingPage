import React from "react";
import "./Features.css";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Image2 from "../../assets/Image (1).svg";
import Card from "../../assets/Cards icon.svg";
import Coin from "../../assets/Coin icon.svg";
import Purse from "../../assets/Purse icon.svg";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const main = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes = self.selector(".div");
      boxes.forEach((div) => {
        gsap.fromTo(
          div,
          { opacity: 0,
          x: -30 },
          {
            opacity:1,
            x: 0,
            scrollTrigger: {
              trigger: div,
              start: "bottom bottom",
              end: "top 50%",
              scrub: true,
            },
          }
        );
      });
    }, main);
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={main}>
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
