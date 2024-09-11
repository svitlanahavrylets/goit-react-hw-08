import { useDispatch, useSelector } from "react-redux";
import { selectAuthUser } from "../../redux/auth/selectors";
import { apiLogout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const user = useSelector(selectAuthUser);
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <div>
        <p className={css.username}>Hello, {user.name}</p>
        <p className={css.email}>Email: {user.email}</p>
      </div>
      <button type="button" onClick={() => dispatch(apiLogout())}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
