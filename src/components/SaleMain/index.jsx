import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../ProductItem";
import s from "./style.module.css";

export default function SaleMain() {
  const products = useSelector((state) => state.products);

  return (
    <div className={s.sale_main}>
      <h1>Sale</h1>
      <div className={s.container}>
        {products
          .filter((item) => item.discont_price !== null)
          .slice(0, 4)
          .map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
      </div>
    </div>
  );
}
