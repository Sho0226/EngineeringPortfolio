import Head from 'next/head';
import { useState } from 'react';
import CharacterStats from '../components/CharacterStats';
import GameMenu from '../components/GameMenu';
import GameWorld from '../components/GameWorld';
import Messaging from '../components/Messaging';
import QuestBoard from '../components/QuestBoard';
import TimeLine from '../components/TimeLine';
import styles from './index.module.css';

const Home = () => {
  const [currentView, setCurrentView] = useState('world');

  const renderView = () => {
    switch (currentView) {
      case 'world':
        return <GameWorld />;
      case 'stats':
        return <CharacterStats />;
      case 'timeline':
        return <TimeLine />;
      case 'quests':
        return <QuestBoard />;
      case 'messages':
        return <Messaging />;
      default:
        return <GameWorld />;
    }
  };

  return (
    <div className={styles.gameContainer}>
      <Head>
        <title>Sho Katsumata`s RPG Portfolio</title>
        <meta name="description" content="Sho Katsumataのゲーム風ポートフォリオサイトです" />
      </Head>

      <main className={styles.gameMain}>{renderView()}</main>

      <GameMenu setCurrentView={setCurrentView} />

      <footer className={styles.gameFooter}>
        <div className={styles.copyright}>&copy; Sho Katsumata</div>
      </footer>
    </div>
  );
};

export default Home;
