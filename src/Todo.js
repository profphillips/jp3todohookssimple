import React from "react";
import useToggleState from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";
// Called from: TodoList.js

// This represents a single todo line containing a checkbox, the todo task,
// and 2 buttons to delete or edit the task.
function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
  const [isEditing, toggle] = useToggleState(false);
  return (
    <div>
      {isEditing ? (
        <EditTodoForm
          editTodo={editTodo}
          id={id}
          task={task}
          toggleEditForm={toggle}
        />
      ) : (
        // span for the entire task line to wrap elements and later add style
        <span>
          <input
            type="checkbox"
            tabIndex={-1}
            checked={completed}
            // onClick={() => toggleTodo(id)} // replaced by onChange
            onChange={() => toggleTodo(id)}
          />
          <span
            className="TodoTask"
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </span>
          <span className="TodoButtonGroup">
            <button
              className="TodoButton"
              aria-label="Delete"
              onClick={() => removeTodo(id)}
            >
              Delete
            </button>
            <button className="TodoButton" aria-label="Edit" onClick={toggle}>
              Edit
            </button>
          </span>
        </span>
      )}
    </div>
  );
}
export default Todo;
