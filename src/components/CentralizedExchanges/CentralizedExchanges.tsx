import React from 'react';
import styles from './style.module.scss';

interface Exchange {
  name: string;
  logo: string;
}

interface CentralizedExchangesProps {
  exchanges: Exchange[];
}

const CentralizedExchanges: React.FC<CentralizedExchangesProps> = ({ exchanges }) => {
  return (
    <div className={styles.centralizedExchanges}>
      <h2 className={styles.title}>Centralized Exchanges</h2>
      <div className={styles.exchangesGrid}>
        {exchanges.map((exchange, index) => (
          <div key={`exchange-${index}`} className={styles.exchange}>
            <img src={exchange.logo} alt={exchange.name} className={styles.logo} />
            <span className={styles.name}>{exchange.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CentralizedExchanges;

// use outer div or not 
// const exchanges = [
//   { name: 'Binance', logo: '/logos/binance.png' },
//   { name: 'Bybit', logo: '/logos/bybit.png' },
//   { name: 'BingX', logo: '/logos/bingx.png' },
//   { name: 'MEXC', logo: '/logos/mexc.png' },
//   { name: 'OKX', logo: '/logos/okx.png' },
//   { name: 'KuCoin', logo: '/logos/kucoin.png' },
//   { name: 'Gate.io', logo: '/logos/gateio.png' },
//   { name: 'CoinW', logo: '/logos/coinw.png' },
// ];
//
// <CentralizedExchanges exchanges={exchanges} />
