import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import ArkhamTopBg from "/images/arkham-top-bg.png";

import Menu from "../../../components/Menu";
import AdminMenu from "../../../components/AdminMenu";
import AdminInvestingContent from "../../../components/AdminInvestingContent";
import PopupMessage from "../../../components/PopupMessage";
import RightBg from "/images/right-bg.png";

const FounderAdminPanel: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(true);
	const menuRef = useRef<HTMLDivElement>(null);
	const adminMenuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const adjustMenuHeight = () => {
			if (adminMenuRef.current && menuRef.current) {
				menuRef.current.style.height = `${adminMenuRef.current.offsetHeight}px`;
			}
		};

		adjustMenuHeight();
		window.addEventListener("resize", adjustMenuHeight);

		return () => {
			window.removeEventListener("resize", adjustMenuHeight);
		};
	}, []);

	return (
		<>
			<img className={styles.rightBg} src={RightBg} alt="" />
			<div>
				<div
					style={{
						background: `url(${ArkhamTopBg})`,
					}}
					className={styles.bgContainer}
				></div>
				{/* <img src={ArkhamTopBg} alt="arkham top bg" /> */}
				{isModalOpen && (
					<PopupMessage
						title="Congratulations!"
						description={{
							text: "Your project has been successfully published. For any help contact our",
							link: "24/7 support chat.",
						}}
						setIsModalOpen={setIsModalOpen}
						type="success"
					/>
				)}
				<div className={styles.container}>
					<Menu
						ref={menuRef}
						menuStyle={{
							position: "relative",
						}}
					/>
					<AdminMenu
						ref={adminMenuRef}
						style={{
							position: "relative",
							left: "0",
							height: "100%",
						}}
					/>
					<AdminInvestingContent
						style={{
							marginLeft: "auto",
							marginRight: "auto",
						}}
					/>
				</div>
			</div>
		</>
	);
};

export default FounderAdminPanel;
