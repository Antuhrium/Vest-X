import React from "react";
import styles from "./style.module.scss";

type descriptionType = {
	text: string;
	link?: string;
};

interface PopupMessageProps {
	title: string;
	description: descriptionType;
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	type: "error" | "success";
}

const PopupMessage: React.FC<PopupMessageProps> = ({
	title,
	description,
	setIsModalOpen,
	type,
}) => {
	return (
		<>
			<div
				className={styles.container}
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<button
					className={styles.closeButton}
					onClick={() => setIsModalOpen(false)}
				>
					<img src="/images/close-icon.svg" alt="Close" />
				</button>
				<div className={`${styles.mainIcon} hidden lg:flex`}>
					{type === "success" ? (
						<img
							src="/images/white-checkmark.svg"
							alt=""
							width={56}
							height={56}
						/>
					) : (
						<div>!</div>
					)}
				</div>
				<div className={styles.title}>{title}</div>
				<p className={styles.desc}>
					{description.text} {description.link ? <a>{description.link}</a> : ""}
				</p>
				<div className={styles.buttonsContainer}>
					{type === "error" ? (
						<>
							<button
								className={`${styles.button} ${styles.whiteButton}`}
								onClick={() => setIsModalOpen(false)}
							>
								Cancel
							</button>
							<button className={styles.button}>Delete</button>
						</>
					) : (
						<button
							className={styles.button}
							onClick={() => setIsModalOpen(false)}
						>
							Continue
						</button>
					)}
				</div>
			</div>
			<div className={styles.bg} onClick={() => setIsModalOpen(false)}></div>
		</>
	);
};

export default PopupMessage;
