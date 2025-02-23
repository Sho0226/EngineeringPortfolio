import { useRouter } from 'next/router';
import { basePath } from '../../../next.config';
import styles from './WorkDetail.module.css';

// この部分は実際のデータソース（データベースやAPIなど）に置き換えてください
const projectsData = [
  {
    id: 1,
    name: 'Othello',
    image: `${basePath}/imgs/othello.png`,
    fullDescription:
      'このオセロゲームは、TypeScriptとReactを実践的に学ぶために開発を始めました。ゲームのロジックを構築することで、プログラミングの基礎と応用力を身につけることを目指します。',
    technologies: ['TypeScript', 'Next.js', 'React', 'CSS Modules'],
    Deploy: 'https://sho0226.github.io/NewOthello/',
    sourceCode: 'https://github.com/Sho0226/NewOthello/',
  },
  {
    id: 2,
    name: 'Minesweeper',
    image: `${basePath}/imgs/minesweeper.png`,
    fullDescription:
      'このマインスイーパーは、TypeScriptとReactを実践的に学ぶために開発を始めました。ゲームのロジックを構築することで、プログラミングの基礎と応用力を身につけることを目指します。',
    technologies: ['TypeScript', 'Next.js', 'React', 'CSS Modules'],
    Deploy: 'https://sho0226.github.io/minesweeper/',
    sourceCode: 'https://github.com/Sho0226/minesweeper/',
  },
  {
    id: 3,
    name: 'Tetris',
    image: `${basePath}/imgs/tetris.png`,
    fullDescription:
      'このテトリスは、TypeScriptとReactを実践的に学ぶために開発を始めました。ゲームのロジックを構築することで、プログラミングの基礎と応用力を身につけることを目指します。',
    technologies: ['TypeScript', 'Next.js', 'React', 'CSS Modules'],
    Deploy: 'https://sho0226.github.io/Tetris/',
    sourceCode: 'https://github.com/Sho0226/Tetris/',
  },
  {
    id: 4,
    name: 'Breaking-blocks',
    image: `${basePath}/imgs/block.png`,
    fullDescription:
      'このブロック崩しは、TypeScriptとReactを実践的に学ぶために開発を始めました。ゲームのロジックを構築することで、プログラミングの基礎と応用力を身につけることを目指します。',
    technologies: ['TypeScript', 'Next.js', 'React', 'CSS Modules'],
    Deploy: 'https://sho0226.github.io/Breaking-blocks/',
    sourceCode: 'https://github.com/Sho0226/Breaking-blocks/',
  },
  {
    id: 5,
    name: 'Chess',
    image: `${basePath}/imgs/chess.png`,
    fullDescription:
      'このチェスは、TypeScriptとReactを実践的に学ぶために開発を始めました。ゲームのロジックを構築することで、プログラミングの基礎と応用力を身につけることを目指します。',
    technologies: ['TypeScript', 'Next.js', 'React', 'CSS Modules'],
    Deploy: 'https://sho0226.github.io/Chess/',
    sourceCode: 'https://github.com/Sho0226/Chess/',
  },
  {
    id: 6,
    name: 'LightsOut',
    image: `${basePath}/imgs/lightsout.png`,
    fullDescription:
      'このライツアウトは、TypeScriptとReactを実践的に学ぶために開発を始めました。ゲームのロジックを構築することで、プログラミングの基礎と応用力を身につけることを目指します。',
    technologies: ['TypeScript', 'Next.js', 'React', 'CSS Modules'],
    Deploy: 'https://sho0226.github.io/LightsOut/',
    sourceCode: 'https://github.com/Sho0226/LightsOut/',
  },
  {
    id: 7,
    name: 'TodoList',
    image: `${basePath}/imgs/todo.png`,
    fullDescription:
      'このTodoListは、TypeScriptをフルスタックで活用するための学習プロジェクトとして作成しました。フロントエンドからバックエンドまで、幅広い技術を実践的に習得することを目的としています。現在JWTとBcyptを用いて認証機能を追加中',
    technologies: [
      'TypeScript',
      'Next.js',
      'React',
      'CSS Modules',
      'Fastify',
      'Prisma',
      'PostgreSQL',
      'Aspida',
    ],
    Deploy: '工事中/https://todolist-6aet.onrender.com/',
    sourceCode: 'https://github.com/Sho0226/TodoList/',
  },
  {
    id: 8,
    name: 'AIHeadlines',
    image: `${basePath}/imgs/AIHeadlines.png`,
    fullDescription:
      'AIHeadlinesは、AIを活用して個人に最適化されたニュースを提供するプラットフォームとして開発しました。ユーザーの好みに基づいたキーワード検索やおすすめ記事を通じて、よりパーソナライズされたニュース体験を提供します。',
    technologies: [
      'TypeScript',
      'Next.js',
      'React',
      'CSS Modules',
      'Fastify',
      'Prisma',
      'PostgreSQL',
      'Aspida',
    ],
    Deploy: 'https://aiheadlines.onrender.com/',
    sourceCode: 'https://github.com/Sho0226/AIHeadlines',
  },
  {
    id: 9,
    name: 'Chronicle',
    image: `${basePath}/imgs/Chronicle.png`,
    fullDescription:
      '【7月_Vol.8】ハッカソン技育CAMP2024の出場作品 努力賞受賞<br>青空文庫の名作小説を、新しい形で体験できるアプリ。<br>AIが各シーンにぴったりの情景を描写し、合成音声で物語を読み上げます。<br>視覚と聴覚を融合した、没入感のある読書体験を提供します。',
    technologies: [
      'TypeScript',
      'Next.js',
      'React',
      'CSS Modules',
      'Fastify',
      'Prisma',
      'PostgreSQL',
      'Aspida',
    ],
    sourceCode: 'https://todolist-6aet.onrender.com/',
  },
  {
    id: 10,
    name: '花火大会オンライン',
    image: `${basePath}/imgs/hanabi.png`,
    fullDescription:
      '【9月_Vol.14】ハッカソン技育CAMP2024の出場作品 最優秀賞受賞<br>ユーザーがオンライン上で花火玉を自作し、共有されたルームで自分の作った花火を打ち上げ、仮想空間で楽しむことができます。リアルタイムで他の参加者と共に、独自の花火を通じた一体感を体験できます。',
    technologies: [
      'TypeScript',
      'Next.js',
      'React',
      'CSS Modules',
      'Fastify',
      'Prisma',
      'PostgreSQL',
      'Aspida',
    ],
    sourceCode: 'https://github.com/Sho0226/Fireworks-Display-Online',
  },
  {
    id: 11,
    name: 'ポケモン図鑑',
    image: `${basePath}/imgs/pokemon.png`,
    fullDescription: 'PokéAPIを用いてアウトプット中心にReact開発をしました。',
    technologies: ['JavaScript', 'React', 'PokéAPI'],
    Deploy: 'https://sho0226.github.io/pokemon-app/',
    sourceCode: 'https://github.com/Sho0226/Fireworks-Display-Online',
    note: 'https://qiita.com/Sho0226/items/c6d497c6f62ff68399fa',
  },
  {
    id: 12,
    name: 'Fullstack Template',
    image: `${basePath}/imgs/template.png`,
    fullDescription: '',
    technologies: [],
    Deploy: '',
    sourceCode: '',
    note: '',
  },
];

export default function WorkDetail() {
  const router = useRouter();
  const { id } = router.query;
  const project = projectsData.find((p) => p.id === Number(id));

  if (!project) {
    return <div>プロジェクトが見つかりません</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{project.name}</h1>
      <img src={project.image} alt={project.name} className={styles.image} />
      <p
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: project.fullDescription }}
      />
      <h2 className={styles.subtitle}>使用技術</h2>
      <ul className={styles.techList}>
        {project.technologies.map((tech, index) => (
          <li key={index} className={styles.techItem}>
            {tech}
          </li>
        ))}
      </ul>
      {project.sourceCode && (
        <>
          <h2 className={styles.source}>ソースコード</h2>
          <p className={styles.sourceCode}>
            <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
              {project.sourceCode}
            </a>
          </p>
        </>
      )}
      {project.Deploy !== null && project.Deploy?.trim() !== '' && (
        <>
          <h2 className={styles.deploy}>デプロイ先</h2>
          <p className={styles.deployCode}>
            <a href={project.Deploy} target="_blank" rel="noopener noreferrer">
              {project.Deploy}
            </a>
          </p>
        </>
      )}

      {project.note !== null && project.note?.trim() !== '' && (
        <>
          <h2 className={styles.note}>投稿記事</h2>
          <p className={styles.noteURL}>
            <a href={project.note} target="_blank" rel="noopener noreferrer">
              {project.note}
            </a>
          </p>
        </>
      )}

      <button onClick={() => router.push('/works')} className={styles.backLink}>
        戻る
      </button>
    </div>
  );
}
