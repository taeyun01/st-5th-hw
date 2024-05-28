import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { textsReducer } from "../redux/slices/textsSlice";

function TextInput() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setInputValue("");
      dispatch(
        textsReducer({
          inputValue,
        })
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter text"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TextInput;
