import Twitter from "/images/socials/twitter.svg";
import Telegram from "/images/socials/telegram.svg";
import Linkedin from "/images/socials/linkedin.svg";
import Website from "/images/socials/web.svg";

import ProjIntrodImg from "/images/proj-introd-img.png";
import KeyFeaturesImg from "/images/key-features-img.png";

import styles from "./style.module.scss";
import GrayArrow from "../GrayArrow";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const socials = [
	{ name: "Twitter", img: Twitter },
	{ name: "Telegram", img: Telegram },
	{ name: "Linkedin", img: Linkedin },
	{ name: "Website", img: Website },
];

const founderLinks = [
	"Edit Project Info",
	"Edit Vesting schedule",
	"Vesting override",
	"SAFT Agreement",
	"Investor database",
];

const MobileAdminMenu = () => {
	const [tab, setTab] = useState(0);
	useEffect(() => {
		setTab(0);
	}, []);

	const { pathname } = useLocation();

	useEffect(() => {
		if (pathname.includes("/project-introduction")) {
			setTab(1);
		} else if (pathname.includes("/key-features-highlights")) {
			setTab(2);
		} else if (pathname.includes("/investor/admin")) {
			setTab(3);
		}
	}, [pathname]);
	return (
		<ul className="flex lg:hidden overflow-scroll sm:justify-center gap-4 text-[12px] text-[#676E76] no-scrollbar px-[15px] pt-8">
			<li
				className={`border-b-2 px-[0.1rem] pb-1 text-nowrap ${
					tab !== 1 ? "border-[#1D283A]" : "border-[#0F62FE]"
				}`}
			>
				<Link to={"/investor/admin/project-introduction"}>
					Project Introduction
				</Link>
			</li>
			<li
				className={`border-b-2 px-[0.1rem] pb-1 text-nowrap ${
					tab !== 2 ? "border-[#1D283A] " : "border-[#0F62FE]"
				}`}
			>
				<Link to={"/investor/admin/key-features-highlights"}>
					Key Features and Highlights
				</Link>
			</li>
			<li
				className={`border-b-2 px-[0.1rem] pb-1 text-nowrap ${
					tab !== 3 ? "border-[#1D283A] " : "border-[#0F62FE]"
				}`}
			>
				Investments
			</li>
		</ul>
	);
};

const AdminMenu = ({
	style = {},
	ref,
}: {
	style?: React.CSSProperties;
	ref?: React.RefObject<HTMLDivElement> | undefined;
}) => {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	if (pathname.includes("/founder")) {
		return (
			<>
				<MobileAdminMenu />
				<div
					className={`${styles.leftWrapper} hidden lg:flex w-full xl:w-fit`}
					style={{ ...style }}
					ref={ref}
				>
					<div className={styles.rounds}>
						{founderLinks.map((link) => (
							<button key={link} className={`${styles.roundBtn}`}>
								{link} <GrayArrow color="#7F8EA3" />
							</button>
						))}
					</div>
				</div>
			</>
		);
	}

	return (
		<>
			<MobileAdminMenu />
			<div
				className={`${styles.leftWrapper} hidden lg:flex`}
				style={{ ...style }}
				ref={ref}
			>
				<Link
					to={"/investor/admin/project-introduction"}
					className={styles.leftCard}
				>
					<h3
						className={styles.leftCardTitle}
						style={{
							color:
								pathname === "/investor/admin/project-introduction"
									? "#fff"
									: "",
						}}
					>
						Project <br />
						Introduction
					</h3>
					<GrayArrow
						color={
							pathname === "/investor/admin/project-introduction"
								? "#fff"
								: "#7F8EA3"
						}
					/>
					<img
						className={styles.leftCardBg}
						src={ProjIntrodImg}
						alt=""
						style={{
							opacity:
								pathname === "/investor/admin/project-introduction"
									? "50%"
									: "10%",
						}}
					/>
				</Link>
				<Link
					to={"/investor/admin/key-features-highlights"}
					className={styles.leftCard}
				>
					<h3
						className={styles.leftCardTitle}
						style={{
							color:
								pathname === "/investor/admin/key-features-highlights"
									? "#fff"
									: "",
						}}
					>
						Key Features <br />
						and Highlights
					</h3>
					<GrayArrow
						color={
							pathname === "/investor/admin/key-features-highlights"
								? "#fff"
								: "#7F8EA3"
						}
					/>
					<img
						className={styles.leftCardBg}
						src={KeyFeaturesImg}
						alt=""
						style={{
							opacity:
								pathname === "/investor/admin/key-features-highlights"
									? "50%"
									: "10%",
						}}
					/>
				</Link>

				<div className={styles.rounds}>
					<span className={styles.title}>Investment Rounds</span>
					<button
						className={`${styles.roundBtn}`}
						onClick={() => navigate("/investor/admin")}
						style={{
							border:
								pathname === "/investor/admin"
									? "1px solid rgba(255, 255, 255, 0.25)"
									: "",
							color: pathname === "/investor/admin" ? "#fff" : "",
						}}
					>
						Seed round{" "}
						<GrayArrow
							color={pathname === "/investor/admin" ? "white" : "#1D283A"}
						/>
					</button>
					<button
						className={styles.roundBtn}
						onClick={() => navigate("/investor/admin/private-round")}
						style={{
							border:
								pathname === "/investor/admin/private-round"
									? "1px solid rgba(255, 255, 255, 0.25)"
									: "",
							color: pathname === "/investor/admin/private-round" ? "#fff" : "",
						}}
					>
						Private round{" "}
						<GrayArrow
							color={
								pathname === "/investor/admin/private-round"
									? "white"
									: "#1D283A"
							}
						/>
					</button>
				</div>
				<div className={styles.socials}>
					<span className={styles.title}>Links</span>
					<div className={styles.socialsWrapper}>
						{socials.map((social) => (
							<button key={social.name} className={styles.social}>
								<div className={styles.socialLeft}>
									<img src={social.img} alt={social.name} />
									<span>{social.name}</span>
								</div>
								<div className={styles.socialBtn}>
									<GrayArrow color="#1D283A" width={24} height={24} />
								</div>
							</button>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default AdminMenu;
