import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BasketCalculation from "../../components/BasketCalculation";
import BasketItem from "../../components/BasketItem";
import s from "./style.module.css";

export default function BasketPage() {
  const { products, basket } = useSelector((state) => state);

  const data = basket.map((item) => {
    const product = products.find(({ id }) => id === item.id);
    return { ...product, ...item };
  });

  return (
    <div className={s.container}>
      <h2>Shopping cart</h2>
      <div className={s.container_store}>
        <Link to="/products/all">Back to the store {`>`} </Link>
      </div>
      <div className={s.content}>
        <div>
          {data.length === 0 ? (
            <h3>Without products :{"("}</h3>
          ) : (
            data.map((item) => <BasketItem key={item.id} {...item} />)
          )}
        </div>
        <BasketCalculation />
      </div>
    </div>
  );
}
