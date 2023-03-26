import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { basketAddItemAction } from "../../store/reducer/BasketReducer";
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

  const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      <Link to={link} className={s.product_card}>
        <img src={img} alt={title} />
        <PriceContainer price={price} discont_price={discont_price} />
        <p className={s.title}>{title}</p>
      </Link>
      <button
        onClick={() => dispatch(basketAddItemAction(id))}
        className={s.add_basket}
      >
        Add to cart
      </button>
    </div>
  );
}
