import React from "react";
import { Link } from "react-router-dom";
import s from "./style.module.css";

export default function ProductItem({
  title,
  image,
  price,
  discont_price,
  id,
}) {
  const img = `http://localhost:3333/${image}`;

  const link = `/product/${id}`;

  const discountProcent = 100 - (discont_price / price) * 100;
  const res = Math.round(discountProcent);

  const priceContainer = (discont_price) => {
    if (discont_price !== null) {
      return (
        <div className={s.discount}>
          <p className={s.price}>
            {discont_price}
            <span>$</span>
          </p>
          <p className={s.disc_price}>{price}$</p>
          <p className={s.procent}>-{res}%</p>
        </div>
      );
    } else {
      return (
        <div className={s.discount}>
          <p className={s.price}>
            {price}
            <span>$</span>
          </p>
        </div>
      );
    }
  };

  return (
    <Link to={link} className={s.product_card}>
      <img src={img} alt={title} />
      {priceContainer(discont_price)}
      <p className={s.title}>{title}</p>
    </Link>
  );
}
