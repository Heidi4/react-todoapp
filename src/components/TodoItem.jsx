import React from "react";
import styles from "./todoitem.module.css";
function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Deleted", item);
    setTodos(todos.filter((todo) => todo !== item)
    )
    
  }
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {item}
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
