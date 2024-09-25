import {
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import styles from './CharacterStats.module.css';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const CharacterStats = () => {
  const skills = {
    フロントエンド: {
      React: 85,
      'Next.js': 75,
      TypeScript: 80,
      CSS: 80,
    },
    バックエンド: {
      'Node.js': 70,
      Python: 65,
      Django: 60,
      SQL: 75,
      Go: 50,
      Ruby: 55,
    },
    DevOps: {
      Git: 85,
      Docker: 65,
      AWS: 60,
      PostgreSQL: 70,
    },
  };

  type SkillCategories = 'フロントエンド' | 'バックエンド' | 'DevOps';

  const getAverageSkill = (category: SkillCategories) => {
    const values = Object.values(skills[category] as Record<string, number>);
    return values.reduce((a, b) => a + b, 0) / values.length;
  };

  const data = {
    labels: ['フロントエンド', 'バックエンド', 'DevOps'],
    datasets: [
      {
        label: 'スキルレベル',
        data: [
          getAverageSkill('フロントエンド'),
          getAverageSkill('バックエンド'),
          getAverageSkill('DevOps'),
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>キャラクターステータス</h2>
      <div className={styles.chartContainer}>
        <Radar data={data} options={options} />
      </div>
      {Object.entries(skills).map(([category, categorySkills]) => (
        <div key={category} className={styles.categoryContainer}>
          <h3 className={styles.categoryTitle}>{category}</h3>
          <div className={styles.skillsGrid}>
            {Object.entries(categorySkills).map(([skill, level]) => (
              <div key={skill} className={styles.skillItem}>
                <span className={styles.skillName}>{skill}</span>
                <div className={styles.skillBar}>
                  <div
                    className={styles.skillBarFill}
                    style={{ width: `${level}%` }}
                    role="progressbar"
                    aria-valuenow={level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharacterStats;
