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
    to: "",
  },
  {
    icon: Briefcase,
    to: "",
  },
];

const Menu: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <aside className={styles.menu}>
      <img src={Logo} alt="logo" className={styles.logoImg} />
      <div className={styles.wrapper}>
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
