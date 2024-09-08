import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  return (
    <div>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            clsx(css.menuLink, isActive && css.active)
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            clsx(css.menuLink, isActive && css.active)
          }
        >
          Register
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            clsx(css.menuLink, isActive && css.active)
          }
        >
          Log In
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            clsx(css.menuLink, isActive && css.active)
          }
        >
          Contacts
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
