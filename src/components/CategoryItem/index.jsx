import React from "react";
import { Link } from "react-router-dom";
import s from "./style.module.css";

export default function CategoryItem({ title, image }) {
  const link = `/products/${title}`;

  return (
    <Link to={link} className={s.category_card}>
      <img src={image} alt={title} />
      <p>{title}</p>
    </Link>
  );
}
