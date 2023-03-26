import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CategoryItem from "../CategoryItem";
import s from "./style.module.css";

export default function CatalogMain() {
  const categories = useSelector((state) => state.category);

  return (
    <div className={s.catalog}>
      <div className={s.header}>
        <h1>Catalog</h1>
        <Link to="/categories/all">All categories</Link>
      </div>
      <div className={s.container}>
        {categories.slice(0, 4).map((item) => (
          <CategoryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
