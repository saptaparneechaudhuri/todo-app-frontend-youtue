import React, { useState, useContext } from "react";
import "./input.css";

// Context
import TodoContext from "../../context/TodoContext";

const Input = () => {
  const { addTodoItem } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState("");

  const hanldeInputValueChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue !== "") {
      // add todo item
      addTodoItem(inputValue);
    }

    setInputValue("");
  };
  return (
    <div className="input-container">
      <div className="input-icon"></div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={inputValue}
          placeholder="Create a new todo..."
          onChange={hanldeInputValueChange}
        />
      </form>
    </div>
  );
};

export default Input;
