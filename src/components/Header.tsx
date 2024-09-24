import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <p className={styles.headerTitle}>Sho Katsumata</p>
        <p className={styles.headerSubtitle}>Portfolio</p>
      </div>
    </header>
  );
};

export default Header;
