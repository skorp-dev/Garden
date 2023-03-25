import React from "react";
import s from "./style.module.css";

export default function PriceContainer({ price, discont_price, font}) {

  const discountProcent = Math.round(100 - (discont_price / price) * 100);


  const priceContainer = () => {
    if (discont_price !== null) {
      return (
        <>
          <p className={[s.price, font === "descr" ? s.descr_font : " "].join(" ")}>
            {discont_price}
            <span>$</span>
          </p>
          <p className={s.disc_price}>{price}$</p>
          <p className={s.procent}>-{discountProcent}%</p>
        </>
      );
    } else {
      return (
        <>
          <p className={[s.price, font === "descr" ? s.descr_font : " "].join(" ")}>
            {price}
            <span>$</span>
          </p>
        </>
      );
    }
  };
  return <div className={s.discount}>{priceContainer()}</div>;
}
