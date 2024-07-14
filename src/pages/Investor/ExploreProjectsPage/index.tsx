import { useState } from "react";
import Filter, { filtersT } from "../../../components/Filter";
import HeaderTitle from "../../../components/HeaderTitle";
import Menu from "../../../components/Menu";
import ProjectCard from "../../../components/ProjectCard/ProjectCard";
import Search from "../../../components/Search";
import styles from "./style.module.scss";
import Tags from "../../../components/Tags";
import SortDropdownMenu from "../../../components/Sort";
import Pagination from "../../../components/Pagination/Pagination";
import RightBg from "/images/right-bg.png";
import Project1 from "/images/projectsList/1.png";
import Project2 from "/images/projectsList/2.png";
import Project3 from "/images/projectsList/3.png";
import Project4 from "/images/projectsList/4.png";

const filters: filtersT[] = [
  {
    title: "Status",
    type: "checkbox",
    options: ["Vesting Open", "Active", "Completed"],
  },
  {
    title: "Funding Stage",
    type: "checkbox",
    options: [
      "Seed Stage",
      "Early Stage",
      "Growth Stage",
      "Late Stage",
      "Exit Stage",
    ],
  },
  {
    title: "Location",
    type: "checkbox",
    options: ["USA", "Asia", "Europa", "Africa", "Others"],
  },
];

const projects = [
  { projectName: "Project name" },
  { projectName: "Project name" },
  { projectName: "Project name" },
  { projectName: "Project name" },
  { projectName: "Project name" },
  { projectName: "Project name" },
];

const getProjectImage = (index: number) => {
  switch (index) {
    case 0:
      return Project1;
    case 1:
      return Project2;
    case 2:
      return Project3;
    case 3:
      return Project4;
    default:
      return Project1;
  }
};

const ExploreProjectsPage = () => {
  const [, onSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <section className={styles.container}>
      <Menu
        menuStyle={{
          height: "100vh",
        }}
      />

      <Filter title={"Filter"} buttonTitle="Apply" filters={filters} />
      <div className={styles.wrapper}>
        <img className={styles.rightBg} src={RightBg} alt="" />
        <HeaderTitle className={styles.title}>Explore Projects</HeaderTitle>
        <div className={styles.searchWrapper}>
          <Search onSearch={onSearch} />
          <SortDropdownMenu />
        </div>
        <div className={styles.tags}>
          <Tags />
        </div>
        <div className={styles.projectsWrapper}>
          {projects.map((project, index) => (
            <ProjectCard
              projectName={project.projectName}
              vestingStatus="Vesting open"
              tokenName="EcoSwap"
              imageSrc={getProjectImage(index)}
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
