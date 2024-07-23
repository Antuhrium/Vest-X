// @ts-nocheck
import { useState } from "react";
import styles from "./styles.module.scss";
import AddCircle from "/images/add-circle.svg";
import DeleteCircle from "/images/delete-circle.svg";
import MobileModifierMenu from "../../../../../../components/MobileModifierMenu";
import ArrowBack from "/images/arrow-back-chevron.svg";

interface Investor {
	id: number;
	fullName: string;
	linkedin: string;
	projectName: string;
	projectLogo: File | null;
}

const PhoneSizedInvestors = ({
	investors,
	addInvestor,
	updateInvestor,
	deleteInvestor,
	handleFileChange,
}) => {
	return (
		<MobileModifierMenu
			elements={investors}
			addElement={addInvestor}
			updateElement={updateInvestor}
			deleteElement={deleteInvestor}
			mode="topInvestors"
			handleFileChange={handleFileChange}
		/>
	);
};

export const UpdateInvestorsForm = ({
	investor,
	investors,
	index,
	updateInvestor,
	deleteInvestor,
	handleFileChange,
	setTab,
}) => {
	const handleDelete = () => {
		deleteInvestor(investor.id);
		setTab(0);
	};

	return (
		<div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "0.5rem",
				}}
			>
				<p
					className={styles.grayText}
					style={{
						display: "flex",
						gap: "0.5rem",
						marginBottom: "1rem",
					}}
					onClick={() => setTab(0)}
				>
					<img src={ArrowBack} alt="arrow back" />
					Back to other investors
				</p>
				<span className={styles.selectedElementText}>
					{index}. Top Investors ({index} / {investors.length})
				</span>
			</div>
			<div key={investor.id} className={styles.investor}>
				<div className={styles.flexRow}>
					<div className={styles.formGroup}>
						<label>
							Full name <span className={styles.requiredStar}>*</span>
						</label>
						<input
							type="text"
							value={investor.fullName}
							onChange={(e) =>
								updateInvestor(investor.id, "fullName", e.target.value)
							}
							placeholder="Full name / nickname"
						/>
					</div>
					<div className={styles.formGroup}>
						<label>
							Link to LinkedIn <span className={styles.requiredStar}>*</span>
						</label>
						<input
							type="text"
							value={investor.linkedin}
							onChange={(e) =>
								updateInvestor(investor.id, "linkedin", e.target.value)
							}
							placeholder="linktr.com/ProjectName"
						/>
					</div>
				</div>
				<div className={styles.flexRow}>
					<div className={styles.formGroup}>
						<label>Project name supported by Investor</label>
						<input
							type="text"
							value={investor.projectName}
							onChange={(e) =>
								updateInvestor(investor.id, "projectName", e.target.value)
							}
							placeholder="Microsoft"
						/>
					</div>
					<div className={styles.formGroup}>
						<label>Project's logo</label>
						<div className={styles.uploadContainer}>
							<div className={styles.uploadBox}>
								<input
									type="file"
									accept="image/*"
									onChange={(e) =>
										e.target.files &&
										handleFileChange(investor.id, e.target.files[0])
									}
								/>
								<span className="text-center">
									<span className={styles.blueText}>Click to Upload</span> or
									drag and drop
								</span>
							</div>
						</div>
					</div>
				</div>
				<button onClick={() => handleDelete()} className={styles.deleteButton}>
					<img
						src={DeleteCircle}
						alt="delete circle"
						style={{ marginRight: "0.5rem" }}
					/>{" "}
					Delete this member
				</button>
			</div>
		</div>
	);
};

const NormalSizedInvestors = ({
	addInvestor,
	updateInvestor,
	deleteInvestor,
	handleFileChange,
	investors,
}) => {
	return (
		<div className="hidden lg:block">
			{investors.map((investor) => (
				<div key={investor.id} className={styles.investor}>
					<div className={styles.flexRow}>
						<div className={styles.formGroup}>
							<label>
								Full name <span className={styles.requiredStar}>*</span>
							</label>
							<input
								type="text"
								value={investor.fullName}
								onChange={(e) =>
									updateInvestor(investor.id, "fullName", e.target.value)
								}
								placeholder="Full name / nickname"
							/>
						</div>
						<div className={styles.formGroup}>
							<label>
								Link to LinkedIn <span className={styles.requiredStar}>*</span>
							</label>
							<input
								type="text"
								value={investor.linkedin}
								onChange={(e) =>
									updateInvestor(investor.id, "linkedin", e.target.value)
								}
								placeholder="linktr.com/ProjectName"
							/>
						</div>
					</div>
					<div className={styles.flexRow}>
						<div className={styles.formGroup}>
							<label>Project name supported by Investor</label>
							<input
								type="text"
								value={investor.projectName}
								onChange={(e) =>
									updateInvestor(investor.id, "projectName", e.target.value)
								}
								placeholder="Microsoft"
							/>
						</div>
						<div className={styles.formGroup}>
							<label>Project's logo</label>
							<div className={styles.uploadContainer}>
								<div className={styles.uploadBox}>
									<input
										type="file"
										accept="image/*"
										onChange={(e) =>
											e.target.files &&
											handleFileChange(investor.id, e.target.files[0])
										}
									/>
									<span>
										<span className={styles.blueText}>Click to Upload</span> or
										drag and drop
									</span>
								</div>
							</div>
						</div>
					</div>
					<button
						onClick={() => deleteInvestor(investor.id)}
						className={styles.deleteButton}
					>
						<img
							src={DeleteCircle}
							alt="delete circle"
							style={{ marginRight: "0.5rem" }}
						/>{" "}
						Delete this investor
					</button>
				</div>
			))}
		</div>
	);
};

export default function TopInvestors() {
	const [investors, setInvestors] = useState<Investor[]>([
		{
			id: 1,
			fullName: "Add investor",
			linkedin: "",
			projectName: "Project",
			projectLogo: null,
		},
	]);

	const addInvestor = () => {
		setInvestors([
			...investors,
			{
				id: Math.max(...investors.map((investor) => investor.id)) + 1,
				fullName: "Add investor",
				linkedin: "",
				projectName: "Project",
				projectLogo: null,
			},
		]);
	};

	const updateInvestor = (id: number, key: keyof Investor, value: string) => {
		setInvestors(
			investors.map((investor) =>
				investor.id === id ? { ...investor, [key]: value } : investor
			)
		);
	};

	const deleteInvestor = (id: number) => {
		setInvestors(investors.filter((investor) => investor.id !== id));
	};

	const handleFileChange = (id: number, file: File) => {
		updateInvestor(id, "projectLogo", file.name);
	};

	const [showMobile, setShowMobile] = useState(false);

	return (
		<div className={styles.topInvestorsContainer}>
			<div className={styles.header}>
				<h2 className={styles.gradientHeader}>Top Investors (optional)</h2>
				<img
					src={ArrowBack}
					className={
						`w-4 h-4 block lg:hidden ` +
						(!showMobile ? "-rotate-90" : "rotate-90")
					}
					alt="arrow down"
					onClick={() => setShowMobile((prev) => !prev)}
				/>
				<button
					className={`${styles.addLinkButton} hidden lg:flex gap-[0.1rem]`}
					onClick={addInvestor}
				>
					<img
						src={AddCircle}
						alt="add circle"
						style={{ marginRight: "0.5rem" }}
					/>{" "}
					Add investor
				</button>
			</div>
			<NormalSizedInvestors
				addInvestor={addInvestor}
				updateInvestor={updateInvestor}
				deleteInvestor={deleteInvestor}
				handleFileChange={handleFileChange}
				investors={investors}
			/>
			{showMobile && (
				<PhoneSizedInvestors
					investors={investors}
					addInvestor={addInvestor}
					updateInvestor={updateInvestor}
					deleteInvestor={deleteInvestor}
					handleFileChange={handleFileChange}
				/>
			)}
		</div>
	);
}
