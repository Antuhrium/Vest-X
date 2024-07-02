import React from 'react';
import styles from './style.module.scss';

interface ProjectCardProps {
  projectName: string;
  vestingStatus: string;
  imageSrc?: string;
  tokenName: string;
  description: string;
  tags: string[];
}

const tagColors: { [key: string]: string } = {
  Defi: '#3A4556',
  Paytech: '#2C3544',
  AI: `url("/linear-gradient.svg")`
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  vestingStatus,
  imageSrc,
  tokenName,
  description,
  tags
}) => {
  return (
    <div className={styles.projectCard}>

      <div className={styles.projectHeader}>
        <span className={styles.projectName}>{projectName}</span>
        <div className={styles.vestingStatus}>
          {vestingStatus}
          <span className={styles.checkmarkContainer}>
            <img src="/checkmark.svg" alt="Checkmark" className={styles.checkmark} />
          </span>
        </div>
      </div>

      <div className={styles.projectImage}>
        <img src={imageSrc} alt={projectName} />
      </div>

      <div className={styles.projectDetails}>
        <div className={styles.tokenName}>
          <span>Token Name :</span>
          <span>{tokenName}</span>
        </div>

        <p className={styles.projectDescription}>{description}</p>

        <div className={styles.projectTags}>
          {tags.map((tag, index) => (
            <span
              key={index}
              className={styles.tag}
              style={{
                background: tagColors[tag] || '#3A4556',
                backgroundSize: tag === 'AI' ? '100% 100%' : 'auto',
                backgroundRepeat: tag === 'AI' ? 'repeat' : 'no-repeat'
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <button className={styles.viewDetailsBtn}>View details</button>
      </div>
    </div>
  );
};

export default ProjectCard;


// <ProjectCard
//   projectName="Project name"
//   vestingStatus="Vesting open"
//   imageSrc="/path/to/your/image.jpg"
//   tokenName="EcoSwap"
//   description="EcoSwap is a decentralized marketplace and community platform..."
//   tags={['Defi', 'Paytech', 'AI']}
// />
