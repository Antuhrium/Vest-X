import React from "react";
import styles from "./style.module.scss";

interface ProjectCardProps {
  projectName: string;
  vestingStatus: string;
  imageSrc?: string;
  tokenName: string;
  description: string;
  tags: string[];
}

const tagPatterns: { [key: string]: string } = {
  Defi: "diagonalHatch",
  Paytech: "diagonalHatchWide",
  AI: "crossHatchWide",
};

const getWHByIndex = (index: number) => {
  switch (index) {
    case 0:
      return { width: 48, height: 24 };
    case 1:
      return { width: 64, height: 24 };
    case 2:
      return { width: 64, height: 24 };
    default:
      return { width: 64, height: 24 };
  }
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  vestingStatus,
  imageSrc,
  tokenName,
  description,
  tags,
}) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectHeader}>
        <span className={styles.projectName}>{projectName}</span>
        <div className={styles.vestingStatus}>
          {vestingStatus}
          <span className={styles.checkmarkContainer}>
            <img
              src="/checkmark.svg"
              alt="Checkmark"
              className={styles.checkmark}
            />
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
          <svg width="0" height="0">
            <defs>
              <pattern
                id="diagonalHatch"
                patternUnits="userSpaceOnUse"
                width="4"
                height="4"
              >
                <path
                  d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2"
                  stroke="#606060"
                  strokeWidth="1"
                />
              </pattern>
              <pattern
                id="crossHatchWide"
                patternUnits="userSpaceOnUse"
                width="8"
                height="8"
              >
                <path
                  d="M-2,2 l4,-4 M0,8 l8,-8 M6,10 l4,-4"
                  stroke="#909090"
                  strokeWidth="1"
                />
                <path
                  d="M2,2 l4,4 M-2,6 l8,8 M2,10 l4,4"
                  stroke="#909090"
                  strokeWidth="1"
                />
              </pattern>
              <pattern
                id="diagonalHatchWide"
                patternUnits="userSpaceOnUse"
                width="8"
                height="8"
              >
                <path
                  d="M-2,2 l4,-4 M0,8 l8,-8 M6,10 l4,-4"
                  stroke="#808080"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
          </svg>

          {tags.map((tag, index) => (
            <span
              key={index}
              className={styles.tag}
              style={{
                background: `url(#${tagPatterns[tag]})`,
                backgroundSize: "contain",
                backgroundRepeat: "repeat",
                marginLeft: index === 0 ? "-1rem" : "0",
              }}
            >
              <svg
                width={getWHByIndex(index).width}
                height={getWHByIndex(index).height}
              >
                <rect
                  width={getWHByIndex(index).width}
                  height={getWHByIndex(index).height}
                  fill={`url(#${tagPatterns[tag]})`}
                  opacity={0.4}
                />
              </svg>
              <span>{tag}</span>
            </span>
          ))}
        </div>

        <button className={styles.viewDetailsBtn}>View details</button>
      </div>
    </div>
  );
};

export default ProjectCard;
