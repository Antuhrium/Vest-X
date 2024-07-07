import { useState } from "react";
import Filter from "../../../components/Filter";
import HeaderTitle from "../../../components/HeaderTitle";
import Menu from "../../../components/Menu";
import ProjectCard from "../../../components/ProjectCard/ProjectCard";
import Search from "../../../components/Search";
import styles from "./style.module.scss";
import Tags from "../../../components/Tags";
import SortDropdownMenu from "../../../components/Sort";
import Pagination from "../../../components/Pagination/Pagination";

const projects = [
  { projectName: "Project name" },
  { projectName: "Project name" },
  { projectName: "Project name" },
  { projectName: "Project name" },
  { projectName: "Project name" },
  { projectName: "Project name" },
];

const ExploreProjectsPage = () => {
  const [_, onSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <section className={styles.container}>
      <Menu />

      <Filter />
      <div className={styles.wrapper}>
        <HeaderTitle className={styles.title}>Explore Projects</HeaderTitle>
        <div className={styles.searchWrapper}>
          <Search onSearch={onSearch} />
          <SortDropdownMenu />
        </div>
        <div className={styles.tags}>
          <Tags />
        </div>
        <div className={styles.projectsWrapper}>
          {projects.map((project) => (
            <ProjectCard
              projectName={project.projectName}
              vestingStatus="Vesting open"
              tokenName="EcoSwap"
              imageSrc="images/projectsList/1.png"
              description="EcoSwap is a decentralized marketplace and community platform..."
              tags={["Defi", "Paytech", "AI"]}
            />
          ))}
        </div>
        <div className={styles.paginationWrapper}>
          <Pagination
            totalPages={24}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
};

export default ExploreProjectsPage;
