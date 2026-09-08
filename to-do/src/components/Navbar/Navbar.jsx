import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        Todo<span>App</span>
      </div>

      <div className={styles.links}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.active : ""
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/todos"
          className={({ isActive }) =>
            isActive ? styles.active : ""
          }
        >
          Todos
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? styles.active : ""
          }
        >
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;