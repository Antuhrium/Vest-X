import { useEffect, useState } from "react";

import styles from "./styles.module.scss";
import Menu from "../../../../components/Menu";
import Person1 from "/images/person-1.png";
import Person2 from "/images/person-2.png";
import Person3 from "/images/person-3.png";
import RightBg from "/images/right-bg.png";
import ArkhamTopBg from "/images/arkham-top-bg.png";
import { TeamMember } from "./types";
import AdminMenu from "../../../../components/AdminMenu";
export default function ProjectIntroduction() {
  const picPaths = [Person1, Person2, Person3];
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    setTeamMembers([
      {
        name: "Bob Martinez",
        role: "CEO & Co-Founder",
        description:
          "Hailing from San Francisco, USA, Bob is a seasoned software engineer with a deep background in decentralized applications.",
      },
      {
        name: "Jake Patel",
        role: "Lead Developer",
        description:
          "Originally from Mumbai, India, Jake is a skilled developer specializing in blockchain technologies.",
      },
      {
        name: "Maria Silva",
        role: "Head of Marketing",
        description:
          "Maria from Madrid, Spain, leads VestX's global marketing efforts, crafting strategies to engage a diverse community.",
      },
    ]);
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
            menuStyle={{
              position: "relative",
            }}
          />
          <AdminMenu
            style={{
              position: "relative",
              left: "0",
            }}
          />
          <div className={styles.rightPartContainer}>
            <div className={styles.textSection}>
              <h2 className={styles.gradientHeader}>Summary</h2>
              <p>
                VestX is a specialized platform designed for managing and
                automating token vesting schedules. It offers a robust and
                customizable framework suitable for projects and organizations
                of all sizes. VestX ensures transparent and timely token
                releases, supporting various use cases such as employee
                incentives, community rewards, and investor distributions. The
                platform's native token, VEST, provides dual utilities: staking
                to access premium features and renting to earn passive income.
                Retail token holders can pool their VEST tokens to generate
                rental (yield) income, making the platform inclusive and
                beneficial for all participants in the ecosystem.
              </p>
            </div>
            <div
              className={`${styles.textSection} mt-6 lg:-mt-[0.5rem] lg:z-[1000] lg:bg-[#030711]`}
            >
              <h2 className={styles.gradientHeader}>Overview</h2>
              <p>
                VestX caters to two main categories of users: crypto-native
                DAOs/projects and professional organizations transitioning to
                Web3 (Web2.5). For the crypto-native sector, VestX supports key
                use cases such as influencer and KOL fundraising, risk control,
                and distribution; DeFi liquidity pooling; and gaming treasury
                asset management. In the Web2.5 space, the platform enables RWA
                originators to mint asset tokens and pool investors with
                enhanced transparency and compliance. VestX's native token,
                VEST, has two utilities: stake-to-use and rent-to-use. Retail
                token holders can pool VEST tokens for lending and generate
                rental income, offering customized yield opportunities for
                participants.
              </p>
            </div>
            <div className={`${styles.textSection} mt-6 lg:-mt-[0.5rem]`}>
              <h2 className={styles.gradientHeader}>Team</h2>
              <div className={styles.teamContainer}>
                {teamMembers.map((member, index) => (
                  <div key={index} className={styles.teamMemberCard}>
                    <img src={picPaths[index]} alt="person pic" />
                    <h3 className={styles.name}>{member.name}</h3>
                    <p className={styles.role}>{member.role}</p>
                    <p className={styles.description}>{member.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.rightBg} src={RightBg} alt="right bg" />
    </>
  );
}
