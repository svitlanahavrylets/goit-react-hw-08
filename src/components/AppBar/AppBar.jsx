import { useSelector } from "react-redux";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";
import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

const AppBar = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
