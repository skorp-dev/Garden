import React from "react";
import { useDispatch } from "react-redux";
import {
  basketDecrementAction,
  basketDelItemAction,
  basketIncrementAction,
} from "../../store/reducer/BasketReducer";
import PriceContainer from "../PriceContainer";
import s from "./style.module.css";

export default function BasketItem({
  title,
  image,
  count,
  price,
  discont_price,
  id,
}) {
  const img = `http://localhost:3333/${image}`;
  const dispatch = useDispatch();

  return (
    <div className={s.item}>
      <img src={img} alt={title} />
      <div className={s.item_info}>
        <p>{title}</p>
        <div className={s.item_info_btns}>
          <button onClick={() => dispatch(basketDecrementAction(id))}>-</button>
          <span>{count}</span>
          <button onClick={() => dispatch(basketIncrementAction(id))}>+</button>
        </div>
      </div>
      <PriceContainer
        price={price}
        discont_price={discont_price}
        basket={"basket"}
      />
      <div className={s.item_del}>
        <button onClick={() => dispatch(basketDelItemAction(id))}>X</button>
      </div>
    </div>
  );
}
