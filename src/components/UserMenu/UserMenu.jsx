import { useDispatch, useSelector } from "react-redux";
import { selectAuthUser } from "../../redux/auth/selectors";
import { apiLogout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const user = useSelector(selectAuthUser);
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <div className={css.userInform}>
        <p>
          Hello, <span className={css.username}>{user.name}</span>!
        </p>
        <p className={css.email}>{user.email}</p>
      </div>
      <button
        className={css.btnLogOut}
        type="button"
        onClick={() => dispatch(apiLogout())}
      >
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
