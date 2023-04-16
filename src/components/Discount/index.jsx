import React from "react";
import s from "./style.module.css";
import image from "../../images/discount-bg.png";
import { postAction } from "../../store/asyncActions/postAction";

export default function Discount() {
  const onSubmit = (e) => {
    e.preventDefault();
    const { number } = e.target;
    const dataNum = `+${+number.value}`;

    postAction("http://localhost:3333/sale/send", dataNum).then((data) => {
      console.log(data);
    });
    number.value = "";
  };

  return (
    <div className={s.container}>
      <img src={image} alt="discount-bg" />

      <div className={s.content}>
        <h2>5% off</h2>
        <span>on the first order</span>
        <form className={s.form} onSubmit={onSubmit}>
          <input
            className={s.phone_number}
            type="number"
            name="number"
            placeholder="+49"
          />
          <button>Get a discount</button>
        </form>
      </div>
    </div>
  );
}
