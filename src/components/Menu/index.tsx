import React from "react";
import styles from "./style.module.scss";
import { Link, useLocation } from "react-router-dom";

import Logo from "/images/logo.svg";
import PieChart from "/images/PieChartFill.svg";
import GraphUp from "/images/GraphUpArrow.svg";
import Briefcase from "/images/Briefcase.svg";
import Plus from "/images/Plus.svg";
import Group from "/images/Group.svg";

import { shortenWallet } from "../../utils/shortenWallet";

const wallet = "OxbrRcKQtfjjLuQxFYCeMXcth77m51257";

const investorLinks = [
    {
        icon: PieChart,
        to: "/investor",
    },
    {
        icon: GraphUp,
        to: "/investor/invest-in-project",
    },
    {
        icon: Briefcase,
        to: "/investor/admin",
    },
];

const founderLinks = [
    {
        icon: Plus,
        to: "/founder",
    },
    {
        icon: Briefcase,
        to: "/founder/admin",
    },
];

interface CustomStyles {
    menuStyle?: Record<string, string>;
    wrapperStyle?: Record<string, string>;
}

const Menu: React.FC<CustomStyles> = ({ menuStyle, wrapperStyle }) => {
    const { pathname } = useLocation();

    const links = pathname.includes("/investor") ? investorLinks : founderLinks;

    const linkStyle = (link: string) => {
        if (link === links[0].to && pathname === links[0].to) {
            return "";
        } else if (link !== links[0].to && pathname.includes(link)) {
            return "";
        } else {
            return styles.notActive;
        }
    };

    return (
        <aside className={styles.menu} style={{ ...menuStyle }}>
            <img src={Logo} alt="logo" className={styles.logoImg} />
            <div className={styles.wrapper} style={{ ...wrapperStyle }}>
                {links.map((link) => (
                    <Link
                        to={link.to}
                        className={`${styles.link} ${linkStyle(link.to)}`}
                    >
                        <img src={link.icon} alt="" />
                    </Link>
                ))}

                <button className={styles.walletButton}>
                    {shortenWallet(wallet)}
                </button>
            </div>
            <Link to={""} className={styles.link}>
                <img src={Group} alt="Group" />
            </Link>
        </aside>
    );
};

export default Menu;
