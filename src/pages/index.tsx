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
        <title>Portfolio</title>
        <meta name="description" content="Sho Katsumataのポートフォリオサイトです" />
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
        <div className={styles.copyright}>&copy; Sho Kastumata</div>
      </footer>
    </div>
  );
};

export default Home;
