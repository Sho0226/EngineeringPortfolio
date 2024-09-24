import Link from 'next/link';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.gnav}>
      <div className={styles.gnavInner}>
        <ul className={styles.gnavList}>
          <li className={styles.gnavItem}>
            <Link href="#works">works</Link>
          </li>
          <li className={styles.gnavItem}>
            <Link href="#skills">skill</Link>
          </li>
          <li className={styles.gnavItem}>
            <Link href="#about">about</Link>
          </li>
          <li className={styles.gnavItem}>
            <Link href="#contact">contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
