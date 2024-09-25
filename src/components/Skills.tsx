import {
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from 'chart.js';
import React from 'react';
import { Radar } from 'react-chartjs-2';
import styles from './Skills.module.css';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

type SkillLevels = {
  [key: string]: number;
};

type SkillCategories = {
  [key: string]: SkillLevels;
};

const SkillChart: React.FC = () => {
  const skills: SkillCategories = {
    frontend: {
      TypeScript: 90,
      React: 85,
      'Next.js': 80,
      CSS: 80,
    },
    backend: {
      'Node.js': 50,
      Python: 70,
      Django: 50,
      Prisma: 70,
      SQL: 50,
      Ruby: 30,
      Go: 40,
    },
    DevOps: { AWS: 50, Git: 85, Docker: 65 },
  };

  const allSkills = Object.values(skills).flatMap(Object.entries);
  const skillNames = allSkills.map(([name]) => name);
  const skillLevels = allSkills.map(([, level]) => level);

  const data = {
    labels: skillNames,
    datasets: [
      {
        label: 'スキルレベル',
        data: skillLevels,
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
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          stepSize: 20,
          backdropColor: 'rgba(0, 0, 0, 0)',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const descriptions = [
    '30%~触ったことがある',
    '50%~調べれば扱うことができる',
    '80%~よく普段から触っている',
  ].join('\n'); // 改行を追加

  return (
    <div className={styles.chartContainer}>
      <div className={styles.title}>
        <h2>Skill Chart</h2>
      </div>

      <Radar data={data} options={options} />
      <div className={styles.categoryTitle}>
        <div className={styles.skillDescription}>
          <p>{descriptions}</p>
        </div>
        {Object.entries(skills).map(([category, categorySkills]) => (
          <div key={category} className={styles.categorySection}>
            <h3>{category}</h3>

            {Object.entries(categorySkills).map(([skill, level]) => (
              <div key={skill} className={styles.skillItem}>
                <span className={styles.skillName}>{skill}</span>
                <div className={styles.skillBar}>
                  <div className={styles.skillLevel} style={{ width: `${level}%` }} />
                </div>
                <span className={styles.skillPercentage}>{level}%</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillChart;
