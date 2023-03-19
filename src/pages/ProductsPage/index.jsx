import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductItem from "../../components/ProductItem";
import s from "./style.module.css";

export default function ProductsPage() {
  const { sales } = useParams();

  const products = useSelector(({ products }) => {
    if (sales === undefined) {
      return (
        <div className={s.products}>
          <h1>All products</h1>
          <div className={s.container}>
            {products.map((product) => (
              <ProductItem key={product.id} {...product} />
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className={s.products}>
          <h1>All Sales</h1>
          <div className={s.container}>
            {products
              .filter((item) => item.discont_price !== null)
              .map((product) => (
                <ProductItem key={product.id} {...product} />
              ))}
          </div>
        </div>
      );
    }
  });

  return products;
}
