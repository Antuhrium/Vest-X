import React from "react";
import styles from "./style.module.scss";
import ArkhamTopBg from "/images/arkham-top-bg.png";

import Menu from "../../../components/Menu";
import AdminMenu from "../../../components/AdminMenu";
import AdminInvestingContent from "../../../components/AdminInvestingContent";

const FounderAdminPanel: React.FC = () => {
    return (
        <div>
            <img src={ArkhamTopBg} alt="arkham top bg" />
            <div className={styles.container}>
                <Menu />
                <AdminMenu />
                <AdminInvestingContent />
            </div>
        </div>
    );
};

export default FounderAdminPanel;
