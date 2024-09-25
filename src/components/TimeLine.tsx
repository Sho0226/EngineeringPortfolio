import { Award, Briefcase, GraduationCap, Trophy } from 'lucide-react';
import React from 'react';
import styles from './TimeLine.module.css';

interface TimelineItem {
  id: number;
  date: string;
  title: string;
  description: string;
  icon: 'trophy' | 'briefcase' | 'graduation' | 'award';
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    date: '2024年4月',
    title: '株式会社テックイノベーション入社',
    description: 'フルスタックエンジニアとして入社',
    icon: 'briefcase',
  },
  {
    id: 2,
    date: '2023年9月',
    title: 'フリーランスエンジニア活動開始',
    description: 'Webアプリケーション開発プロジェクトに参加',
    icon: 'briefcase',
  },
  {
    id: 3,
    date: '2023年3月',
    title: '株式会社テックスタート退職',
    description: '2年間のフロントエンド開発経験',
    icon: 'briefcase',
  },
  {
    id: 4,
    date: '2021年4月',
    title: '株式会社テックスタート入社',
    description: 'フロントエンドエンジニアとして入社',
    icon: 'briefcase',
  },
  {
    id: 5,
    date: '2021年3月',
    title: '大学卒業',
    description: '情報工学部 優秀卒業生賞受賞',
    icon: 'graduation',
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
    default:
      return null;
  }
};

const TimeLine: React.FC = () => {
  return (
    <div className={styles.timelineContainer}>
      <h2 className={styles.timelineTitle}>活動履歴</h2>
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
  );
};

export default TimeLine;
