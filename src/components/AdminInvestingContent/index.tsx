import ChartLine from "../ChartLine";
import ChartCircle from "../ChartCircle";
import GrayArrow from "../GrayArrow";
import styles from "./style.module.scss";
import ArkhamBg from "/images/arkham-bg.png";
import RightBg from "/images/right-bg.png";
import CountUpComponent from "../CountUpComponent";
import HeaderTitle from "../HeaderTitle";
import { useNavigate } from "react-router";
import { useState } from "react";
import SeedRoundModalButton from "../SeedRoundModal";

const vestingTopInf = [
    {
        title: "TGE:",
        value: "15%",
    },
    {
        title: "Cliff:",
        value: "120 days",
    },
    {
        title: "Vesting:",
        value: "120 days",
    },
];

const AdminInvestingContent: React.FC = () => {
    const [isModal, setIsModal] = useState(false);
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <SeedRoundModalButton
                isModalOpen={isModal}
                setIsModalOpen={setIsModal}
            />
            <div className={styles.topCard}>
                <img
                    className={styles.topCardImg}
                    src={ArkhamBg}
                    alt="Arkham"
                />
                <div className={styles.topCardWrapper}>
                    <h3 className={styles.topCardTitle}>
                        <HeaderTitle className={styles.topCardTitle}>
                            Arkham | Seed round
                        </HeaderTitle>
                        <HeaderTitle className={styles.topCardTitle}>
                            (ARKM)
                        </HeaderTitle>
                    </h3>
                    <p className={styles.topCardText}>
                        Arkham (ARKM) is an intel-to-earn token powering the
                        deanonymization of the blockchain with Al.
                    </p>
                    <div className={styles.buttonContainer}>
                        <button
                            onClick={() =>
                                navigate("/investor/admin/project-introduction")
                            }
                            className={styles.investButton}
                        >
                            Invest seed
                        </button>

                        <button
                            onClick={() => setIsModal(true)}
                            className={styles.claimButton}
                        >
                            Claim tokens
                        </button>
                    </div>
                </div>
            </div>
            <span className={styles.vestingTitle}>Vesting Schedule</span>
            <div className={styles.vesting}>
                <div className={styles.vestingWrapper}>
                    {vestingTopInf.map((vesting, i) => (
                        <div key={i} className={styles.vestingItem}>
                            <div className={styles.vestingNumber}>{i + 1}</div>
                            <span className={styles.vestingTopInfo}>
                                {vesting.title}
                            </span>
                            <span className={styles.vestingTopInfo}>
                                {vesting.value}
                            </span>
                        </div>
                    ))}
                </div>
                <div className={styles.vestingWrapper}>
                    <div className={styles.vestingItem}>
                        <span className={styles.vestingBottomInfo}>
                            Allocation
                        </span>
                        <span className={styles.vestingBottomInfo}>
                            <CountUpComponent end={1000000} /> tokens
                        </span>
                    </div>
                    <div className={styles.vestingItem}>
                        <span className={styles.vestingBottomInfo}>
                            Token price
                        </span>
                        <span className={styles.vestingBottomInfo}>
                            <CountUpComponent end={0.04} /> USD
                        </span>
                    </div>
                </div>
                <div className={styles.vestingButton}>
                    <GrayArrow color="#1D283A" />
                </div>
            </div>
            <div className={styles.graph}>
                <div className={styles.leftGraphWrapper}>
                    <span className={styles.graphTitle}>
                        Total Supply Weight
                    </span>
                    <div className={styles.leftGraph}>
                        <div className={styles.CircleGraph}>
                            <ChartCircle />
                        </div>
                        <span className={styles.graphPercent}>15%</span>
                        <span className={styles.graphText}>Supply</span>
                    </div>
                </div>
                <div className={styles.chartWrapper}>
                    <span className={styles.graphTitle}>Vesting</span>
                    <ChartLine />
                </div>
            </div>
            <img className={styles.rightBg} src={RightBg} alt="" />
        </div>
    );
};

export default AdminInvestingContent;
