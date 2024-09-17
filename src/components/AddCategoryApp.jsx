import { useState } from "react";

export const AddCategoryApp = ({ onCategory }) => {
  const [inputValue, setsetInputValue] = useState("");
  const onInputChange = ({ target }) => {
    setsetInputValue(target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 0) return;
    onCategory(inputValue.trim());
    setsetInputValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      />
    </form>
  );
};
