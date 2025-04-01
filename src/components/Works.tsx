import Link from 'next/link';
import { basePath } from '../../next.config';
import styles from './Works.module.css';

const Works = () => {
  const projects = [
    {
      id: 1,
      name: 'Othello',
      description: 'Next.jsで作成したオフラインオセロ',
      image: `${basePath}/imgs/othello.png`,
    },
    {
      id: 2,
      name: 'Minesweeper',
      description: 'Next.jsで作成したマインスイーパー',
      image: `${basePath}/imgs/minesweeper.png`,
    },
    {
      id: 3,
      name: 'Tetris',
      description: 'Next.jsで作成したテトリス',
      image: `${basePath}/imgs/tetris.png`,
    },
    {
      id: 4,
      name: 'Breaking-Blocks',
      description: 'Next.jsで作成したブロック崩し',
      image: `${basePath}/imgs/block.png`,
    },
    {
      id: 5,
      name: 'Chess',
      description: 'Next.jsで作成したチェス',
      image: `${basePath}/imgs/chess.png`,
    },
    {
      id: 6,
      name: 'LightsOut',
      description: 'Next.jsで作成した点灯ゲーム',
      image: `${basePath}/imgs/lightsout.png`,
    },
    {
      id: 7,
      name: 'TodoList',
      description: 'Full-Stack TypeScriptを用いたTodoList',
      image: `${basePath}/imgs/todo.png`,
    },
    {
      id: 8,
      name: 'AIHeadlines',
      description: 'AIを用いて最適化されたNEWSを提供するPlatform',
      image: `${basePath}/imgs/AIHeadlines.png`,
    },
    {
      id: 9,
      name: 'Chronicle',
      description: '【7月_Vol.8】ハッカソン技育CAMP2024の出場作品',
      image: `${basePath}/imgs/Chronicle.png`,
    },
    {
      id: 10,
      name: '花火大会オンライン',
      description: '【9月_Vol.14】ハッカソン技育CAMP2024の出場作品',
      image: `${basePath}/imgs/hanabi.png`,
    },
    {
      id: 11,
      name: 'ポケモン図鑑',
      description: 'PokéAPIを用いたReact開発',
      image: `${basePath}/imgs/pokemon.png`,
    },
    {
      id: 12,
      name: 'fullstack Template',
      description: 'モダンな技術を使ったフルスタックフレームワーク',
      image: `${basePath}/imgs/template.png`,
    },
    {
      id: 13,
      name: 'TsDaily',
      description: '習慣的に学習するための勉強アプリ',
      image: `${basePath}/imgs/portfolio.png`,
    },
  ];

  return (
    <div className={styles.worksContainer}>
      <h2 className={styles.title}>Works</h2>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <Link href={`/works/${project.id}?view=quests`} key={project.id}>
            <div className={styles.projectCard}>
              <img src={project.image} alt={project.name} className={styles.projectImage} />
              <h3 className={styles.projectTitle}>{project.name}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Works;
