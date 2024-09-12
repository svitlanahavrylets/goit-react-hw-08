import css from "./ErrorMessageComp.module.css";

const ErrorMessageComp = () => {
  return (
    <p className={css.textErr}>
      Whoops, something went wrong! Please try reloading this page!
    </p>
  );
};

export default ErrorMessageComp;
