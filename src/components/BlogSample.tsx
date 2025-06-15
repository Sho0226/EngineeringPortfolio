import Link from 'next/link';
import type { Article } from '../api/zenn';
import styles from './Blog.module.css';

type Props = {
  articles: Article[];
};

const Blog = ({ articles }: Props) => {
  return (
    <div className={styles.worksContainer}>
      <h2 className={styles.title}>Blog</h2>
      <div className={styles.projectGrid}>
        {articles.map((article) => (
          <Link href={`https://zenn.dev/${article.path}`} key={article.id} passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <div className={styles.projectCard}>
                <div className={styles.projectImage}>{article.emoji}</div>
                <h3 className={styles.projectTitle}>{article.title}</h3>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
