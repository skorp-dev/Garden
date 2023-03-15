import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CatalogMain() {
  const categories = useSelector((state) => state.category);
  return (
    <div>
      <div>
        <h1>Catalog</h1>
        <Link to="/categories">All categories</Link>
      </div>
      <div>
        {categories.map((item) => (
          <p key={item}>{item.title}</p>
        ))}
      </div>
    </div>
  );
}
