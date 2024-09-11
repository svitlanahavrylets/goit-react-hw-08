import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { apiLogin } from "../../redux/auth/operations";
import { selectAuthError } from "../../redux/auth/selectors";

const LoginValidationSchema = Yup.object().shape({
  password: Yup.string()
    .required("Required")
    .min(8, "Too Short!")
    .max(100, "Too Long!"),
  email: Yup.string().email("Invalid e-mail").required("Required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  const INITIAL_VALUES = {
    email: "",
    password: "",
  };
  const handleSubmit = (values, actions) => {
    dispatch(apiLogin(values));

    actions.resetForm();
  };
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={LoginValidationSchema}
    >
      {({ errors }) => (
        <Form className={css.form}>
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
          {error && <p>Oops, some error occured... {error}</p>}
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
