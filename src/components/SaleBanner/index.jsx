import React from "react";
import { Link } from "react-router-dom";
import s from "./style.module.css";

export default function SaleBanner() {
  return (
    
      <div className={s.container}>
        <span>Sale</span>
        <p>New Season</p>
        <Link to="/sales" className={s.sale_btn}>
          Sale
        </Link>
      </div>

  );
}
