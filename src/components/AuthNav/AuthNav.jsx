import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const AuthNav = () => {
  return (
    <>
      <NavLink
        to="/register"
        className={({ isActive }) => clsx(css.menuLink, isActive && css.active)}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => clsx(css.menuLink, isActive && css.active)}
      >
        Log In
      </NavLink>
    </>
  );
};

export default AuthNav;
