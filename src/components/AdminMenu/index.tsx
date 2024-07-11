import Twitter from "/images/socials/twitter.svg";
import Telegram from "/images/socials/telegram.svg";
import Linkedin from "/images/socials/linkedin.svg";
import Website from "/images/socials/web.svg";

import ProjIntrodImg from "/images/proj-introd-img.png";
import KeyFeaturesImg from "/images/key-features-img.png";

import styles from "./style.module.scss";
import GrayArrow from "../GrayArrow";
import { Link, useLocation, useNavigate } from "react-router-dom";

const socials = [
  { name: "Twitter", img: Twitter },
  { name: "Telegram", img: Telegram },
  { name: "Linkedin", img: Linkedin },
  { name: "Website", img: Website },
];

const founderLinks = [
  "Edit Project Info",
  "Edit Vesting schedule",
  "Vesting override",
  "SAFT Agreement",
  "Investor database",
];

const AdminMenu = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  if (pathname.includes("/founder")) {
    return (
      <div className={styles.leftWrapper}>
        <div className={styles.rounds}>
          {founderLinks.map((link) => (
            <button key={link} className={`${styles.roundBtn}`}>
              {link} <GrayArrow color="#7F8EA3" />
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.leftWrapper}>
      <Link
        to={"/investor/admin/project-introduction"}
        className={styles.leftCard}
      >
        <h3
          className={styles.leftCardTitle}
          style={{
            color:
              pathname === "/investor/admin/project-introduction" ? "#fff" : "",
          }}
        >
          Project <br />
          Introduction
        </h3>
        <GrayArrow
          color={
            pathname === "/investor/admin/project-introduction"
              ? "#fff"
              : "#7F8EA3"
          }
        />
        <img
          className={styles.leftCardBg}
          src={ProjIntrodImg}
          alt=""
          style={{
            opacity:
              pathname === "/investor/admin/project-introduction"
                ? "50%"
                : "10%",
          }}
        />
      </Link>
      <Link
        to={"/investor/admin/key-features-highlights"}
        className={styles.leftCard}
      >
        <h3
          className={styles.leftCardTitle}
          style={{
            color:
              pathname === "/investor/admin/key-features-highlights"
                ? "#fff"
                : "",
          }}
        >
          Key Features <br />
          and Highlights
        </h3>
        <GrayArrow
          color={
            pathname === "/investor/admin/key-features-highlights"
              ? "#fff"
              : "#7F8EA3"
          }
        />
        <img
          className={styles.leftCardBg}
          src={KeyFeaturesImg}
          alt=""
          style={{
            opacity:
              pathname === "/investor/admin/key-features-highlights"
                ? "50%"
                : "10%",
          }}
        />
      </Link>

      <div className={styles.rounds}>
        <span className={styles.title}>Investment Rounds</span>
        <button className={`${styles.roundBtn}`}>
          Seed round <GrayArrow color="#1D283A" />
        </button>
        <button
          className={styles.roundBtn}
          onClick={() => navigate("/investor/admin/private-round")}
        >
          Private round <GrayArrow color="#1D283A" />
        </button>
      </div>
      <div className={styles.socials}>
        <span className={styles.title}>Links</span>
        <div className={styles.socialsWrapper}>
          {socials.map((social) => (
            <button key={social.name} className={styles.social}>
              <div className={styles.socialLeft}>
                <img src={social.img} alt={social.name} />
                <span>{social.name}</span>
              </div>
              <div className={styles.socialBtn}>
                <GrayArrow color="#1D283A" width={24} height={24} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminMenu;
