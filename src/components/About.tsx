import Image from 'next/image';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.inner}>
        <h2 className={styles.title}>about</h2>
        <div className={styles.profile}>
          <p className={styles.profileImg}>
            <Image src="/img/profile.jpg" alt="プロフィール画像" width={200} height={200} />
          </p>
          <div className={styles.profileBody}>
            <p>
              テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。
            </p>
            <p>
              テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
