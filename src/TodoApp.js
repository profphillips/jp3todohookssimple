import React, { useEffect } from "react";
import "./Style.css";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import useTodoState from "./hooks/useTodoState";
// Called from: index.js

// Might rewrite as a function when moving to a database call...
// function initialTodos() {
//   return JSON.parse(window.localStorage.getItem("todos") || "[]");
// }

function TodoApp() {
  // Grab any existing todos from the browser local storage. If none exist,
  // then set the initialTodos to be an empty array.
  const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
  // This returns our starting state and 4 functions to manipulate the state.
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
    initialTodos
  );
  // Any time the todos change then this hook will automatically be called
  // to update the local storage.
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="Wrapper">
      <h1>JP3 TODO HOOKS SIMPLIFIED</h1>
      <h2>Updated, styled, and simplified by JP ... work in progress...</h2>
      {/* Add a new Todo */}
      <TodoForm addTodo={addTodo} />
      {/* Display all of our Todos as a list */}
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
      />
    </div>
  );
}
export default TodoApp;
