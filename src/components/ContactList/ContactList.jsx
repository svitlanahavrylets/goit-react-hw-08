// import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import {
  selectUserContactsError,
  selectUserContactsIsLoading,
} from "../../redux/contacts/selectors";
import Loader from "../Loader/Loader";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectUserContactsIsLoading);
  const error = useSelector(selectUserContactsError);
  return (
    <>
      {loading && <Loader />}
      {error !== null && <p>Please, try again later</p>}
      <ul>
        {filteredContacts?.length === 0 && <li>Contacts list is empty</li>}
        {Array.isArray(filteredContacts) &&
          filteredContacts.map((contact) => {
            return (
              <li key={contact.id}>
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
