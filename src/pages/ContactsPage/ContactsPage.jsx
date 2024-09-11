import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .then(() => toast.success("Contacts loaded successfully"));
  }, [dispatch]);
  return (
    <div>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
