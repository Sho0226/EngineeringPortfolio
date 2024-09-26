import Link from 'next/link';
import styles from './Works.module.css';

const Works = () => {
  const projects = [
    {
      id: 1,
      name: 'ポートフォリオサイト',
      description: 'Next.jsで作成した個人ポートフォリオ',
      image: '/images/portfolio.jpg',
    },
    {
      id: 2,
      name: 'タスク管理アプリ',
      description: 'Reactとフックを使用したTodoアプリ',
      image: '/images/todo-app.jpg',
    },
    {
      id: 3,
      name: 'ブログプラットフォーム',
      description: 'フルスタックJavaScriptで構築したブログシステム',
      image: '/images/blog-platform.jpg',
    },
  ];

  return (
    <div className={styles.worksContainer}>
      <h2 className={styles.title}>Works</h2>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <Link href={`/works/${project.id}`} key={project.id} className={styles.projectCard}>
            <img src={project.image} alt={project.name} className={styles.projectImage} />
            <h3 className={styles.projectTitle}>{project.name}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Works;
