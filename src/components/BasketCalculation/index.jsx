import React from "react";
import { useSelector } from "react-redux";
import s from "./style.module.css";

export default function BasketCalculation() {
  const { products, basket } = useSelector((state) => state);

  const data = basket.map((item) => {
    const product = products.find(({ id }) => id === item.id);
    return { ...product, ...item };
  });

  const totalPrice = data.reduce(
    (acc, { count, price }) => acc + count * price,
    0
  );

  return (
    <div className={s.container}>
      <h2>Order details</h2>
      <div className={s.container_total}>
        <h3>Total</h3>
        <p>
          {totalPrice}
          <span>$</span>
        </p>
      </div>
      <form className={s.form}>
        <input type="text" placeholder="Phone number" />
        <button>Order</button>
      </form>
    </div>
  );
}
