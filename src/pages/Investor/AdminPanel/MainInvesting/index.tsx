import AdminMenu from "../../../../components/AdminMenu";
import Menu from "../../../../components/Menu";
import styles from "./styles.module.scss";
import ArkhamTopBg from "/images/arkham-top-bg.png";

import AdminInvestingContent from "../../../../components/AdminInvestingContent";

const MainInvesting = () => {
  return (
    <div>
      <img src={ArkhamTopBg} alt="arkham top bg" />
      <div className={styles.container}>
        <Menu
          menuStyle={{
            position: "relative",
            height: "119vh",
          }}
        />
        <AdminMenu
          style={{
            position: "relative",
            left: "0",
            height: "119vh",
          }}
        />
        <AdminInvestingContent style={{ marginLeft: "44px" }} />
      </div>
    </div>
  );
};

export default MainInvesting;
