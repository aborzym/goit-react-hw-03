import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  const handleChange = (e) => {
    onFilter(e.target.value);
  };
  return (
    <div className={css.form}>
      <label className={css.label} htmlFor="search">
        Find contacts by name
      </label>
      <input
        className={css.field}
        type="text"
        name="search"
        value={value}
        id="search"
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default SearchBox;
