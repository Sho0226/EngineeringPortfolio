import Head from 'next/head';
import Header from '../components/Header';
import styles from './index.module.css';

const Home = () => {
  return (
    <div className={styles.gameContainer}>
      <Header />
      <Head>
        <title>Sho Katsumata`s Portfolio</title>
        <meta name="description" content="Sho Katsumataのゲーム風ポートフォリオサイトです" />
      </Head>

      <main className={styles.gameMain}>
        <h1>Welcome to Sho Katsumata`s Portfolio</h1>
        <p>各ページに移動して詳細をご覧ください。</p>
      </main>

      <footer className={styles.gameFooter}>
        <div className={styles.copyright}>&copy; Sho Katsumata</div>
      </footer>
    </div>
  );
};

export default Home;
