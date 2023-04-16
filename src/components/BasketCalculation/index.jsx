import React from "react";
import { useSelector } from "react-redux";
import s from "./style.module.css";
import { postAction } from "../../store/asyncActions/postAction";

export default function BasketCalculation() {
  const { products, basket } = useSelector((state) => state);

  const data = basket.map((item) => {
    const product = products.find(({ id }) => id === item.id);
    return { ...product, ...item };
  });

  const totalPrice = data.reduce(
    (acc, { count, discont_price, price }) =>
      discont_price === null
        ? acc + count * price
        : acc + count * discont_price,
    0
  );

  const onSubmit = (e) => {
    e.preventDefault();
    const { number } = e.target;
    const dataNum = `+${+number.value}`;

    postAction("http://localhost:3333/order/send", dataNum);
    number.value = "";
  };

  return (
    <div className={s.container}>
      <h2>Order details</h2>
      <div className={s.container_total}>
        <h3>Total</h3>
        <p>
          {totalPrice.toFixed(2)}
          <span>$</span>
        </p>
      </div>
      <form className={s.form} onSubmit={onSubmit}>
        <input
          className={s.phone_number}
          type="number"
          name="number"
          placeholder="Phone number"
        />
        <button>Order</button>
      </form>
    </div>
  );
}
