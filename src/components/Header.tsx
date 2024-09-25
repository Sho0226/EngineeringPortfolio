import styles from './Header.module.css';

type GameMenuProps = {
  setCurrentView: React.Dispatch<React.SetStateAction<string>>;
};

const GameMenu: React.FC<GameMenuProps> = ({ setCurrentView }) => {
  return (
    <nav className={styles.gameMenu}>
      <button onClick={() => setCurrentView('world')}>About</button>
      <button onClick={() => setCurrentView('stats')}>Skills</button>
      <button onClick={() => setCurrentView('timeline')}>Timeline</button>
      <button onClick={() => setCurrentView('quests')}>Works</button>
      <button onClick={() => setCurrentView('messages')}>Contact</button>
    </nav>
  );
};

export default GameMenu;
