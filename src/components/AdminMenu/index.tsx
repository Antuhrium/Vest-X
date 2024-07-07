import Twitter from "/images/socials/twitter.svg";
import Telegram from "/images/socials/telegram.svg";
import Linkedin from "/images/socials/linkedin.svg";
import Website from "/images/socials/web.svg";

import ProjIntrodImg from "/images/proj-introd-img.png";
import KeyFeaturesImg from "/images/key-features-img.png";

import styles from "./style.module.scss";
import GrayArrow from "../GrayArrow";
import { Link, useLocation } from "react-router-dom";

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

const AdminMenu = () => {
    const { pathname } = useLocation();

    if (pathname.includes("/founder")) {
        return (
            <div className={styles.leftWrapper}>
                <div className={styles.rounds}>
                    {founderLinks.map((link) => (
                        <button key={link} className={`${styles.roundBtn}`}>
                            {link} <GrayArrow color="#7F8EA3" />
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className={styles.leftWrapper}>
            <Link
                to={"/investor/admin/project-introduction"}
                className={styles.leftCard}
            >
                <h3 className={styles.leftCardTitle}>
                    Project <br />
                    Introduction
                </h3>
                <GrayArrow />
                <img className={styles.leftCardBg} src={ProjIntrodImg} alt="" />
            </Link>
            <Link
                to={"/investor/admin/key-features-highlights"}
                className={styles.leftCard}
            >
                <h3 className={styles.leftCardTitle}>
                    Key Features <br />
                    and Highlights
                </h3>
                <GrayArrow />
                <img
                    className={styles.leftCardBg}
                    src={KeyFeaturesImg}
                    alt=""
                />
            </Link>

            <div className={styles.rounds}>
                <span className={styles.title}>Investment Rounds</span>
                <button className={`${styles.roundBtn}`}>
                    Seed round <GrayArrow color="#1D283A" />
                </button>
                <button className={styles.roundBtn}>
                    Private round <GrayArrow color="#1D283A" />
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
                                <GrayArrow
                                    color="#1D283A"
                                    width={24}
                                    height={24}
                                />
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminMenu;
