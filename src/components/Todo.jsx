import React, { useState } from "react";
import TodoItem from "./TodoItem";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function handleOnclick(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <div>
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
      {todos.map((item) => (
        <TodoItem key={item} item={item}/>
      ))}
    </div>
  );
}

export default Todo;
