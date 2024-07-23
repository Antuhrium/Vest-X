import ChartLine from "../ChartLine";
import ChartCircle from "../ChartCircle";
import GrayArrow from "../GrayArrow";
import styles from "./style.module.scss";
import ArkhamBg from "/images/arkham-bg.png";
import CountUpComponent from "../CountUpComponent";
import HeaderTitle from "../HeaderTitle";
import { useState } from "react";
import SeedRoundModalButton from "../SeedRoundModal";
import { useLocation } from "react-router";

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

const InvestingComponent = () => {
	const [chart, setChart] = useState<"line" | "circular">("line");
	return (
		<div className="bg-[#0A0F1A] mt-4 p-4">
			<span className={styles.title}>Vesting Schedule</span>
			<div className={styles.vesting}>
				<div className={styles.vestingWrapper}>
					{vestingTopInf.map((vesting, i) => (
						<div key={i} className={styles.vestingItem}>
							<div className={styles.vestingNumber}>{i + 1}</div>
							<div className="flex flex-col lg:flex-row gap-2 lg:gap-2">
								<span
									className={`${styles.vestingTopInfo} bg-[#7F8EA3] lg:bg-[transparent]`}
									style={{
										fontSize: "14px",
									}}
								>
									{vesting.title}
								</span>
								<span className={styles.vestingTopInfo}>{vesting.value}</span>
							</div>
						</div>
					))}
				</div>
				<div className={styles.vestingWrapper}>
					<div className={styles.vestingItem}>
						<div className="flex flex-col lg:flex-row">
							<span
								className={styles.vestingBottomInfo}
								style={{
									color: "#7F8EA3",
									fontSize: "14px",
								}}
							>
								Allocation
							</span>
							<span className={styles.vestingBottomInfo}>
								<CountUpComponent end={1000000} /> tokens
							</span>
						</div>
					</div>
					<div className={styles.vestingItem}>
						<div className="flex flex-col lg:flex-row">
							<span
								className={styles.vestingBottomInfo}
								style={{
									color: "#7F8EA3",
									fontSize: "14px",
								}}
							>
								Token price
							</span>
							<span className={styles.vestingBottomInfo}>
								<CountUpComponent end={0.04} /> USD
							</span>
						</div>
					</div>
				</div>
				<div className={styles.vestingButton}>
					<GrayArrow color="#1D283A" />
				</div>
			</div>
			<div className={styles.graph}>
				<div
					className={styles.chartsSwitch}
					onClick={() => setChart(chart === "line" ? "circular" : "line")}
				>
					{chart === "line" ? (
						<img src="/images/switch-line.svg" alt="switch" />
					) : (
						<img src="/images/switch-circular.svg" alt="switch" />
					)}
				</div>
				{chart === "circular" && (
					<div className={styles.leftGraphWrapper}>
						<span className={styles.graphTitle}>Total Supply Weight</span>
						<div className={styles.leftGraph}>
							<div className={styles.CircleGraph}>
								<ChartCircle />
							</div>
							<span className={styles.graphPercent}>15%</span>
							<span className={styles.graphText}>Supply</span>
						</div>
					</div>
				)}
				{chart === "line" && (
					<div className={styles.chartWrapper}>
						<span className={styles.graphTitle}>Vesting</span>
						<ChartLine customWidth={"214px"} customHeight="214px" />
					</div>
				)}
			</div>
		</div>
	);
};

const FounderComponent = () => {
	const [typeRoundGraph, setTypeRoundGraph] = useState<0 | 1>(0);

	return (
		<>
			<span className={styles.title}>Analytics</span>
			<div className={styles.analitics}>
				<div className={styles.analiticsItem}>
					<div className={styles.vestingTopInfo}>Number of investors:</div>
					<span className={styles.vestingTopInfo}>234</span>
				</div>
				<div className={styles.analiticsItem}>
					<div className={styles.analiticsInfo}>Have vesting begun:</div>
					<span className={styles.analiticsInfo} style={{ color: "#29E185" }}>
						Vesting open
					</span>
				</div>
				<div className={styles.analiticsItem}>
					<div className={styles.analiticsInfo}>Total amount raised:</div>
					<span className={styles.analiticsInfo}>2,500,000 USD</span>
				</div>

				<div className={styles.vestingButton}>
					<GrayArrow color="#1D283A" />
				</div>
			</div>
			<div className={styles.graph}>
				<div className={styles.leftGraphWrapper}>
					<span className={styles.founderGraphTitle}>
						<div
							onClick={() => setTypeRoundGraph(0)}
							className={`${styles.graphTitle} ${
								typeRoundGraph === 0 ? "" : styles.noActive
							}`}
						>
							Seed round
						</div>
						<div
							onClick={() => setTypeRoundGraph(1)}
							className={`${styles.graphTitle} ${
								typeRoundGraph === 1 ? "" : styles.noActive
							}`}
						>
							Private round
						</div>
					</span>
					<div className={styles.leftGraph}>
						<div className={styles.CircleGraph}>
							<ChartCircle />
						</div>
						{typeRoundGraph === 0 ? (
							<>
								<span className={styles.graphPercent}>15%</span>
								<span className={styles.graphText}>15,000 USD</span>
							</>
						) : (
							<>
								<span className={styles.graphPercent}>65%</span>
								<span className={styles.graphText}>55,000 USD</span>
							</>
						)}
					</div>
				</div>
				<div className={styles.chartWrapper}>
					<span className={styles.graphTitle}>Vesting</span>
					<ChartLine />
				</div>
			</div>
		</>
	);
};
interface AdminInvestingContentProps {
	roundTitle?: string;
	style?: Record<string, string>;
}

const AdminInvestingContent: React.FC<AdminInvestingContentProps> = ({
	roundTitle = "Arkham | Seed round",
	style = {},
}: {
	roundTitle?: string;
	style?: Record<string, string>;
}) => {
	const [isModal, setIsModal] = useState(false);
	const [afterInvest, setAfterInvest] = useState(false);
	const [checkboxValue, setCheckboxValue] = useState("");

	const { pathname } = useLocation();
	console.log("style", style);
	return (
		<div className={styles.container} style={{ ...style }}>
			<SeedRoundModalButton isModalOpen={isModal} setIsModalOpen={setIsModal} />

			<div className={styles.topCard}>
				<img
					className={`${styles.topCardImg} hidden lg:block`}
					src={ArkhamBg}
					alt="Arkham"
				/>
				<div className={styles.topCardWrapper}>
					{pathname.includes("/investor") && afterInvest && (
						<div className={styles.checkboxWrapper}>
							<label className={styles.checkbox}>
								<input
									type="checkbox"
									value={"Invested"}
									checked={checkboxValue === "Invested"}
									onChange={() => setCheckboxValue("Invested")}
								/>
								<span className={styles.checkboxCheckmark}>
									<img
										style={{
											display: checkboxValue === "Invested" ? "flex" : "none",
										}}
										src="/images/white-checkmark.svg"
										alt="checkmark"
									/>
								</span>
								Invested
							</label>
							<label className={styles.checkbox}>
								<input
									type="checkbox"
									value={"Vesting"}
									checked={checkboxValue === "Vesting"}
									onChange={() => setCheckboxValue("Vesting")}
								/>
								<span className={styles.checkboxCheckmark}>
									<img
										style={{
											display: checkboxValue === "Vesting" ? "flex" : "none",
										}}
										src="/images/white-checkmark.svg"
										alt="checkmark"
									/>
								</span>
								Vesting
							</label>
						</div>
					)}

					<h3 className={styles.topCardTitle}>
						<HeaderTitle
							className={`${styles.topCardTitle} ${
								roundTitle.includes("Private") ? styles.privateRound : ""
							}`}
						>
							<div
								style={{
									display: "flex",
								}}
							>
								<p style={{ width: "70%" }}>{roundTitle}</p>
								<img
									className={`${styles.topCardImg} block lg:hidden w-16 h-16 ml-auto`}
									src={ArkhamBg}
									alt="Arkham"
								/>
							</div>
						</HeaderTitle>
						<HeaderTitle className={styles.topCardTitle}>(ARKM)</HeaderTitle>
					</h3>
					<p className={styles.topCardText}>
						Arkham (ARKM) is an intel-to-earn token powering the deanonymization
						of the blockchain with Al.
					</p>
					<div className={styles.buttonContainer}>
						<button
							className={styles.investButton}
							onClick={() => setAfterInvest(!afterInvest)}
						>
							Invest seed
						</button>

						{pathname.includes("/investor") && afterInvest && (
							<button
								onClick={() => setIsModal(true)}
								className={styles.claimButton}
							>
								Claim tokens
							</button>
						)}
					</div>
				</div>
			</div>

			{pathname.includes("/investor") ? (
				<InvestingComponent />
			) : (
				<FounderComponent />
			)}
		</div>
	);
};

export default AdminInvestingContent;
