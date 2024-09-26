import Header from '../components/Header';
import styles from './index.module.css';

const Home = () => {
  return (
    <div className={styles.gameContainer}>
      <Header />

      <main className={styles.gameMain}>
        <h1 className={styles.title}>Welocome to my Portfolio</h1>
        <br />
        <p className={styles.description}>各ページに移動して詳細をご覧ください。</p>
      </main>

      <footer className={styles.gameFooter}>
        <br />
        <div className={styles.copyright}>&copy; Sho Katsumata</div>
      </footer>
    </div>
  );
};

export default Home;
