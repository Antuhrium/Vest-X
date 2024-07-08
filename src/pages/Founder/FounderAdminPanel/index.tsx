import React, { useState } from "react";
import styles from "./style.module.scss";
import ArkhamTopBg from "/images/arkham-top-bg.png";

import Menu from "../../../components/Menu";
import AdminMenu from "../../../components/AdminMenu";
import AdminInvestingContent from "../../../components/AdminInvestingContent";
import PopupMessage from "../../../components/PopupMessage";


const FounderAdminPanel: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    return (
        <div>
            <img src={ArkhamTopBg} alt="arkham top bg" />
            {isModalOpen && (
                <PopupMessage
                    title="Congratulations!"
                    description={{text: "Your project has been successfully published. For any help contact our", link: "24/7 support chat."}}
                    setIsModalOpen={setIsModalOpen}
                    type="success"
                />
            )}
            <div className={styles.container}>
                <Menu />
                <AdminMenu />
                <AdminInvestingContent />
            </div>
        </div>
    );
};

export default FounderAdminPanel;
