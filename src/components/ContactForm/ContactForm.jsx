import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

const INITIAL_VALUES = {
  name: "",
  number: "",
};

const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

const ContactValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(3, "Too Short!")
    .max(50, "Too Long!"),
  number: Yup.string()
    .matches(phoneRegExp, "The phone number must match the format 'xxx-xx-xx'")
    .required("Required"),
});
const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (contact, actions) => {
    dispatch(addContact(contact))
      .unwrap()
      .then(() => toast.success("Contact added successfully!"))
      .catch((error) => toast.error(error.message));
    actions.resetForm();
  };
  return (
    <div className={css.containerContactForm}>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={ContactValidationSchema}
      >
        {({ errors }) => (
          <Form className={css.form}>
            <label className={css.label}>
              <span className={css.name}>Name</span>
              <Field
                className={css.field}
                type="text"
                name="name"
                placeholder="Enter your name..."
              />
              <ErrorMessage
                className={css.errorText}
                name="name"
                component="span"
              />
            </label>
            <label className={css.label}>
              <span className={css.number}>Phone</span>
              <Field
                className={css.field}
                type="tel"
                name="number"
                placeholder="xxx-xx-xx"
              />
              <ErrorMessage
                className={css.errorText}
                name="number"
                component="span"
              />
            </label>
            <button
              className={css.btnAddContact}
              disabled={Object.keys(errors).length > 0}
              type="submit"
            >
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
