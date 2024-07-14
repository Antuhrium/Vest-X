import { useRef, useEffect } from "react";
import AdminMenu from "../../../../components/AdminMenu";
import Menu from "../../../../components/Menu";
import styles from "./styles.module.scss";
import ArkhamTopBg from "/images/arkham-top-bg.png";
import AdminInvestingContent from "../../../../components/AdminInvestingContent";

const MainInvesting = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const adminMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const adjustMenuHeight = () => {
      if (adminMenuRef.current && menuRef.current) {
        menuRef.current.style.height = `${adminMenuRef.current.offsetHeight}px`;
      }
    };

    // Adjust height on mount and whenever the window is resized
    adjustMenuHeight();
    window.addEventListener("resize", adjustMenuHeight);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", adjustMenuHeight);
    };
  }, []);

  return (
    <div>
      <img src={ArkhamTopBg} alt="arkham top bg" />
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
          style={{ marginLeft: "44px" }}
          roundTitle="Arkham | Private Round"
        />
      </div>
    </div>
  );
};

export default MainInvesting;
