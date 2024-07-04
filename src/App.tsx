import styles from "./App.module.scss";
import "./global-recharts.css";
import LeftWrapper from "./components/LeftWrapper";
import Menu from "./components/Menu";
import RightWrapper from "./components/RightWrapper";

import Avatar from "/images/avatar.svg";
import Logo from "/images/logo.png";
import TopBg from "/images/top-bg.png";
import InvestorDashboardPage from "./pages/InvestorDashboardPage";
import { routes } from "./routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <main className={styles.mainContainer}>
        <RouterProvider router={routes} />
        {/* <aside className={styles.navBarMobile}>
          <img src={Logo} alt="logo" className={styles.navLogo} />
          <div className={styles.btnWrapper}>
            <button className={styles.navBtn}>ALL PROJECTS</button>
            <button className={styles.navWhiteBtn}>CONNECT WALLET</button>
          </div>
        </aside>
        <div className={styles.topWrapper}>
          <div className={styles.avatarWrapper}>
            <img src={Avatar} alt="avatar" />
          </div>
        </div>
        <img className={styles.topBg} src={TopBg} alt="" />

        <div className={styles.bottomWrapper}>
          <aside className={styles.navBar}>
            <img src={Logo} alt="logo" className={styles.navLogo} />
            <div className={styles.btnWrapper}>
              <button className={styles.navBtn}>ALL PROJECTS</button>
              <button className={styles.navWhiteBtn}>CONNECT WALLET</button>
            </div>
          </aside>
          <Menu />
          <div className={styles.wrapper}>
            <LeftWrapper />
            <RightWrapper />
          </div>
        </div> */}
      </main>
    </>
  );
}

export default App;
