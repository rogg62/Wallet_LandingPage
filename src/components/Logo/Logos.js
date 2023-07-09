import React from "react";

import "./Logos.css";
import Logos from "../../assets/Logos.svg";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Logo = () => {
  const main = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes = self.selector(".img");
      boxes.forEach((img) => {
        gsap.fromTo(
          img,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: img,
              start: "bottom bottom",
              end: "top 20%",
              scrub: true,
            },
          }
        );
      });
    }, main);
    return () => ctx.revert();
  }, []);
  return (
    <section id="logos">
      <div ref={main}>
        <img src={Logos} alt="" className="img" />
      </div>
    </section>
  );
};

export default Logo;
