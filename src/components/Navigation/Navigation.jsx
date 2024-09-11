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
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      {isLoggedIn && (
        <>
          <NavLink to="/contacts" className={buildLinkClass}>
            Contacts
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;
