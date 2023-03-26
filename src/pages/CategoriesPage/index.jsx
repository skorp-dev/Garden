import React from "react";
import { useSelector } from "react-redux";
import CategoryItem from "../../components/CategoryItem";
import s from "./style.module.css";

export default function CategoriesPage() {
  const categories = useSelector((state) => state.category);

  return (
    <div className={s.categories}>
      <h1>Categories</h1>
      <div className={s.container}>
        {categories.map((item) => (
          <CategoryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
