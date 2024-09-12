// import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import {
  selectUserContactsError,
  selectUserContactsIsLoading,
} from "../../redux/contacts/selectors";
import Loader from "../Loader/Loader";
import css from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectUserContactsIsLoading);
  const error = useSelector(selectUserContactsError);
  return (
    <>
      {loading && <Loader />}
      {error !== null && (
        <p style={{ color: "red" }}>{error}. Please, try again later.</p>
      )}
      <ul className={css.wrapperList}>
        {filteredContacts?.length === 0 && <li>Contacts list is empty...</li>}
        {Array.isArray(filteredContacts) &&
          filteredContacts.map((contact) => {
            return (
              <li className={css.wrapperItem} key={contact.id}>
                <Contact
                  id={contact.id}
                  name={contact.name}
                  number={contact.number}
                />
              </li>
            );
          })}
      </ul>
    </>
  );
};
export default ContactList;
