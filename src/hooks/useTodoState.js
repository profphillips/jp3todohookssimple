import { useState } from "react";
import { v4 as uuid } from "uuid";
// Called from TodoApp.js

// export default (initialTodos) => { // this no longer works
// const useTodoState = (initialTodos) => { // this does work

// initialTodos come from TodoApp.js
function useTodoState(initialTodos) {
  const [todos, setTodos] = useState(initialTodos);

  // return an object containing the todos array and the functions to work on it
  return {
    todos,
    addTodo: (newTodoText) => {
      // unwrap the todos array, add a new todo object on the end, and set the updated state
      setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
    },
    removeTodo: (todoId) => {
      // retrieve all of the todos except the ones matching todoId
      const updatedTodos = todos.filter((todo) => todo.id !== todoId);
      setTodos(updatedTodos);
    },
    toggleTodo: (todoId) => {
      // loop through each todo and toggle the completed property if matching todoId
      const updatedTodos = todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos);
    },
    editTodo: (todoId, newTask) => {
      // loop through each todo and update the task property if matching todoId
      const updatedTodos = todos.map((todo) =>
        todo.id === todoId ? { ...todo, task: newTask } : todo
      );
      setTodos(updatedTodos);
    },
  };
}

export default useTodoState;
