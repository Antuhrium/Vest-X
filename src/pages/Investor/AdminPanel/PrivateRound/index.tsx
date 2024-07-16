import { useRef, useEffect } from "react";
import AdminMenu from "../../../../components/AdminMenu";
import Menu from "../../../../components/Menu";
import styles from "./styles.module.scss";
import ArkhamTopBg from "/images/arkham-top-bg.png";
import AdminInvestingContent from "../../../../components/AdminInvestingContent";
import RightBg from "/images/right-bg.png";

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
    <>
      <img className={styles.rightBg} src={RightBg} alt="" />
      <div>
        <div
          style={{
            background: `url(${ArkhamTopBg})`,
          }}
          className={styles.bgContainer}
        ></div>
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
            style={{ margin: "48px auto" }}
            roundTitle="Arkham | Private Round"
          />
        </div>
      </div>
    </>
  );
};

export default MainInvesting;
