import React from 'react';
import styles from './style.module.scss';

const Roadmap: React.FC = () => {
  return (
    <div className={styles.roadmap}>
      <h2 className={styles.title}>Roadmap</h2>
      <div className={styles.roadmapGrid}>
        <div className={styles.roadmapItem}>
          <h3 className={styles.itemTitle}>Q2 2024: Platform Enhancements</h3>
          <ul className={styles.taskList}>
            {[
              "Improve stability and scalability.",
              "Redesign UI/UX for better usability.",
              "Enhance security with MFA and audits."
            ].map((task, index) => (
              <li key={index} className={styles.task}>
                <img src="/check-square-fill.svg" alt="Completed" className={styles.checkmark} />
                <span className={styles.taskDescription}>{task}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.roadmapItem}>
          <h3 className={styles.itemTitle}>Q3 2024: Expansion</h3>
          <ul className={styles.taskList}>
            <li className={styles.task}>
              <img src="/check-square-empty.svg" alt="Not completed" className={styles.checkmark} />
              <span className={styles.taskDescription}>List new tokens and explore global markets.</span>
            </li>
          </ul>
        </div>

        <div className={styles.roadmapItem}>
          <h3 className={styles.itemTitle}>Q4 2024: DeFi and NFT Integration</h3>
          <ul className={styles.taskList}>
            {[
              "Launch DeFi features like liquidity pools.",
              "Introduce NFT vesting options."
            ].map((task, index) => (
              <li key={index} className={styles.task}>
                <img src="/check-square-empty.svg" alt="Not completed" className={styles.checkmark} />
                <span className={styles.taskDescription}>{task}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.roadmapItem}>
          <h3 className={styles.itemTitle}>Q1 2025: Future Innovations</h3>
          <ul className={styles.taskList}>
            {[
              "Implement AI for predictive analytics.",
              "Release mobile app for enhanced accessibility.",
              "Form strategic partnerships for growth."
            ].map((task, index) => (
              <li key={index} className={styles.task}>
                <img src="/check-square-empty.svg" alt="Not completed" className={styles.checkmark} />
                <span className={styles.taskDescription}>{task}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
