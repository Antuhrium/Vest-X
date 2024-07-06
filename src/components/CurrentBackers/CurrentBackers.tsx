import React from 'react';
import styles from './style.module.scss';

interface Backer {
  name: string;
  amount: number;
  avatar: string;
}

interface CurrentBackersProps {
  topBackers: Backer[];
  generalBackers: Backer[];
}

const CurrentBackers: React.FC<CurrentBackersProps> = ({ topBackers, generalBackers }) => {
  return (
    <div className={styles.currentBackers}>
      <h2 className={styles.title}>Current Backers</h2>
      <div className={styles.topBackersGrid}>
        {topBackers.map((backer, index) => (
          <div key={`top-${index}`} className={styles.topBacker}>
            <div className={styles.avatarContainer}>
              <img src={backer.avatar} alt={backer.name} className={styles.avatar} />
            </div>
            <div className={styles.info}>
              <div className={styles.name}>{backer.name}</div>
              <div className={styles.amount}>{`${backer.amount.toLocaleString()} USD`}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.generalBackersGrid}>
        {generalBackers.map((backer, index) => (
          <div key={`general-${index}`} className={styles.backer}>
            <div className={styles.avatarContainer}>
              <img src={backer.avatar} alt={backer.name} className={styles.avatar} />
            </div>
            <div className={styles.info}>
              <div className={styles.name}>{backer.name}</div>
              <div className={styles.amount}>{`${backer.amount.toLocaleString()} USD`}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CurrentBackers;

// take to outer div or not 
// <CurrentBackers generalBackers={generalBackers} topBackers={topBackers} />
//
//
// const topBackers = [
//   { name: 'Andreessen Horowitz', amount: 1600000, avatar: '/avatars/1.png' },
//   { name: 'Khosla Ventures', amount: 1130000, avatar: '/avatars/2.png' },
//   { name: 's1l3nt_wh1sp3r', amount: 800000, avatar: '/avatars/3.png' },
// ]
// const generalBackers = [
//   { name: 'yellofmist8', amount: 89000, avatar: '/avatars/4.png' },
//   { name: 'phantocript_71', amount: 80334, avatar: '/avatars/5.png' },
//   { name: 'ciphershroud456', amount: 61391, avatar: '/avatars/6.png' },
//   { name: 'silentbot1112', amount: 3213, avatar: '/avatars/7.png' },
//   { name: 'Mason Hughes', amount: 45312, avatar: '/avatars/8.png' },
//   { name: 'NEA', amount: 42769, avatar: '/avatars/9.png' },
//   { name: 'Olivia Foster', amount: 23769, avatar: '/avatars/10.png' },
//   { name: 'LV Partners', amount: 20000, avatar: '/avatars/11.png' },
//   { name: 'Sequoia Capital', amount: 43900, avatar: '/avatars/12.png' },
//   { name: 'Jack Steele JR.', amount: 43943, avatar: '/avatars/13.png' },
//   { name: 'Ethan B', amount: 34842, avatar: '/avatars/14.png' },
//   { name: 'swhispers99', amount: 1231, avatar: '/avatars/15.png' },
// ];

