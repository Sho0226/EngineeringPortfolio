import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2>Skills</h2>
      <ul className={styles.skillsList}>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Python</li>
        <li>SQL</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Git</li>
        <li>Docker</li>
        <li>AWS</li>
      </ul>
    </section>
  );
}
