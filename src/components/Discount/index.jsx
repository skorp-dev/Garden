import React from "react";
import s from "./style.module.css";
import image from "../../images/discount-bg.png";

export default function Discount() {
  return (
    <div className={s.container}>
      <img src={image} alt="discount-bg" />

      <div className={s.content}>
        <h2>5% off</h2>
        <span>on the first order</span>
        <form className={s.form}>
          <input type="text" name="number" placeholder="+49"/>
          <button>Get a discount</button>
        </form>
      </div>
    </div>
  );
}
