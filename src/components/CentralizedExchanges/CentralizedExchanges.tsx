import React, { useState } from "react";
import styles from "./style.module.scss";
import Pagination from "../Pagination/Pagination";

interface Exchange {
	name: string;
	logo: string;
}

interface CentralizedExchangesProps {
	exchanges: Exchange[];
}

const MobileVersion: React.FC<CentralizedExchangesProps> = ({ exchanges }) => {
	const [page, setPage] = useState(1);
	return (
		<div className={`${styles.centralizedExchanges} block lg:hidden`}>
			<h2 className={styles.title}>Centralized Exchanges</h2>
			{exchanges.map((exchange, index) => (
				<div className="bg-[#101322] border-[1px] border-[#1D283A]">
					<div
						key={`exchange-${index}`}
						className={`${styles.exchange} justify-start p-2`}
					>
						<div className={styles.avatarContainer}>
							<img
								src={exchange.logo}
								alt={exchange.name}
								className={styles.avatar}
							/>
						</div>
						<div className={styles.info}>
							<div className={styles.name}>{exchange.name}</div>
						</div>
					</div>
				</div>
			))}
			<div className="mt-8">
				<Pagination
					currentPage={page}
					totalPages={2}
					onPageChange={() => setPage((prev) => prev + 1)}
				/>
			</div>
		</div>
	);
};

const CentralizedExchanges: React.FC<CentralizedExchangesProps> = ({
	exchanges,
}) => {
	return (
		<>
			<MobileVersion exchanges={exchanges} />
			<div className={`${styles.centralizedExchanges} hidden lg:block`}>
				<h2 className={styles.title}>Centralized Exchanges</h2>
				<div className={styles.exchangesGrid}>
					{exchanges.map((exchange, index) => (
						<div key={`exchange-${index}`} className={styles.exchange}>
							<img
								src={exchange.logo}
								alt={exchange.name}
								className={styles.logo}
							/>
							<span className={styles.name}>{exchange.name}</span>
						</div>
					))}
				</div>
			</div>
		</>
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
