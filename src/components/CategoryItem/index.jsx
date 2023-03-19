import React from "react";
import { Link } from "react-router-dom";
import s from "./style.module.css";

export default function CategoryItem({ title, image }) {
  const link = `/products/${title}`;
  const img = `http://localhost:3333/${image}`;

  return (
    <Link to={link} className={s.category_card}>
      <img src={img} alt={title} />
      <p>{title}</p>
    </Link>
  );
}