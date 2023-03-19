import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../../components/ProductItem";
import s from "./style.module.css";

export default function ProductsPage() {
  const products = useSelector((state) => state.products);

  return (
    <div className={s.container}>
      {products.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
  );
}
