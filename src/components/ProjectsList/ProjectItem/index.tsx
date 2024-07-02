import React from "react";
import styles from "./style.module.scss";
import { projectsType } from "..";

const ProjectItem: React.FC<projectsType> = ({ vestingOpen, image }) => {
  return (
    <div className={styles.projectItem}>
      <div className={styles.header}>
        <span className={styles.projectName}>Project name</span>
        <div
          className={`${styles.vesting} ${vestingOpen ? styles.active : ""}`}
        >
          <span>Vesting open</span>
          <div className={styles.vestingImage}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none">
                <path d="M0.980469 4.96046L5.01984 9L13.0198 1" stroke={vestingOpen? "#10B863" : "#1D283A"} stroke-width="1.5"/>
            </svg>
          </div>
        </div>
      </div>
      <img className={styles.projectImage} src={image} alt="" />
      <div className={styles.projectInfo}>
        <div className={styles.infoItem}>
          <span className={styles.info}>Price</span>
          <span className={styles.info}>0,04 USD</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.info}>Round</span>
          <span className={styles.info}>Seed round</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.info}>Next claim date</span>
          <span className={styles.info}>01.05.24</span>
        </div>
      </div>
      <button className={styles.projectButton}>Claim</button>
    </div>
  );
};

export default ProjectItem;
