import React from "react";
import useInputState from "./hooks/useInputState";
// Called from TodoApp.js

function TodoForm({ addTodo }) {
  // useInputState manages the state of our text field
  // and returns with its current value and 2 functions
  const [value, handleChange, reset] = useInputState("");
  return (
    // When the enter key is pressed the form is submitted
    // and the value is passed to the addTodo function.
    // Then we reset the text field to empty and return.
    <form
      className="TodoForm"
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(value);
        reset();
      }}
    >
      {/* As the user types the handleChange function is called
       and the text field is updated */}
      <input
        type="text"
        value={value}
        placeholder="Type new todo and press enter"
        onChange={handleChange}
        label="Add New Todo"
        autoFocus={true}
      />
    </form>
  );
}
export default TodoForm;
