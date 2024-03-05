import React from "react";
import { useState } from "react";

function Form({todos, setTodos}) {
  const [todo, setTodo] = useState("");

  function handleOnclick(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <form>
      <input
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        type="text"
        value={todo}
      />
      <button onClick={handleOnclick}>Add</button>
    </form>
  );
}

export default Form;
