import CircularProgressChart from "./ChartCircle/index";
import ChartLine from "./ChartLine/index";
import ArrowUpRight from "/images/arrow-up-right.svg";
import styles from "./styles.module.scss";
import { useState } from "react";
const PortfolioCharts: React.FC = () => {
  const [chart, setChart] = useState<"line" | "circular">("line");
  return (
    <div className={styles.chartsContainer}>
      <div className={`${styles.chartItem} ${styles.bigChart} ${chart === "line" ? styles.activeChart : ""}`}>
        <div className={styles.chartsSwitch} onClick={() => setChart(chart === "line" ? "circular" : "line")}>
          {chart === "line" ? (
            <img src="/images/switch-line.svg" alt="switch" />
          ) : (
            <img src="/images/switch-circular.svg" alt="switch" />
          )}
        </div>
        <span className={`${styles.chartText} ${styles.chartTitle}`}>Portfolio balance</span>
        <span className={styles.chartBalance}>$936,346.65</span>
        <span className={styles.greenText}>
          <img src={ArrowUpRight} alt="arrow up right" />
          17 % (+$186,334.27)
        </span>
        <ChartLine />
      </div>
      <div className={`${styles.chartItem} ${styles.smallChart} ${chart === "circular" ? styles.activeChart : ""}`}>
        <div className={styles.chartsSwitch} onClick={() => setChart(chart === "line" ? "circular" : "line")}>
          {chart === "line" ? (
            <img src="/images/switch-line.svg" alt="switch" />
          ) : (
            <img src="/images/switch-circular.svg" alt="switch" />
          )}
        </div>
        <div className={styles.smallChartText}>
          <span className={styles.chartText}>
            AVG ROI: <span className={styles.smallGreen}>+5X</span>
          </span>
          <span className={styles.chartText}>
            Total investment amount:
            <span className={styles.smallGreen}>+500,000 USD</span>
          </span>
          <span className={styles.chartText}>
            Total profit: <span className={styles.smallGreen}>+100,000 USD</span>
          </span>
          <span className={styles.chartText}>
            Total claimed: <span className={styles.smallGreen}>+40 %</span>
          </span>
        </div>
        <CircularProgressChart />
      </div>
    </div>
  );
};

export default PortfolioCharts;
