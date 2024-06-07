import Twitter from "/socials/twitter.svg";
import Telegram from "/socials/telegram.svg";
import Linkedin from "/socials/linkedin.svg";
import Website from "/socials/web.svg";

import ProjIntrodImg from "/proj-introd-img.png";
import KeyFeaturesImg from "/key-features-img.png";
import ArkhamBg from "/arkham-bg.png";

import styles from "./style.module.css";
import GrayArrow from "../GrayArrow";
import Fade from "../FadeIn";

const socials = [
  { name: "Twitter", img: Twitter },
  { name: "Telegram", img: Telegram },
  { name: "Linkedin", img: Linkedin },
  { name: "Website", img: Website },
];

const LeftWrapper = () => {
  return (
    <div className={styles.leftWrapper}>
      <div className={`${styles.rightCard} ${styles.mobileCard}`}>
        <div className={styles.rightTitle}>
          <h3>Arkham | Seed round</h3>
          <span>(ARKM)</span>
        </div>
        <p className={styles.rightText}>
          Arkham (ARKM) is an intel-to-earn token powering the deanonymization
          of the blockchain with Al.
        </p>
        <button className={styles.rightBtn}>INVEST SEED</button>
        <img className={styles.rightCardBg} src={ArkhamBg} alt="Arkham" />
      </div>
      <Fade>
        <div className={styles.leftCard}>
          <h3 className={styles.leftCardTitle}>
            Project <br />
            Introduction
          </h3>
          <GrayArrow />
          <img className={styles.leftCardBg} src={ProjIntrodImg} alt="" />
        </div>
      </Fade>
      <Fade delay={0.2}>
        <div className={styles.leftCard}>
          <h3 className={styles.leftCardTitle}>
            Key Features <br />
            and Highlights
          </h3>
          <GrayArrow />
          <img className={styles.leftCardBg} src={KeyFeaturesImg} alt="" />
        </div>
      </Fade>

      <div className={styles.rounds}>
        <span className={styles.roundsTitle}>Investment Rounds</span>
        <button className={`${styles.roundBtn}`}>
          Seed round <GrayArrow />
        </button>
        <button className={styles.roundBtn}>
          Private round <GrayArrow />
        </button>
      </div>
      <div className={styles.socials}>
        <span className={styles.socialsTitle}>Links</span>
        <div className={styles.socialsWrapper}>
          {socials.map((social) => (
            <button key={social.name} className={styles.social}>
              <div className={styles.socialLeft}>
                <img src={social.img} alt={social.name} />
                <span>{social.name}</span>
              </div>
              <div className={styles.socialBtn}>
                <GrayArrow />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftWrapper;
