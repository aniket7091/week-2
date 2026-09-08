import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.glow}></div>
      <div className={styles.grid}></div>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <span className={styles.status}></span>
            YOUR DAY, ORGANIZED
          </div>

          <h1>
            Make time for
            <br />
            <span>what matters.</span>
          </h1>

          <p className={styles.description}>
            Capture your tasks, clear your mind, and stay focused
            on the things that move you forward.
          </p>

          <div className={styles.actions}>
            <Link to="/todos" className={styles.primaryButton}>
              Start Planning
              <span>→</span>
            </Link>

            <Link to="/about" className={styles.secondaryButton}>
              Learn More
            </Link>
          </div>

          <div className={styles.trust}>
            <div className={styles.avatars}>
              <span>AK</span>
              <span>JD</span>
              <span>MK</span>
            </div>

            <p>
              Built for people who
              <strong> get things done.</strong>
            </p>
          </div>
        </div>

        <div className={styles.todoPreview}>
          <div className={styles.previewHeader}>
            <div>
              <span className={styles.smallLabel}>TODAY</span>
              <h3>My Tasks</h3>
            </div>

            <span className={styles.date}>09 SEP</span>
          </div>

          <div className={styles.progress}>
            <div className={styles.progressInfo}>
              <span>Daily progress</span>
              <strong>75%</strong>
            </div>

            <div className={styles.progressBar}>
              <div></div>
            </div>
          </div>

          <div className={styles.taskList}>
            <div className={styles.task}>
              <span className={`${styles.checkbox} ${styles.checked}`}>
                ✓
              </span>

              <div>
                <p className={styles.done}>Review project</p>
                <small>Completed</small>
              </div>
            </div>

            <div className={styles.task}>
              <span className={styles.checkbox}></span>

              <div>
                <p>Practice React</p>
                <small>Development</small>
              </div>
            </div>

            <div className={styles.task}>
              <span className={styles.checkbox}></span>

              <div>
                <p>Read for 30 minutes</p>
                <small>Personal</small>
              </div>
            </div>

            <div className={styles.task}>
              <span className={`${styles.checkbox} ${styles.checked}`}>
                ✓
              </span>

              <div>
                <p className={styles.done}>Morning workout</p>
                <small>Completed</small>
              </div>
            </div>
          </div>

          <Link to="/todos" className={styles.previewButton}>
            View all tasks
            <span>→</span>
          </Link>
        </div>
      </section>

      <section className={styles.stats}>
        <div>
          <strong>Simple</strong>
          <span>Clean workflow</span>
        </div>

        <div>
          <strong>Fast</strong>
          <span>Built with React</span>
        </div>

        <div>
          <strong>Focused</strong>
          <span>Less distraction</span>
        </div>

        <div>
          <strong>Free</strong>
          <span>Always available</span>
        </div>
      </section>
    </main>
  );
}

export default Home;