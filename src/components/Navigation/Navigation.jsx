import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";

export const buildLinkClass = ({ isActive }) => {
  return clsx(css.menuLink, isActive && css.active);
};

const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <nav className={css.headerNav}>
      <NavLink
        to="/"
        className={({ isActive }) => buildLinkClass({ isActive })}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <>
          <NavLink
            to="/contacts"
            className={({ isActive }) => buildLinkClass({ isActive })}
          >
            Contacts
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;
