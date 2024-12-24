import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";

import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const buildLinkClass = ({ isActive }) => {
  return clsx(style.link, isActive && style.active);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn);
  return (
    <nav className={style.nav}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      {isLoggedIn ? (
        <NavLink to="/user" className={buildLinkClass}>
          Account
        </NavLink>
      ) : (
        <NavLink to="/login" className={buildLinkClass} end>
          Sign In
        </NavLink>
      )}
    </nav>
  );
}
