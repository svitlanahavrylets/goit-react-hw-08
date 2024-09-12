import Modal from "react-modal";

import css from "./ModalLogOut.module.css";
import { useDispatch } from "react-redux";
import { apiLogout } from "../../redux/auth/operations";

Modal.setAppElement("#root");
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  content: {
    height: "25%",
    width: "30%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    borderRadius: "15px",
  },
};

const ModalLogOut = ({ modalIsOpen, setIsOpen }) => {
  const dispatch = useDispatch();

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={customStyles}
    >
      <p className={css.textWrapper}>Are you sure you want to log out?</p>
      <div className={css.btnWrapper}>
        <button
          type="button"
          onClick={() => {
            closeModal();
          }}
          className={css.cancelBtn}
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch(apiLogout());
            closeModal();
          }}
          className={css.logOutBtn}
        >
          Log Out
        </button>
      </div>
    </Modal>
  );
};

export default ModalLogOut;
