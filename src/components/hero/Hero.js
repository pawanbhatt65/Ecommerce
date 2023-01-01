import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { duration: 3, type: "spring" };
  return (
    <div className={css.container}>
      {/* left side */}
      <div className={css.h_sides}>
        <span className={css.text1}>Skin protaction creem</span>
        <div className={css.text2}>
          <span>Trandy Collection</span>
          <span>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            natus possimus saepe corrupti eius animi distinctio.
          </span>
        </div>
      </div>

      {/* middle side hero image */}
      <div className={css.wrapper}>
        {/* blue circle start */}
        <motion.div
          initial={{ bottom: "2rem" }}
          whileInView={{ bottom: "0rem" }}
          className={css.blueCircle}
          transition={transition}
        ></motion.div>
        {/* blue circle end */}

        <motion.img
          initial={{ bottom: "-2rem" }}
          whileInView={{ bottom: "0rem" }}
          transition={transition}
          src={HeroImg}
          alt="Hero Image"
          width={600}
        />

        <motion.div
          initial={{ right: "4%" }}
          whileInView={{ right: "2%" }}
          transition={transition}
          className={css.cart2}
        >
          <RiShoppingBagFill />

          <div className={css.signup}>
            <span>Best sign up offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>

      {/* right side */}
      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.5m</span>
          <span>Monthly Traffic</span>
        </div>
        <div className={css.customers}>
          <span>100k</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
