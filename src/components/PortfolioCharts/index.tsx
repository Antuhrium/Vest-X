import CircularProgressChart from "./ChartCircle/index";
import ChartLine from "./ChartLine/index";
import ArrowUpRight from "/images/arrow-up-right.svg";
import styles from "./styles.module.scss";
const PortfolioCharts: React.FC = () => {
  return (
    <div className={styles.chartsContainer}>
      <div className={`${styles.chartItem} ${styles.bigChart}`}>
        <span className={styles.chartText}>Portfolio balance</span>
        <span className={styles.chartBalance}>$936,346.65</span>
        <span
          className={styles.greenText}
          style={{
            display: "flex",
            gap: "0.5rem",
            marginBottom: "0.5rem",
          }}
        >
          <img src={ArrowUpRight} alt="arrow up right" />
          17 % (+$186,334.27)
        </span>
        <ChartLine />
      </div>
      <div className={`${styles.chartItem} ${styles.smallChart}`}>
        <span className={styles.chartText}>
          AVG ROI: <span className={styles.greenText}>+5X</span>
        </span>
        <span className={styles.chartText}>
          Total investment amount:
          <span className={styles.greenText}>+500,000 USD</span>
        </span>
        <span className={styles.chartText}>
          Total profit: <span className={styles.greenText}>+100,000 USD</span>
        </span>
        <span className={styles.chartText}>
          Total claimed: <span className={styles.greenText}>+40 %</span>
        </span>
        <CircularProgressChart />
      </div>
    </div>
  );
};

export default PortfolioCharts;
