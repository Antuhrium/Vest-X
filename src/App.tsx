import styles from "./App.module.scss";
import LeftWrapper from "./components/LeftWrapper";
import RightWrapper from "./components/RightWrapper";

import Avatar from "/avatar.svg";
import Logo from "/logo.png";
import TopBg from "/top-bg.png";

function App() {
  return (
    <>
      <main className={styles.mainContainer}>
        <aside className={styles.navBarMobile}>
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
          <div className={styles.wrapper}>
            <LeftWrapper />
            <RightWrapper />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
