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
            src={`${basePath}/imgs/profile.jpeg`}
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
            <p>株式会社PR TIMESに所属するソフトウェアエンジニア。Webのパフォーマンスや信頼性に関心があります。</p>
            <p>学生時代はプログラミングサークルでの活動、複数のハッカソン、長期インターンシップを通じて、TypeScriptを中心としたモダンなWeb開発の実践的スキルを磨きました。</p>
            <p>現在は、ユーザーに価値を届けるプロダクト開発に取り組んでいます。</p>
          </div>
        </div>
      </div>
      <div className={styles.pixelCharacter}>
        <Image src={`${basePath}/imgs/frog.png`} alt="Pixel Character" width={64} height={64} />
      </div>
    </div>
  );
}
