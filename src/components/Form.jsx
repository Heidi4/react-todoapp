import React from "react";
import { useState } from "react";
import styles from "./form.module.css";

function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleOnclick(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <form className={styles.todoform}>
      <div className={styles.inputContainer}>
      <input
      className={styles.modernInput}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        type="text"
        value={todo}
        placeholder="Enter todo item"
      />
      <button className={styles.modernButton} onClick={handleOnclick}>Add</button>
      </div>
    </form>
  );
}

export default Form;
