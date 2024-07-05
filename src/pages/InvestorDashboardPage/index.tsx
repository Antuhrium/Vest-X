import HeaderTitle from "../../components/HeaderTitle";
import Menu from "../../components/Menu";
import PortfolioCharts from "../../components/PortfolioCharts";
import ProjectsList from "../../components/ProjectsList";
import styles from "./style.module.scss";

const InvestorDashboardPage = () => {
  return (
    <section className={styles.container}>
      <Menu />
      <div className={styles.wrapper}>
        <HeaderTitle className={styles.title}>Portfolio</HeaderTitle>
        <PortfolioCharts />
        <div className={styles.projList}>
          <ProjectsList />
        </div>
      </div>
    </section>
  );
};

export default InvestorDashboardPage;
