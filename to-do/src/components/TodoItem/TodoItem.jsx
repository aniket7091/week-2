import styles from "./TodoItem.module.css";

function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <article
      className={`${styles.todo} ${
        todo.completed ? styles.completedTodo : ""
      }`}
    >
      <div className={styles.left}>
        <label className={styles.checkboxWrapper}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />

          <span className={styles.checkbox}>
            {todo.completed && "✓"}
          </span>
        </label>

        <div className={styles.taskContent}>
          <span
            className={`${styles.taskText} ${
              todo.completed ? styles.completed : ""
            }`}
          >
            {todo.text}
          </span>

          <div className={styles.meta}>
            <span className={styles.status}>
              <span className={styles.statusDot}></span>

              {todo.completed ? "Completed" : "In progress"}
            </span>

            <span className={styles.separator}>•</span>

            <span>
              {todo.completed ? "Nice work!" : "Keep going"}
            </span>
          </div>
        </div>
      </div>

      <button
        className={styles.delete}
        onClick={() => onDelete(todo.id)}
        aria-label="Delete task"
      >
        <span></span>
        <span></span>
      </button>
    </article>
  );
}

export default TodoItem;