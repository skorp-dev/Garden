import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductItem from "../../components/ProductItem";
import ProdutsFilter from "../../components/ProductsFilter";
import { productsFilterResetAction } from "../../store/reducer/ProductsReducer";
import { loadProducts } from "../../store/asyncActions/loadProducts";
import s from "./style.module.css";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const { sales, catTitle, catId } = useParams();

  useEffect(() => {
    dispatch(productsFilterResetAction());
    dispatch(loadProducts);
  }, [dispatch]);

  const products = useSelector(({ products }) => {
    if (sales === undefined && catId === undefined) {
      return products;
    } else if (catId !== undefined) {
      return products.filter((item) => item.categoryId === +catId);
    } else {
      return products.filter((item) => item.discont_price !== null);
    }
  });

  const header_title = () => {
    if (sales === undefined && catId === undefined) {
      return <h1>All products</h1>;
    } else if (catId !== undefined) {
      return <h1>{catTitle}</h1>;
    } else {
      return <h1>All sales</h1>;
    }
  };

  return (
    <div className={s.products}>
      {header_title()}
      <ProdutsFilter />
      <div className={s.container}>
        {products
          .filter(({ show }) => Object.values(show).every((item) => item))
          .map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
      </div>
    </div>
  );
}
