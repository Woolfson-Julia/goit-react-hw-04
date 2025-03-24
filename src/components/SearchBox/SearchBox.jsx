import css from "./SearchBox.module.css"

export default function SearchBox({ value, onFilter }) {
  const handleChange = (event) => {
    onFilter(event.target.value);
  }
  return (
    <div className={css.container}>
      <p className={css.text}>Find contacts by name</p>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}