import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './WorkDetail.module.css';

// この部分は実際のデータソース（データベースやAPIなど）に置き換えてください
const projectsData = [
  {
    id: 1,
    name: 'ポートフォリオサイト',
    description: 'Next.jsで作成した個人ポートフォリオ',
    image: '/images/portfolio.jpg',
    fullDescription:
      'このポートフォリオサイトはNext.jsを使用して構築されました。レスポンシブデザインを採用し、ダークモードにも対応しています。',
    technologies: ['Next.js', 'React', 'CSS Modules'],
  },
  {
    id: 2,
    name: 'タスク管理アプリ',
    description: 'Reactとフックを使用したTodoアプリ',
    image: '/images/todo-app.jpg',
    fullDescription:
      'このTodoアプリはReactとReact Hooksを使用して開発されました。ユーザーはタスクの追加、編集、削除、完了のマークが可能です。',
    technologies: ['React', 'React Hooks', 'LocalStorage'],
  },
  {
    id: 3,
    name: 'ブログプラットフォーム',
    description: 'フルスタックJavaScriptで構築したブログシステム',
    image: '/images/blog-platform.jpg',
    fullDescription:
      'このブログプラットフォームはNode.js、Express、MongoDB、Reactを使用したフルスタックJavaScriptアプリケーションです。ユーザー認証、記事の作成・編集・削除機能を実装しています。',
    technologies: ['Node.js', 'Express', 'MongoDB', 'React', 'JWT'],
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
      <p className={styles.description}>{project.fullDescription}</p>
      <h2 className={styles.subtitle}>使用技術</h2>
      <ul className={styles.techList}>
        {project.technologies.map((tech, index) => (
          <li key={index} className={styles.techItem}>
            {tech}
          </li>
        ))}
      </ul>
      <Link href="/works" className={styles.backLink}>
        作品一覧に戻る
      </Link>
    </div>
  );
}
