import React from "react";
import { Link } from "react-router-dom";
import PriceContainer from "../PriceContainer";
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

  return (
    <Link to={link} className={s.product_card}>
      <img src={img} alt={title} />
      <PriceContainer price={price} discont_price={discont_price} />
      <p className={s.title}>{title}</p>
    </Link>
  );
}
