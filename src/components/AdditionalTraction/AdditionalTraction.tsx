import React from 'react';
import styles from './style.module.scss';

const AdditionalTraction: React.FC = () => {
  const tractionItems = [
    "Secured additional capital to fuel platform development and expansion.",
    "Achieved a milestone of 50,000 active users on the platform.",
    "Expanded token offerings by listing 20 new tokens on the platform.",
    "Successfully launched a mobile application for improved user accessibility.",
    "Demonstrated robust platform performance and user trust.",
    "Secured investment to fund platform upgrades and expansion."
  ];

  return (
    <div className={styles.additionalTraction}>
      <h2 className={styles.title}>Additional traction</h2>
      <div className={styles.tractionGrid}>
        {tractionItems.map((item, index) => (
          <div key={index} className={styles.tractionItem}>
            <img src="/geo.svg" alt="Rocket" className={styles.rocketIcon} />
            <span className={styles.tractionDescription}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdditionalTraction;
