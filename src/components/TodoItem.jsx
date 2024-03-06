import React from "react";
import styles from "./todoitem.module.css";
function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
function handleClick() {
  console.log("Clicked")
}

  // jsx
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
       <span onClick={() => handleClick(item.name)}>{item.name}</span> 
        <span>
          <button
            className={styles.deleteBtn}
            onClick={() => handleDelete(item)}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}

export default TodoItem;
