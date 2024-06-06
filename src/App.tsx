import styles from "./App.module.css";
import GrayArrow from "./components/GrayArrow";

import Avatar from "/avatar.png";
import Logo from "/logo.png";
import ProjIntrodImg from "/proj-introd-img.png";
import KeyFeaturesImg from "/key-features-img.png";
import ArkhamBg from "/arkham-bg.png";
import RightBg from "/right-bg.png";
import TopBg from "/top-bg.png";
import Circle from "/circle.png";

import Twitter from "/socials/twitter.png";
import Telegram from "/socials/telegram.png";
import Linkedin from "/socials/linkedin.png";
import Website from "/socials/web.png";
import MyChart from "./components/MyChart";

const socials = [
  { name: "Twitter", img: Twitter },
  { name: "Telegram", img: Telegram },
  { name: "Linkedin", img: Linkedin },
  { name: "Website", img: Website },
];

function App() {
  return (
    <>
      <main className={styles.mainContainer}>
        <div className={styles.topWrapper}>
          <div className={styles.avatarWrapper}>
            <img src={Avatar} alt="avatar" />
          </div>
        </div>
        <img className={styles.topBg} src={TopBg} alt="" />

        <div className={styles.bottomWrapper}>
          <aside className={styles.navBar}>
            <div className={styles.navBarWrapper}>
              <img src={Logo} alt="logo" className={styles.navLogo} />
              <div className={styles.btnWrapper}>
                <button className={styles.navBtn}>ALL PROJECTS</button>
                <button className={styles.navWhiteBtn}>CONNECT WALLET</button>
              </div>
            </div>
          </aside>
          <div className={styles.wrapper}>
            <div className={styles.leftWrapper}>
              <div className={styles.leftCard}>
                <h3 className={styles.leftCardTitle}>
                  Project <br />
                  Introduction
                </h3>
                <GrayArrow />
                <img className={styles.leftCardBg} src={ProjIntrodImg} alt="" />
              </div>
              <div className={styles.leftCard}>
                <h3 className={styles.leftCardTitle}>
                  Key Features <br />
                  and Highlights
                </h3>
                <GrayArrow />
                <img
                  className={styles.leftCardBg}
                  src={KeyFeaturesImg}
                  alt=""
                />
              </div>
              <div className={styles.rounds}>
                <span className={styles.roundsTitle}>Investment Rounds</span>
                <button className={styles.roundBtn}>
                  Seed round <GrayArrow />
                </button>
                <button className={styles.roundBtn}>
                  Private round <GrayArrow />
                </button>
              </div>
              <div className={styles.socials}>
                <span className={styles.socialsTitle}>Links</span>
                {socials.map((social) => (
                  <button className={styles.social}>
                    <div className={styles.socialLeft}>
                      <img src={social.img} alt={social.name} />
                      <span>{social.name}</span>
                    </div>
                    <GrayArrow />
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.rightWrapper}>
              <div className={styles.rightCard}>
                <div className={styles.rightTitle}>
                  <h3>Arkham | Seed round</h3>
                  <span>(ARKM)</span>
                </div>
                <p className={styles.rightText}>
                  Arkham (ARKM) is an intel-to-earn token powering the
                  deanonymization of the blockchain with Al.
                </p>
                <button className={styles.rightBtn}>INVEST SEED</button>
                <img
                  className={styles.rightCardBg}
                  src={ArkhamBg}
                  alt="Arkham"
                />
              </div>
              <span className={styles.vestingTitle}>Vesting Schedule</span>
              <div className={styles.vesting}>
                <div className={styles.vestingWrapper}>
                  <div className={styles.vestingItem}>
                    <div className={styles.vestingNumber}>1</div>
                    <span className={styles.vestingName}>TGE</span>
                    <span className={styles.vestingInf}>15%</span>
                  </div>
                  <div className={styles.vestingItem}>
                    <div className={styles.vestingNumber}>2</div>
                    <span className={styles.vestingName}>Cliff</span>
                    <span className={styles.vestingInf}>120 days</span>
                  </div>
                  <div className={styles.vestingItem}>
                    <div className={styles.vestingNumber}>3</div>
                    <span className={styles.vestingName}>Vesting</span>
                    <span className={styles.vestingInf}>120 days</span>
                  </div>
                </div>
                <div className={styles.vestingWrapper}>
                  <div className={styles.vestingItem}>
                    <span className={styles.vestingBottomTitle}>
                      Allocation
                    </span>
                    <span className={styles.vestingBottomInf}>
                      1 000 000 tokens
                    </span>
                  </div>
                  <div className={styles.vestingItem}>
                    <span className={styles.vestingBottomTitle}>
                      Token price
                    </span>
                    <span className={styles.vestingBottomInf}>0,04 USD</span>
                  </div>
                  <GrayArrow />
                </div>
              </div>
              <div className={styles.graph}>
                <div className={styles.leftGraphWrapper}>
                  <span className={styles.leftGraphTitle}>
                    Total Supply Weight
                  </span>
                  <div className={styles.leftGraph}>
                    <img src={Circle} alt="" className={styles.leftGraphImg} />
                    <span className={styles.graphPercent}>15%</span>
                    <span className={styles.graphText}>Supply</span>
                  </div>
                </div>
                <div className={styles.chartWrapper}>
                  <span className={styles.chartTitle}>Vesting</span>
                  <MyChart />
                </div>
              </div>
              <img className={styles.rightBg} src={RightBg} alt="" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
