import React from "react";
import { Link } from "react-router-dom";
import s from "./style.module.css";

export default function NotFoundPage() {
  return (
    <div className={s.container}>
      <h1>404</h1>
      <span>ERROR</span>
      <p>Page not found</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
