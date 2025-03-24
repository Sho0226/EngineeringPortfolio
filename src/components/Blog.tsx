import Link from 'next/link';
import { basePath } from '../../next.config';
import styles from './Blog.module.css';

const Blog = () => {
  const projects = [
    {
      blog: 'https://qiita.com/Sho0226/items/c6d497c6f62ff68399fa',
      name: 'ポケモン図鑑',
      image: `${basePath}/imgs/pokemon_blog.png`,
    },
    {
      blog: 'https://qiita.com/Sho0226/items/f54f26de793419ad6b4d',
      name: '改善',
      image: `${basePath}/imgs/type_blog.png`,
    },
    {
      blog: 'https://zenn.dev/sho0226/articles/8f8e130371b117',
      name: 'Edge Runtime 環境で始める Next.js + Hono + Supabase + Prisma 開発',
      image: `${basePath}/imgs/template_blog.png`,
    },
  ];

  return (
    <div className={styles.worksContainer}>
      <h2 className={styles.title}>Blog</h2>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <Link href={project.blog} key={project.blog} passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <div className={styles.projectCard}>
                <img src={project.image} alt={project.name} className={styles.projectImage} />
                <h3 className={styles.projectTitle}>{project.name}</h3>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
