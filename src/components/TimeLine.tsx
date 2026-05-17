import { Award, Briefcase, GraduationCap, Laptop, Notebook, School, Trophy } from 'lucide-react';
import React from 'react';
import styles from './TimeLine.module.css';

interface TimelineItem {
  id: number;
  date: string;
  title: string;
  description: string;
  icon: 'trophy' | 'briefcase' | 'graduation' | 'award' | 'school' | 'laptop' | 'notebook';
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    date: '2022年4月',
    title: '東洋大学入学',
    description: `情報連携学部として入学
    初めてPCを持つ`,
    icon: 'school',
  },
  {
    id: 2,
    date: '2024年4月',
    title: 'プログラミングサークルに所属',
    description: `INIAD.tsに所属
    TypeScriptを通じてWeb開発を学ぶ`,
    icon: 'laptop',
  },
  {
    id: 3,
    date: '2024年7月',
    title: '【7月_Vol.8】ハッカソン技育CAMP2024 努力賞 受賞',
    description: 'バックエンドをメインに担当',
    icon: 'award',
  },
  {
    id: 4,
    date: '2024年8月',
    title: '株式会社GA technologies 1dayインターンシップ',
    description:
      'リアルとテックを融合した自社開発の高品質なプロダクトを学べる、即戦力エンジニア向けワークショップ',
    icon: 'briefcase',
  },
  {
    id: 5,
    date: '2024年8月',
    title: '株式会社アウトソーシングテクノロジー 3daysインターンシップ',
    description:
      '多様なエンジニアリング分野を体験し、キャリアの可能性を広げる3日間のプロジェクト型シミュレーションプログラム',
    icon: 'briefcase',
  },
  {
    id: 6,
    date: '2024年8月',
    title: '株式会社ジーニー 1dayインターンシップ',
    description:
      '広告配信システムの高速化に挑戦し、ボトルネック解消を目指す実践型バックエンドインターン',
    icon: 'briefcase',
  },
  {
    id: 7,
    date: '2024年9月',
    title: 'ARアドバンストテクノロジ株式会社 3daysインターンシップ',
    description: 'AWSを活用し、クラウドとデータでビジネス課題を解決する3日間の実践型プログラム',
    icon: 'briefcase',
  },
  {
    id: 8,
    date: '2024年9月',
    title: '株式会社メディアドゥ 3daysインターンシップ',
    description:
      '電子書籍配信システムのパフォーマンス改善に挑戦し、3日間で成果を発表する実践型インターン',
    icon: 'briefcase',
  },
  {
    id: 9,
    date: '2024年9月',
    title: '【9月_Vol.14】ハッカソン技育CAMP2024 最優秀賞 受賞',
    description: 'フロントエンドをメインに担当',
    icon: 'award',
  },
  {
    id: 10,
    date: '2024年12月',
    title: '技育博 vol.5',
    description: '【9月_Vol.14】ハッカソン技育CAMP2024 の成果物をブラッシュアップして展示',
    icon: 'award',
  },
  {
    id: 11,
    date: '2025年6月',
    title: '【6月_Vol.4】ハッカソン技育CAMP2025 参加',
    description: 'フロントエンドをメインに担当',
    icon: 'notebook',
  },
  {
    id: 12,
    date: '2026年3月',
    title: '東洋大学 卒業',
    description: '情報連携学部 卒業',
    icon: 'graduation',
  },
  {
    id: 13,
    date: '2026年4月',
    title: '株式会社PR TIMES 入社',
    description: 'ソフトウェアエンジニアとしてフロントエンド開発を担当',
    icon: 'briefcase',
  },
  {
    id: 14,
    date: '2026年5月',
    title: 'フロントエンドカンファレンス名古屋 2026 登壇',
    description:
      '「JSDOMの限界と実ブラウザテスト - VITEST BROWSER MODE実践」というタイトルで登壇',
    icon: 'trophy',
  },
];

const IconComponent: React.FC<{ icon: TimelineItem['icon'] }> = ({ icon }) => {
  switch (icon) {
    case 'trophy':
      return <Trophy className={styles.icon} />;
    case 'briefcase':
      return <Briefcase className={styles.icon} />;
    case 'graduation':
      return <GraduationCap className={styles.icon} />;
    case 'award':
      return <Award className={styles.icon} />;
    case 'school':
      return <School className={styles.icon} />;
    case 'laptop':
      return <Laptop className={styles.icon} />;
    case 'notebook':
      return <Notebook className={styles.icon} />;
    default:
      return null;
  }
};

const TimeLine: React.FC = () => {
  return (
    <div className={styles.timelineContainer}>
      <h2 className={styles.timelineTitle}>活動履歴</h2>
      <div className={styles.scroll}>
        <div className={styles.timeline}>
          {timelineData.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.timelineItem} ${index === 0 ? styles.current : ''}`}
            >
              <div className={styles.timelineItemContent}>
                <span className={styles.date}>{item.date}</span>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>
              <div className={styles.iconContainer}>
                <IconComponent icon={item.icon} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
