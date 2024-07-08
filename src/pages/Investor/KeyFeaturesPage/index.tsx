import React from "react";
import styles from "./style.module.scss";
import ArkhamTopBg from "/images/arkham-top-bg.png";
import Menu from "../../../components/Menu";
import AdminMenu from "../../../components/AdminMenu";
import CurrentBackers from "../../../components/CurrentBackers/CurrentBackers";
import CentralizedExchanges from "../../../components/CentralizedExchanges/CentralizedExchanges";
import Roadmap from "../../../components/Roadmap/Roadmap";
import AdditionalTraction from "../../../components/AdditionalTraction/AdditionalTraction";
import RightBg from "/images/right-bg.png";

const topBakers = [
    {
        name: "Andreessen Horowitz",
        amount: 1600000,
        avatar: "/images/backer-avatar.png",
    },
    {
        name: "Andreessen Horowitz",
        amount: 1600000,
        avatar: "/images/backer-avatar.png",
    },
    {
        name: "Andreessen Horowitz",
        amount: 1600000,
        avatar: "/images/backer-avatar.png",
    },
];

const generalBackers = [
    {
        name: "veilofmist8",
        amount: 89000,
        avatar: "/images/backer-avatar.png",
    },
    {
        name: "veilofmist8",
        amount: 89000,
        avatar: "/images/backer-avatar.png",
    },
    {
        name: "veilofmist8",
        amount: 89000,
        avatar: "/images/backer-avatar.png",
    },
    {
        name: "veilofmist8",
        amount: 89000,
        avatar: "/images/backer-avatar.png",
    },
    {
        name: "veilofmist8",
        amount: 89000,
        avatar: "/images/backer-avatar.png",
    },
    {
        name: "veilofmist8",
        amount: 89000,
        avatar: "/images/backer-avatar.png",
    },
    {
        name: "veilofmist8",
        amount: 89000,
        avatar: "/images/backer-avatar.png",
    },
    {
        name: "veilofmist8",
        amount: 89000,
        avatar: "/images/backer-avatar.png",
    },
    {
        name: "veilofmist8",
        amount: 89000,
        avatar: "/images/backer-avatar.png",
    },
    {
        name: "veilofmist8",
        amount: 89000,
        avatar: "/images/backer-avatar.png",
    },
    {
        name: "veilofmist8",
        amount: 89000,
        avatar: "/images/backer-avatar.png",
    },
    {
        name: "veilofmist8",
        amount: 89000,
        avatar: "/images/backer-avatar.png",
    },
];

const exchanges = [
    {
        name: "Binance",
        logo: "/images/binance-logo.png",
    },
    {
        name: "Binance",
        logo: "/images/binance-logo.png",
    },
    {
        name: "Binance",
        logo: "/images/binance-logo.png",
    },
    {
        name: "Binance",
        logo: "/images/binance-logo.png",
    },
    {
        name: "Binance",
        logo: "/images/binance-logo.png",
    },
    {
        name: "Binance",
        logo: "/images/binance-logo.png",
    },
    {
        name: "Binance",
        logo: "/images/binance-logo.png",
    },
    {
        name: "Binance",
        logo: "/images/binance-logo.png",
    },
];

const KeyFeaturesPage: React.FC = () => {
    return (
        <div className={styles.containerWithPic}>
            <img src={ArkhamTopBg} alt="arkham top bg" />
            <div className={styles.container}>
                <Menu />
                <AdminMenu />
                <div className={styles.wrapper}>
                    <CurrentBackers
                        topBackers={topBakers}
                        generalBackers={generalBackers}
                    />
                    <CentralizedExchanges exchanges={exchanges} />
                    <Roadmap />
                    <AdditionalTraction />
                    <img className={styles.rightBg} src={RightBg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default KeyFeaturesPage;
