import React, { useRef, useEffect, useState } from "react";
import styles from "./style.module.scss";
import ArkhamTopBg from "/images/arkham-top-bg.png";
import Menu from "../../../components/Menu";
import AdminMenu from "../../../components/AdminMenu";
import CurrentBackers from "../../../components/CurrentBackers/CurrentBackers";
import CentralizedExchanges from "../../../components/CentralizedExchanges/CentralizedExchanges";
import Roadmap from "../../../components/Roadmap/Roadmap";
import AdditionalTraction from "../../../components/AdditionalTraction/AdditionalTraction";
import RightBg from "/images/right-bg.png";
import TopBacker1 from "/images/avatars/top-backer-1.png";
import TopBacker2 from "/images/avatars/top-backer-2.png";
import TopBacker3 from "/images/avatars/top-backer-3.png";
import Backer1 from "/images/avatars/backer-1.png";
import Backer2 from "/images/avatars/backer-2.png";
import Backer3 from "/images/avatars/backer-3.png";
import Backer4 from "/images/avatars/backer-4.png";
import Backer5 from "/images/avatars/backer-5.png";
import Backer6 from "/images/avatars/backer-6.png";
import Backer7 from "/images/avatars/backer-7.png";
import Backer8 from "/images/avatars/backer-8.png";
import Backer9 from "/images/avatars/backer-9.png";
import Backer10 from "/images/avatars/backer-10.png";
import Backer11 from "/images/avatars/backer-11.png";
import Backer12 from "/images/avatars/backer-12.png";
import Binance from "/logos/binance.png";
import Bybit from "/logos/bybit.png";
import BingX from "/logos/bingx.png";
import MEXC from "/logos/mexc.png";
import OKX from "/logos/okx.png";
import KuCoin from "/logos/kucoin.png";
import Gateio from "/logos/gateio.png";
import CoinW from "/logos/coinw.png";
import ArrowBack from "/images/arrow-back-chevron-white.svg";
import ArrowBackDefault from "/images/arrow-back-chevron.svg";

const topBakers = [
  {
    name: "Andreessen Horowitz",
    amount: 1600000,
    avatar: TopBacker1,
  },
  {
    name: "Khosla Ventures",
    amount: 113000,
    avatar: TopBacker2,
  },
  {
    name: "s1l3nt_wh1sp3r",
    amount: 800000,
    avatar: TopBacker3,
  },
];

const generalBackers = [
  {
    name: "veilofmist8",
    amount: 89000,
    avatar: Backer1,
  },
  {
    name: "phantocript_71",
    amount: 80334,
    avatar: Backer2,
  },
  {
    name: "ciphershroud455",
    amount: 61391,
    avatar: Backer3,
  },
  {
    name: "silentcho1112",
    amount: 3213,
    avatar: Backer4,
  },
  {
    name: "Mason Hughes",
    amount: 45312,
    avatar: Backer5,
  },
  {
    name: "NEA",
    amount: 42769,
    avatar: Backer6,
  },
  {
    name: "Olivia Foster",
    amount: 23769,
    avatar: Backer7,
  },
  {
    name: "LV Partners",
    amount: 20000,
    avatar: Backer8,
  },
  {
    name: "Sequoia Capital",
    amount: 43900,
    avatar: Backer9,
  },
  {
    name: "Jack Steele JR.",
    amount: 43943,
    avatar: Backer10,
  },
  {
    name: "Ethan B.",
    amount: 34842,
    avatar: Backer11,
  },
  {
    name: "swhispers99",
    amount: 1231,
    avatar: Backer12,
  },
];

const exchanges = [
  {
    name: "Binance",
    logo: Binance,
  },
  {
    name: "Bybit",
    logo: Bybit,
  },
  {
    name: "BingX",
    logo: BingX,
  },
  {
    name: "MEXC",
    logo: MEXC,
  },
  {
    name: "OKX",
    logo: OKX,
  },
  {
    name: "KuCoin",
    logo: KuCoin,
  },
  {
    name: "Gate.io",
    logo: Gateio,
  },
  {
    name: "CoinW",
    logo: CoinW,
  },
];

const NormalSizedKeyFeaturesPage: React.FC = () => {
  return (
    <div className={`${styles.wrapper} hidden lg:flex`}>
      <CurrentBackers topBackers={topBakers} generalBackers={generalBackers} />
      <CentralizedExchanges exchanges={exchanges} />
      <Roadmap />
      <AdditionalTraction />
    </div>
  );
};

const PhoneSizedKeyFeaturesPage: React.FC = () => {
  const [tab, setTab] = useState(0);
  return (
    <div
      className={`${styles.wrapper} w-full min-h-screen text-white text-[18px] gap-3 py-1 px-3 pb-24 mt-6`}
    >
      {tab === 0 && (
        <>
          <div
            className="bg-[#0A0F1A] w-full px-[32px] py-[20px] flex items-center"
            onClick={() => setTab(1)}
          >
            Current Backers
            <img
              src={ArrowBack}
              className="w-4 h-4 ml-auto rotate-180 text-white"
              alt="arrow next"
            />
          </div>
          <div
            className="bg-[#0A0F1A] w-full px-[32px] py-[20px] flex items-center"
            onClick={() => setTab(2)}
          >
            Centralized Exchanges
            <img
              src={ArrowBack}
              className="w-4 h-4 ml-auto rotate-180 text-white"
              alt="arrow next"
            />
          </div>
          <div
            className="bg-[#0A0F1A] w-full px-[32px] py-[20px] flex items-center"
            onClick={() => setTab(3)}
          >
            Roadmap
            <img
              src={ArrowBack}
              className="w-4 h-4 ml-auto rotate-180 text-white"
              alt="arrow next"
            />
          </div>
          <div
            className="bg-[#0A0F1A] w-full px-[32px] py-[20px] flex items-center"
            onClick={() => setTab(4)}
          >
            Additional Traction
            <img
              src={ArrowBack}
              className="w-4 h-4 ml-auto rotate-180 text-white"
              alt="arrow next"
            />
          </div>
        </>
      )}
      {tab === 1 && (
        <>
          <span
            className="flex gap-1 items-center text-[#7F8EA3]"
            onClick={() => setTab(0)}
          >
            <img src={ArrowBack} className="w-4 h-4 mr-2" alt="arrow back" />
            Back Key Features and Highlights
          </span>
          <CurrentBackers
            topBackers={topBakers}
            generalBackers={generalBackers}
          />
        </>
      )}
      {tab === 2 && (
        <>
          <span
            className="flex gap-1 items-center text-[#7F8EA3]"
            onClick={() => setTab(0)}
          >
            <img src={ArrowBack} className="w-4 h-4 mr-2" alt="arrow back" />
            Back Key Features and Highlights
          </span>
          <CentralizedExchanges exchanges={exchanges} />
        </>
      )}
      {tab === 3 && (
        <>
          <span
            className="flex gap-1 items-center text-[#7F8EA3]"
            onClick={() => setTab(0)}
          >
            <img src={ArrowBack} className="w-4 h-4 mr-2" alt="arrow back" />
            Back Key Features and Highlights
          </span>
          <Roadmap />
        </>
      )}
      {tab === 4 && (
        <>
          <span
            className="flex gap-1 items-center text-[#7F8EA3]"
            onClick={() => setTab(0)}
          >
            <img src={ArrowBack} className="w-4 h-4 mr-2" alt="arrow back" />
            Back Key Features and Highlights
          </span>
          <AdditionalTraction />
        </>
      )}
    </div>
  );
};

const KeyFeaturesPage: React.FC = () => {
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
      <div className={styles.containerWithPic}>
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
            }}
          />
          <>
            <NormalSizedKeyFeaturesPage />
            <PhoneSizedKeyFeaturesPage />
          </>
        </div>
      </div>
      <img className={styles.rightBg} src={RightBg} alt="" />
    </>
  );
};

export default KeyFeaturesPage;
