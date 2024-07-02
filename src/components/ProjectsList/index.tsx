import React from "react";
import styles from "./style.module.scss";
import ProjectItem from "./ProjectItem";

export type projectsType = {
  vestingOpen: boolean;
  image: string;
};

const projects: projectsType[] = [
  {
    vestingOpen: true,
    image: "/images/projectsList/1.png",
  },
  {
    vestingOpen: false,
    image: "/images/projectsList/2.png",
  },
  {
    vestingOpen: false,
    image: "/images/projectsList/3.png",
  },
  {
    vestingOpen: true,
    image: "/images/projectsList/4.png",
  },
];

const ProjectsList: React.FC = () => {
  return (
    <div className={styles.projecrsList}>
      {projects.map((project) => (
        <ProjectItem {...project} />
      ))}
    </div>
  );
};

export default ProjectsList;
