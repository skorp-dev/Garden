import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../icons/logo.png";
import basketLogo from "../../icons/basket.png";
import s from "./style.module.css";

export default function Nav() {
  const checkClass = ({ isActive }) => (isActive ? s.activ : "");

  return (
    <nav className={s.nav}>
      <NavLink className={checkClass}>
        <img className={s.logo} src={logo} alt="logo" />
      </NavLink>
      <div className={s.nav_list}>
        <NavLink className={s.catalog_btn}>Catalog</NavLink>
        <div className={s.nav_list_li}>
          <NavLink className={checkClass}>Main Page</NavLink>
          <NavLink className={checkClass}>All products</NavLink>
          <NavLink className={checkClass}>All sales</NavLink>
        </div>
      </div>
      <NavLink className={checkClass}>
        <img src={basketLogo} alt="basket" />
      </NavLink>
    </nav>
  );
}
