import React from "react";
import useInputState from "./hooks/useInputState";
// Called from: Todo.js

// Allows the user to edit any selected todo task. When the todo
// Edit button is clicked then a text field is toggled on with
// the current task showing. The user makes changes and presses
// Enter to submit the form. The editTodo function is then called
// with the new task value.
function EditTodoForm({ id, task, editTodo, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <input
        type="text"
        margin="normal"
        value={value}
        onChange={handleChange}
        autoFocus
        style={{ color: "blue", width: "80%" }}
      />
    </form>
  );
}
export default EditTodoForm;
