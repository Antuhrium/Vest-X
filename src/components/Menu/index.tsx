import React from "react";
import styles from "./style.module.scss";
import { Link, useLocation } from "react-router-dom";

import Logo from "/images/logo.svg";
import PieChart from "/images/PieChartFill.svg";
import GraphUp from "/images/GraphUpArrow.svg";
import Briefcase from "/images/Briefcase.svg";
import Group from "/images/Group.svg";

import { shortenWallet } from "../../utils/shortenWallet";

const wallet = "OxbrRcKQtfjjLuQxFYCeMXcth77m51257";

const links = [
  {
    icon: PieChart,
    to: "/",
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

interface CustomStyles {
  menuStyle?: Record<string, string>;
  wrapperStyle?: Record<string, string>;
}

const Menu: React.FC<CustomStyles> = ({ menuStyle, wrapperStyle }) => {
  const { pathname } = useLocation();

  return (
    <aside className={styles.menu} style={{ ...menuStyle }}>
      <img src={Logo} alt="logo" className={styles.logoImg} />
      <div className={styles.wrapper} style={{ ...wrapperStyle }}>
        {links.map((link) => (
          <Link
            to={link.to}
            className={`${styles.link} ${
              pathname !== link.to ? styles.notActive : ""
            }`}
          >
            <img src={link.icon} alt="" />
          </Link>
        ))}

        <button className={styles.walletButton}>{shortenWallet(wallet)}</button>
      </div>
      <Link to={""} className={styles.link}>
        <img src={Group} alt="Group" />
      </Link>
    </aside>
  );
};

export default Menu;
