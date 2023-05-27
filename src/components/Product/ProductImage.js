import "./ProductImage.css"
import Image from "../../assets/Image.svg";

import React from 'react'

const ProductImage = () => {
  return (
    <section id="productImage">
         <div>
            <img src={Image} alt="" />
          </div>
    </section>
  )
}

export default ProductImage