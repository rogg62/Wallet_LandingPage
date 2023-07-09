import React from "react";
import "./Cta.css";
import Gif from "../../assets/GIF.svg";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Cta = () => {
  const main = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes = self.selector(".paragraf");
      boxes.forEach((paragraf) => {
        gsap.fromTo(
          paragraf,
          { opacity: 0, x: 10 },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: paragraf,
              start: "bottom 100%",
              end: "top 65%",
              scrub: true,
            },
          }
        );
      });
    }, main);
    return () => ctx.revert();
  }, []);
  return (
    <section id="cta">
      <div id="caixa" ref={main}>
        <div id="box1">
          <h1 className="paragraf">Questions? Let's talk </h1>
          <p className="paragraf">
            Contact us through our 24/7 live chat. We're always happy to help!
          </p>
          <a href="#login">
            <button className="paragraf">Get started</button>
          </a>
        </div>
        <div id="box2">
          <img src={Gif} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Cta;
