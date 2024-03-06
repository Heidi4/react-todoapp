import React from "react";
import { useState } from "react";
import styles from "./form.module.css";

function Form({ todos, setTodos }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleOnclick(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className={styles.todoform} onSubmit={handleOnclick}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => {
            setTodo({ name: e.target.value, done: false });
          }}
          type="text"
          value={todo.name}
          placeholder="Enter todo item"
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}

export default Form;
