import "./FilterCheckbox.css";

export default function FilterCheckbox({ isFilter, onChange }) {
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        className="checkbox__input"
        checked={isFilter}
        onChange={onChange}
        name="checkbox"
      />
      <span className="checkbox__div"></span>
    </label>
  );
}