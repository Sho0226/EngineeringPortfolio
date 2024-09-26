import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './About.module.css';

export default function About() {
  const { basePath } = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.worldSection}>
        <h1 className={styles.title}>Sho Katsumata&apos;s Portfolio</h1>
      </div>
      <div className={styles.profileSection}>
        <div className={styles.profileImage}>
          <Image
            src={`${basePath}/imgs/profile.jpg`}
            alt="Sho Katsumata"
            width={200}
            height={200}
            className={styles.profilePicture}
          />
        </div>
        <div className={styles.profileInfo}>
          <h2 className={styles.profileName}>Sho Katsumata</h2>
          <p className={styles.profileTitle}>Full-stack Developer</p>
          <div className={styles.profileDescription}>
            <p>東洋大学情報連携学部で、プログラミング、数理、コミュニケーションを集中的に学習。</p>
            <p> 各学年での主な成果：</p>
            <ul>
              <li>
                1年次：Python、HTML、CSS、JavaScriptの基礎を習得。チームでのWebサービス開発を経験。
              </li>
              <li>2年次：AI活用やPythonによるデータ解析、Gitによるソース管理を実践。</li>
              <li>
                3年次：プログラミングサークル「INIAD.ts」に所属し、TypeScriptを通じてモダンWeb開発に取り組む。
              </li>
            </ul>
            <p>
              IoT時代に必要なOS、ネットワーク、コンピュータ・サイエンスの体系的な知識を学び、
              UXデザインに関する実践的スキルを習得。ユーザー体験の向上を目指した設計を学習中。
            </p>
          </div>
        </div>
      </div>
      <div className={styles.pixelCharacter}>
        <Image src={`${basePath}/imgs/frog.png`} alt="Pixel Character" width={64} height={64} />
      </div>
    </div>
  );
}
