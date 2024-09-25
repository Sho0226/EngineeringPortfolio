import Link from 'next/link';
import styles from './QuestBoard.module.css';

const QuestBoard = () => {
  const quests = [
    { id: 1, name: 'Project Alpha', difficulty: 'Easy', reward: 'Experience in React' },
    { id: 2, name: 'Project Beta', difficulty: 'Medium', reward: 'Mastery of Next.js' },
    { id: 3, name: 'Project Gamma', difficulty: 'Hard', reward: 'Full-stack expertise' },
  ];

  return (
    <div className={styles.questBoard}>
      <h2>Quest Board</h2>
      <div className={styles.questList}>
        {quests.map((quest) => (
          <Link href={`/quests/${quest.id}`} key={quest.id} className={styles.questItem}>
            <h3>{quest.name}</h3>
            <p>Difficulty: {quest.difficulty}</p>
            <p>Reward: {quest.reward}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuestBoard;
