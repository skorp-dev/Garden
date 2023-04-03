import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  productsPriceFilterAction,
  productsSalesCheckAction,
  productsSelectAction,
} from "../../store/reducer/ProductsReducer";
import s from "./style.module.css";

export default function ProdutsFilter() {
  const dispatch = useDispatch();

  const [price, setPrice] = useState({ min: -Infinity, max: Infinity });

  const setMaxPrice = (event) => {
    setPrice((pre) => ({
      ...pre,
      max: +event.target.value || Infinity,
    }));
  };

  const setMinPrice = (event) => {
    setPrice((pre) => ({
      ...pre,
      min: +event.target.value || -Infinity,
    }));
  };

  useEffect(() => {
    dispatch(productsPriceFilterAction(price));
  }, [dispatch, price]);

  const onChange = (event) => {
    const value = event.target.checked;
    dispatch(productsSalesCheckAction(value));
  };

  const onSelect = (event) => {
    const value = event.target.value;
    dispatch(productsSelectAction(value));
  };

  return (
    <div className={s.container}>
      <label className={s.price}>
        Price
        <input type="number" placeholder="from" onChange={setMinPrice} />
        <input type="number" placeholder="to" onChange={setMaxPrice} />
      </label>

      <label className={s.check_sale}>
        Discounted products
        <input type="checkbox" onChange={onChange} />
        <span></span>
      </label>

      <label>
        sorted by
        <div className={s.test}>
          <div className={s.arrow}></div>
          <div className={s.arrow}></div>
          <select onChange={onSelect}>
            <option value="def">Select filter...</option>
            <option value="priceUp">price Up</option>
            <option value="priceDown">price Down</option>
          </select>
        </div>
      </label>
    </div>
  );
}
