import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../icons/logo.png";
import basketLogo from "../../icons/basket.png";
import s from "./style.module.css";

export default function Nav() {
  const checkClass = ({ isActive }) => (isActive ? s.activ : "");

  return (
    <nav className={s.nav}>
      <Link to="/">
        <img className={s.logo} src={logo} alt="logo" />
      </Link>
      <div className={s.nav_list}>
        <Link to="/categories/all" className={s.catalog_btn}>
          Catalog
        </Link>
        <div className={s.nav_list_li}>
          <NavLink to="/" className={checkClass}>
            Main Page
          </NavLink>
          <NavLink to="/products/all" className={checkClass}>
            All products
          </NavLink>
          <NavLink to="/sales" className={checkClass}>
            All sales
          </NavLink>
        </div>
      </div>
      <NavLink to="/basket" className={checkClass}>
        <img src={basketLogo} alt="basket" />
      </NavLink>
    </nav>
  );
}
