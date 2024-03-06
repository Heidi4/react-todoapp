import styles from "./footer.module.css";

function Footer({ completedtodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Todos: {completedtodos} </span>
      <span className={styles.item}>Total todos: {totalTodos}</span>
    </div>
  );
}

export default Footer;
