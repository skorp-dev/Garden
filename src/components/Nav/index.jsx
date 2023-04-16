import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../icons/logo.png";
import basketLogo from "../../icons/basket.png";
import s from "./style.module.css";
import { useSelector } from "react-redux";

export default function Nav() {
  const checkClass = ({ isActive }) => (isActive ? s.activ : "");
  const { basket } = useSelector((state) => state);

  const totalCount = basket.reduce((acc, { count }) => acc + count, 0);

  return (
    <div className={s.nav}>
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
        <NavLink to="/basket" className={checkClass}>
          <div className={s.basket}>
            <img src={basketLogo} alt="basket" />
            <span
              className={[s.count, totalCount === 0 ? s.count_off : " "].join(
                " "
              )}
            >
              {totalCount}
            </span>
          </div>
        </NavLink>
        <div className={s.hamb}>
          <input type="checkbox" id={s.menu_toggle} />
          <label className={s.hamb_btn} htmlFor={s.menu_toggle}>
            <span></span>
          </label>

          <ul className={s.popup} id="popup">
            <li>
              <NavLink to="/" className={checkClass}>
                Main Page
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/products/all" className={checkClass}>
                All products
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/sales" className={checkClass}>
                All sales
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
