import { useState } from "react";
import styles from "./styles.module.scss";
import ALGO from "/images/tokens/ALGO.svg";
import ARB from "/images/tokens/ARB.svg";
import AVAX from "/images/tokens/AVAX.svg";
import BLAST from "/images/tokens/BLAST.svg";
import BNB from "/images/tokens/BNB.svg";
import CELO from "/images/tokens/CELO.svg";
import CRO from "/images/tokens/CRO.svg";
import EOS from "/images/tokens/EOS.svg";
import ETH from "/images/tokens/ETH.svg";
import FTM from "/images/tokens/FTM.svg";
import KLAY from "/images/tokens/KLAY.svg";
import MATIC from "/images/tokens/MATIC.svg";
import NEAR from "/images/tokens/NEAR.svg";
import OP from "/images/tokens/OP.svg";
import SOL from "/images/tokens/SOL.svg";
import TRX from "/images/tokens/TRX.svg";
import XTZ from "/images/tokens/XTZ.svg";

const networks = [
  { symbol: "BNB", name: "Binance Coin" },
  { symbol: "ETH", name: "Ethereum" },
  { symbol: "MATIC", name: "Polygon" },
  { symbol: "BNB", name: "BNB Chain" },
  { symbol: "ARB", name: "Arbitrum" },
  { symbol: "FTM", name: "Fantom" },
  { symbol: "BLAST", name: "Blast" },
  { symbol: "ETH", name: "ZkSync Era" },
  { symbol: "ALGO", name: "Algorand" },
  { symbol: "OP", name: "Optimism" },
  { symbol: "TRX", name: "Trom" },
  { symbol: "AVAX", name: "Avalanche" },
  { symbol: "CELO", name: "Celo" },
  { symbol: "CRO", name: "Cronos" },
  { symbol: "EOS", name: "EOS" },
  { symbol: "ETH", name: "Base" },
  { symbol: "ETH", name: "Linea" },
  { symbol: "KLAY", name: "Klaytn" },
  { symbol: "NEAR", name: "Near" },
  { symbol: "SOL", name: "Solana" },
  { symbol: "XTZ", name: "Tezos" },
];

interface Network {
  symbol: string;
  name: string;
}

const getIcon = (symbol: string) => {
  switch (symbol) {
    case "ALGO":
      return ALGO;
    case "ARB":
      return ARB;
    case "AVAX":
      return AVAX;
    case "BLAST":
      return BLAST;
    case "BNB":
      return BNB;
    case "CELO":
      return CELO;
    case "CRO":
      return CRO;
    case "EOS":
      return EOS;
    case "ETH":
      return ETH;
    case "FTM":
      return FTM;
    case "KLAY":
      return KLAY;
    case "MATIC":
      return MATIC;
    case "NEAR":
      return NEAR;
    case "OP":
      return OP;
    case "SOL":
      return SOL;
    case "TRX":
      return TRX;
    case "XTZ":
      return XTZ;
    default:
      return undefined;
  }
};

export default function TokenNetworkDropdown() {
  const [selectedNetwork, setSelectedNetwork] = useState<Network | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);

  const filteredNetworks = networks.filter((network) =>
    network.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdown}>
        <div className={styles.selected} onClick={toggleDropdown}>
          {selectedNetwork === null ? (
            <span>Select a network</span>
          ) : (
            <>
              <img
                src={getIcon(selectedNetwork.symbol)}
                alt={selectedNetwork.name}
                className={styles.icon}
              />
              <span>{`${selectedNetwork.symbol} (${selectedNetwork.name})`}</span>
            </>
          )}
          <span
            className={`${styles.arrow} ${open ? styles.up : styles.down}`}
          ></span>
        </div>
        {open && (
          <div className={styles.dropdownList}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {filteredNetworks.map((network, index) => (
              <div
                key={index}
                className={styles.dropdownItem}
                onClick={() => {
                  setSelectedNetwork(network);
                  setOpen(false);
                }}
              >
                <img
                  src={getIcon(network.symbol)}
                  alt={network.name}
                  className={styles.icon}
                />
                <span>{`${network.symbol} (${network.name})`}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
