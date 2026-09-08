import { useMemo, useState } from "react";
import TodoItem from "../../components/TodoItem/TodoItem";
import styles from "./Todos.module.css";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  const addTodo = () => {
    const text = input.trim();

    if (!text) return;

    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos((prevTodos) => [newTodo, ...prevTodos]);
    setInput("");
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => !todo.completed)
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const completedCount = todos.filter(
    (todo) => todo.completed
  ).length;

  const activeCount = todos.length - completedCount;

  const progress =
    todos.length === 0
      ? 0
      : Math.round((completedCount / todos.length) * 100);

  const filteredTodos = useMemo(() => {
    if (filter === "active") {
      return todos.filter((todo) => !todo.completed);
    }

    if (filter === "completed") {
      return todos.filter((todo) => todo.completed);
    }

    return todos;
  }, [todos, filter]);

  return (
    <main className={styles.todosPage}>
      <div className={styles.backgroundGlow}></div>

      <div className={styles.container}>
        {/* Header */}

        <header className={styles.header}>
          <div>
            <div className={styles.label}>
              <span></span>
              PRODUCTIVITY
            </div>

            <h1>
              My <span>Todo</span> List
            </h1>

            <p>
              Organize your day. Focus on what matters.
            </p>
          </div>

          <div className={styles.dateCard}>
            <span>TODAY</span>
            <strong>09</strong>
            <small>SEP 2026</small>
          </div>
        </header>

        {/* Stats */}

        <section className={styles.stats}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>◈</div>

            <div>
              <span>Total Tasks</span>
              <strong>{todos.length}</strong>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>○</div>

            <div>
              <span>In Progress</span>
              <strong>{activeCount}</strong>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>✓</div>

            <div>
              <span>Completed</span>
              <strong>{completedCount}</strong>
            </div>
          </div>

          <div className={styles.progressCard}>
            <div className={styles.progressHeader}>
              <span>Daily Progress</span>
              <strong>{progress}%</strong>
            </div>

            <div className={styles.progressBar}>
              <div
                style={{
                  width: `${progress}%`,
                }}
              ></div>
            </div>
          </div>
        </section>

        {/* Add Task */}

        <section className={styles.addSection}>
          <div className={styles.inputWrapper}>
            <span className={styles.plus}>+</span>

            <input
              type="text"
              placeholder="What needs to be done?"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>

          <button
            className={styles.addButton}
            onClick={addTodo}
          >
            Add Task
            <span>→</span>
          </button>
        </section>

        {/* Toolbar */}

        <section className={styles.toolbar}>
          <div className={styles.filters}>
            <button
              className={filter === "all" ? styles.activeFilter : ""}
              onClick={() => setFilter("all")}
            >
              All
              <span>{todos.length}</span>
            </button>

            <button
              className={
                filter === "active" ? styles.activeFilter : ""
              }
              onClick={() => setFilter("active")}
            >
              Active
              <span>{activeCount}</span>
            </button>

            <button
              className={
                filter === "completed"
                  ? styles.activeFilter
                  : ""
              }
              onClick={() => setFilter("completed")}
            >
              Completed
              <span>{completedCount}</span>
            </button>
          </div>

          {completedCount > 0 && (
            <button
              className={styles.clearButton}
              onClick={clearCompleted}
            >
              Clear completed
            </button>
          )}
        </section>

        {/* Todo List */}

        <section className={styles.todoList}>
          {filteredTodos.length === 0 ? (
            <div className={styles.empty}>
              <div className={styles.emptyIcon}>
                {filter === "completed" ? "✓" : "✦"}
              </div>

              <h3>
                {filter === "all"
                  ? "Your list is empty"
                  : filter === "active"
                  ? "All caught up!"
                  : "No completed tasks"}
              </h3>

              <p>
                {filter === "all"
                  ? "Add your first task and start getting things done."
                  : filter === "active"
                  ? "You've completed everything on your list."
                  : "Complete a task and it will appear here."}
              </p>

              {filter === "all" && (
                <button
                  className={styles.emptyButton}
                  onClick={() =>
                    document.querySelector("input")?.focus()
                  }
                >
                  Create your first task
                  <span>→</span>
                </button>
              )}
            </div>
          ) : (
            <>
              <div className={styles.listHeader}>
                <span>
                  {filter === "all"
                    ? "ALL TASKS"
                    : filter === "active"
                    ? "ACTIVE TASKS"
                    : "COMPLETED TASKS"}
                </span>

                <span>
                  {filteredTodos.length}{" "}
                  {filteredTodos.length === 1
                    ? "task"
                    : "tasks"}
                </span>
              </div>

              {filteredTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onDelete={deleteTodo}
                  onToggle={toggleTodo}
                />
              ))}
            </>
          )}
        </section>
      </div>
    </main>
  );
}

export default Todos;