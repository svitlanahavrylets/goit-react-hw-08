import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const onDeleteContact = (id) => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => toast.success("Contact deleted successfully"))
      .catch((error) => toast.error(error.message));
  };
  return (
    <div key={id}>
      <div className={css.wrapper}>
        <IoPersonSharp />
        <h3>{name}</h3>
      </div>
      <div className={css.wrapper}>
        <FaPhoneAlt />
        <p>{number}</p>
      </div>

      <button
        onClick={() => onDeleteContact(id)}
        type="button"
        className={css.deleteBtn}
      >
        Delete
      </button>
    </div>
  );
}

export default Contact;
