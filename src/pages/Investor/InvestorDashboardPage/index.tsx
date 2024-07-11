import { useState } from "react";
import HeaderTitle from "../../../components/HeaderTitle";
import Menu from "../../../components/Menu";
import Pagination from "../../../components/Pagination/Pagination";
import PortfolioCharts from "../../../components/PortfolioCharts";
import ProjectsList from "../../../components/ProjectsList";
import RightBg from "/images/right-bg.png";
import styles from "./style.module.scss";

const InvestorDashboardPage = () => {
  const [page, setPage] = useState(1);
  return (
    <section className={styles.container}>
      <Menu
        menuStyle={{
          height: "115vh",
        }}
      />
      <div className={styles.wrapper}>
        <HeaderTitle className={styles.title}>Portfolio</HeaderTitle>
        <PortfolioCharts />
        <div className={styles.projList}>
          <ProjectsList />
        </div>
        <img className={styles.rightBg} src={RightBg} alt="" />
        <div className={styles.pagination}>
          <Pagination
            totalPages={10}
            currentPage={page}
            onPageChange={setPage}
          />
        </div>
      </div>
    </section>
  );
};

export default InvestorDashboardPage;
