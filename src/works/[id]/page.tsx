import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './WorkDetail.module.css';

const WorkDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // 注: 実際のアプリケーションでは、IDに基づいて作品データを取得する必要があります
  const getWorkData = (workId: string | string[] | undefined) => {
    // ここで実際のデータ取得ロジックを実装します
    // 例えば、APIリクエストや静的データの検索など
    console.log(`Fetching data for work ID: ${workId}`);
    return {
      title: `作品 ${workId}`,
      imageUrl: '/img/works-sample.jpg',
      description: `作品 ${workId} についての説明がここに入ります。`,
      url: 'https://example.com',
      role: 'デザイン・コーディング',
      purpose: 'サービスの認知と新規クライアントの獲得',
      target: 'ターゲットユーザーの説明',
      designDescription: 'デザインについての詳細な説明',
      codingDescription: 'コーディングについての詳細な説明',
    };
  };

  const workData = getWorkData(id);

  return (
    <article className={styles.article}>
      <div className={styles.articleInner}>
        <h2 className={styles.articleTitle}>{workData.title}</h2>
        <p className={styles.articleImg}>
          <Image src={workData.imageUrl} alt={workData.title} width={800} height={600} />
        </p>
        <div className={styles.articleBody}>
          <p>{workData.description}</p>
          <h3 className={styles.articleInfoTitle}>URL</h3>
          <p>
            <a href={workData.url} target="_blank" rel="noopener noreferrer">
              {workData.url}
            </a>
          </p>
          <h3 className={styles.articleInfoTitle}>担当</h3>
          <p>{workData.role}</p>
          <h3 className={styles.articleInfoTitle}>サイトの目的</h3>
          <p>{workData.purpose}</p>
          <h3 className={styles.articleInfoTitle}>ターゲット</h3>
          <p>{workData.target}</p>
          <h3 className={styles.articleInfoTitle}>デザインについて</h3>
          <p>{workData.designDescription}</p>
          <h3 className={styles.articleInfoTitle}>コーディングについて</h3>
          <p>{workData.codingDescription}</p>
        </div>
        <div className={styles.homeLink}>
          <Link href="/#works">Works一覧へ</Link>
        </div>
      </div>
    </article>
  );
};

export default WorkDetail;
