import "./Logos.css"
import Logos from "../../assets/Logos.svg";

import React from 'react'

const Logo = () => {
  return (
    <section id="logos">
          <div>
            <img src={Logos} alt="" />
          </div>
    </section>
  )
}

export default Logo