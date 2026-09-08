import styles from "./About.module.css";

function About() {
  return (
    <main className={styles.about}>
      <div className={styles.backgroundGlow}></div>

      <section className={styles.hero}>
        <div className={styles.badge}>
          <span className={styles.dot}></span>
          BUILT FOR PRODUCTIVITY
        </div>

        <h1>
          Turn your
          <span> ideas </span>
          into
          <br />
          <span>done.</span>
        </h1>

        <p className={styles.description}>
          A beautifully simple task manager designed to help you
          focus on what matters, organize your day, and make
          consistent progress without the clutter.
        </p>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <strong>01</strong>
            <span>Simple workflow</span>
          </div>

          <div className={styles.stat}>
            <strong>02</strong>
            <span>Focused experience</span>
          </div>

          <div className={styles.stat}>
            <strong>03</strong>
            <span>Built with React</span>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.featureCard}>
          <div className={styles.icon}>✦</div>
          <h3>Stay Focused</h3>
          <p>
            Keep your daily priorities clear and eliminate
            unnecessary distractions.
          </p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.icon}>✓</div>
          <h3>Get Things Done</h3>
          <p>
            Turn your tasks into small wins and build momentum
            throughout your day.
          </p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.icon}>◈</div>
          <h3>Simple by Design</h3>
          <p>
            No complicated dashboards. Just the tools you need
            to manage your work.
          </p>
        </div>
      </section>

      <section className={styles.techSection}>
        <p className={styles.techLabel}>POWERED BY</p>

        <div className={styles.techStack}>
          <span>React</span>
          <span>React Router</span>
          <span>CSS Modules</span>
          <span>JavaScript</span>
        </div>
      </section>
    </main>
  );
}

export default About;