import React from "react";
import Todo from "./Todo";
// Called from TodoApp.js

// Displays an unordered list of todo rows
function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  if (todos.length)
    // check that we have more than zero todos
    return (
      <div className="TodoList">
        <ul>
          {todos.map((todo, i) => (
            // <li key={i} style={{ background: i % 2 ? "#e8cebf" : "#ddaf94" }}>
            <li key={i} style={{ background: i % 2 ? "#cec" : "#ded" }}>
              <Todo
                {...todo}
                key={todo.id}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  return null;
}
export default TodoList;
