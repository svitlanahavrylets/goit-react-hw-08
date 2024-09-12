import css from "./Title.module.css";
const Title = () => {
  return (
    <>
      <p className={css.text}>I&apos;m your PhoneBook</p>
      <div className={css.title}>
        <div className={css.disappear}>
          <span>P</span> <span>h</span> <span>o</span> <span>n</span>{" "}
          <span>e</span> <span>b</span> <span>o</span> <span>o</span>{" "}
          <span>k</span>
        </div>
      </div>
    </>
  );
};

export default Title;
