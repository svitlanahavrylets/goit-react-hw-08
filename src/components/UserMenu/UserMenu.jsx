import { useSelector } from "react-redux";
import { selectAuthUser } from "../../redux/auth/selectors";
// import { apiLogout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";
import ModalLogOut from "../ModalLogOut/ModalLogOut";
import { useState } from "react";

const UserMenu = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const user = useSelector(selectAuthUser);
  // const dispatch = useDispatch();

  function handleClick() {
    // dispatch(apiLogout());
    setIsOpen(true);
  }

  return (
    <div className={css.wrapper}>
      <div className={css.userInform}>
        <p>
          Hello, <span className={css.username}>{user.name}</span>!
        </p>
        <p className={css.email}>{user.email}</p>
      </div>
      <button className={css.btnLogOut} type="button" onClick={handleClick}>
        Log Out
      </button>
      <ModalLogOut
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
      ></ModalLogOut>
    </div>
  );
};

export default UserMenu;
