import Head from 'next/head';
import { useState } from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Skills from '../components/Skills';
import TimeLine from '../components/TimeLine';
import Works from '../components/Works';
import styles from './index.module.css';

const Home = () => {
  const [currentView, setCurrentView] = useState('world');

  const renderView = () => {
    switch (currentView) {
      case 'world':
        return <About />;
      case 'stats':
        return <Skills />;
      case 'timeline':
        return <TimeLine />;
      case 'quests':
        return <Works />;
      case 'messages':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className={styles.gameContainer}>
      <Header setCurrentView={setCurrentView} />
      <Head>
        <title>Sho Katsumata`s RPG Portfolio</title>
        <meta name="description" content="Sho Katsumataのゲーム風ポートフォリオサイトです" />
      </Head>

      <main className={styles.gameMain}>{renderView()}</main>

      <footer className={styles.gameFooter}>
        <div className={styles.copyright}>&copy; Sho Katsumata</div>
      </footer>
    </div>
  );
};

export default Home;
