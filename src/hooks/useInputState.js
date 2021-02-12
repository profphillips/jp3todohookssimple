import { useState } from "react";
// Called from TodoForm.js and EditTodoForm.js

// export default (initialVal) => { // this line no longer seems to work
// const useInputState = (initialVal) => { // this line does work

// This maintains the temporary state of a text field. The functions
// update the state when a value changes and can reset the state to empty.
function useInputState(initialVal) {
  const [value, setValue] = useState(initialVal);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue("");
  };

  return [value, handleChange, reset];
}

export default useInputState;
