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
      .then(() => {
        toast.success("Contact deleted successfully");
      });
  };
  return (
    <div key={id} className={css.contactList}>
      <p className={css.name}>
        <IoPersonSharp />
        {name}
      </p>
      <p className={css.number}>
        <FaPhoneAlt />
        {number}
      </p>
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
