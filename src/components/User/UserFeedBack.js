import React from "react";
import "./UserFeedBack.css";
import Aspas from "../../assets/Quote icon.svg";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const UserFeedBack = () => {

  const main = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes = self.selector(".comment");
      boxes.forEach((comment) => {
        gsap.fromTo(
          comment,
          { opacity: 0 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: comment,
              start: "bottom bottom",
              end: "top 25%",
              scrub: true,
            },
          }
        );
      });
    }, main);
    return () => ctx.revert();
  }, []);

  return (
    <section id="userFeedback" >
      <div ref={main}>
        <img src={Aspas} alt="" />
        <p className="comment">
          “Wallet is a great product! All of my most important information is
          there - credit cards, transit cards, boarding passes, tickets, and
          more. And I don't need to worry because it's all in one place!
          thanks!”
        </p>

        <h4>Johnny Owens</h4>
      </div>
    </section>
  );
};

export default UserFeedBack;
