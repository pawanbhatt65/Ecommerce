import React from "react";
import css from "./Products.module.css";
import Plane from "../../assets/plane.png";
import ProductsData from "../../data/ProductData";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Products = () => {
  const [MenuProduct, setMenuProduct] = useState(ProductsData);
  const [animationParent] = useAutoAnimate();

  const filter = (type) => {
    setMenuProduct(ProductsData.filter((product) => product.type === type));
  };

  return (
    <div className={css.container}>
      <img src={Plane} alt="Plane" />
      <h1>Our Featured Product</h1>

      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={() => setMenuProduct(ProductsData)}>All</li>
          <li onClick={() => filter("skin care")}>Skin Care</li>
          <li onClick={() => filter("conditioner")}>Conditioners</li>
          <li onClick={() => filter("foundation")}>Foundations</li>
        </ul>

        <div className={css.list} ref={animationParent}>
          {MenuProduct.map((product, i) => (
            <div className={css.product}>
              <div className="left-s">
                <div className="name">
                  <span>{product.name}</span>
                  <span>{product.detail}</span>
                </div>
                <span>{product.price}$</span>
                <div className="">Shop Now</div>
              </div>
              <img src={product.img} alt="product-image" className="img-p" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
