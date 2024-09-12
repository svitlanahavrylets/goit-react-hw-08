import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { apiRegister } from "../../redux/auth/operations";
import { selectAuthError } from "../../redux/auth/selectors";
import ErrorMessageComp from "../ErrorMessageComp/ErrorMessageComp";

const RegistrationValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(3, "Too Short!")
    .max(100, "Too Long!"),
  password: Yup.string()
    .required("Required")
    .min(8, "Too Short!")
    .max(100, "Too Long!"),
  email: Yup.string().email("Invalid e-mail").required("Required"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  const INITIAL_VALUES = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values, actions) => {
    dispatch(apiRegister(values));

    actions.resetForm();
  };
  return (
    <div className={css.containerContactForm}>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={RegistrationValidationSchema}
      >
        {({ errors }) => (
          <Form className={css.form}>
            <label className={css.label}>
              <span className={css.name}>Name</span>
              <Field
                className={css.field}
                type="text"
                name="name"
                placeholder="Enter your name"
              />
              <ErrorMessage
                className={css.errorText}
                name="name"
                component="span"
              />
            </label>
            <label className={css.label}>
              <span className={css.number}>E-mail</span>
              <Field
                className={css.field}
                type="text"
                name="email"
                placeholder="example@gmail.com"
              />
              <ErrorMessage
                className={css.errorText}
                name="email"
                component="span"
              />
            </label>
            <label className={css.label}>
              <span className={css.number}>Password</span>
              <Field
                className={css.field}
                type="password"
                name="password"
                placeholder="Enter your password"
              />
              <ErrorMessage
                className={css.errorText}
                name="number"
                component="password"
              />
            </label>
            <button
              className={css.btnAddContact}
              disabled={Object.keys(errors).length > 0}
              type="submit"
            >
              Sign up
            </button>
            {error && <ErrorMessageComp />}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
