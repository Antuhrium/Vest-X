import ChartLine from "../ChartLine";
import ChartCircle from "../ChartCircle";
import GrayArrow from "../GrayArrow";
import styles from "./style.module.css";
import ArkhamBg from "/arkham-bg.png";
import RightBg from "/right-bg.png";
import useIncrementOnView from "../../CustomHooks/useIncrementOnView";

const RightWrapper: React.FC = () => {
  const [allocationRef, allocation] = useIncrementOnView(0, 31250, 1000000, 10);
  const [priceRef, price] = useIncrementOnView(0, 0.01, 0.04, 100);

  return (
    <div className={styles.rightWrapper}>
      <div className={styles.rightCard}>
        <div className={styles.rightTitle}>
          <h3>Arkham | Seed round</h3>
          <span>(ARKM)</span>
        </div>
        <p className={styles.rightText}>
          Arkham (ARKM) is an intel-to-earn token powering the deanonymization
          of the blockchain with Al.
        </p>
        <button className={styles.rightBtn}>INVEST SEED</button>
        <img className={styles.rightCardBg} src={ArkhamBg} alt="Arkham" />
      </div>
      <span className={styles.vestingTitle}>Vesting Schedule</span>
      <div className={styles.vesting}>
        <div className={styles.vestingWrapper}>
          <div className={styles.vestingItem}>
            <div className={styles.vestingNumber}>1</div>
            <span className={styles.vestingName}>TGE</span>
            <span className={styles.vestingInf}>15%</span>
          </div>
          <div className={styles.vestingItem}>
            <div className={styles.vestingNumber}>2</div>
            <span className={styles.vestingName}>Cliff</span>
            <span className={styles.vestingInf}>120 days</span>
          </div>
          <div className={styles.vestingItem}>
            <div className={styles.vestingNumber}>3</div>
            <span className={styles.vestingName}>Vesting</span>
            <span className={styles.vestingInf}>120 days</span>
          </div>
        </div>
        <div className={styles.vestingWrapper}>
          <div className={styles.vestingItem}>
            <span className={styles.vestingBottomTitle}>Allocation</span>
            <span ref={allocationRef} className={styles.vestingBottomInf}>
              {allocation} tokens
            </span>
          </div>
          <div className={styles.vestingItem}>
            <span className={styles.vestingBottomTitle}>Token price</span>
            <span ref={priceRef} className={styles.vestingBottomInf}>
              {price} USD
            </span>
          </div>
          <div className={styles.vestingButton}>
            <GrayArrow />
          </div>
        </div>
      </div>
      <div className={styles.graph}>
        <div className={styles.leftGraphWrapper}>
          <span className={styles.leftGraphTitle}>Total Supply Weight</span>
          <div className={styles.leftGraph}>
            <div className={styles.CircleGraph}>
              <ChartCircle />
            </div>
            <span className={styles.graphPercent}>15%</span>
            <span className={styles.graphText}>Supply</span>
          </div>
        </div>
        <div className={styles.chartWrapper}>
          <span className={styles.chartTitle}>Vesting</span>
          <ChartLine />
        </div>
      </div>
      <img className={styles.rightBg} src={RightBg} alt="" />
    </div>
  );
};

export default RightWrapper;
