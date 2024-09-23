import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Skills from '../components/Skills';
import Works from '../components/Works';
import styles from './index.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hanako Yamada ポートフォリオ</title>
        <meta name="description" content="Hanako Yamadaのポートフォリオサイトです" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Navigation />

      <main className={styles.main}>
        <Works />
        <Skills />
        <About />
        <Contact />
      </main>

      <footer className={styles.footer}>
        <div className={styles.copyright}>&copy; Hanako Yamada</div>
      </footer>

      <div className={styles.pageTop} id="js-page-top">
        <span className="material-icons-outlined">expand_less</span>
      </div>
    </div>
  );
};

export default Home;
