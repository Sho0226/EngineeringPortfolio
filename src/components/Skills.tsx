import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2>Skills</h2>
      <ul className={styles.skillsList}>
        <li>TypeScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Python</li>
        <li>Django</li>
        <li>SQL</li>
        <li>Go</li>
        <li>Ruby</li>
        <li>PostgreSQL</li>
        <li>CSS</li>
        <li>Git</li>
        <li>Docker</li>
        <li>AWS</li>
      </ul>
    </section>
  );
}
