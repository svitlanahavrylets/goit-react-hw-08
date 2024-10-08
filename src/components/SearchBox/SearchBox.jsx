import { selectFilterValue } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";

function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(selectFilterValue);

  const handleFilter = (event) => {
    const inputValue = event.target.value;
    dispatch(changeFilter(inputValue));
  };

  return (
    <div className={css.containerContactForm}>
      <div className={css.inputFindForm}>
        <p className={css.inputTitle}>Find contacts by name</p>
        <input
          className={css.input}
          type="text"
          placeholder="type..."
          value={value}
          onChange={handleFilter}
        />
      </div>
    </div>
  );
}

export default SearchBox;
