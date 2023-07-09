import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Principal.css";
import GroupPrincipal from "../../assets/Group.svg";

const Principal = () => {
  const elementRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      elementRefs.current[0],
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 1 }
    );
    gsap.fromTo(
      elementRefs.current[1],
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 2.1 }
    );
    gsap.fromTo(
      elementRefs.current[2],
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 3 }
    );
    gsap.fromTo(
      elementRefs.current[3],
      { opacity: 0,
        y: 100,
      },
      { opacity: 1, duration: 1, delay: 3, y: 0 }
    );
  }, []);
  return (
    <section id="principal">
      <div>
        <h1 ref={(el) => (elementRefs.current[0] = el)}>
          Get started with Wallet
        </h1>
        <p ref={(el) => (elementRefs.current[1] = el)}>
          Wallet is where you keep your credit, debit, and transit cards,
          boarding passes, tickets, and more — all in one place.
        </p>

        <a href="#login">
          <button ref={(el) => (elementRefs.current[2] = el)}>
            Get started
          </button>
        </a>
      </div>

      <img src={GroupPrincipal} alt="" ref={(el) => (elementRefs.current[3] = el)} />
    </section>
  );
};

export default Principal;
