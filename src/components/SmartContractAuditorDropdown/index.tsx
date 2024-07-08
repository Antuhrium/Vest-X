import { useState } from "react";
import styles from "./styles.module.scss";
import AE from "/images/smart-contract-auditors/arbitrary-execution.svg";
import BlockSec from "/images/smart-contract-auditors/block-sec.svg";
import Cyfrin from "/images/smart-contract-auditors/cyfrin.svg";
import Hacken from "/images/smart-contract-auditors/hacken.svg";
import Halborn from "/images/smart-contract-auditors/halborn.svg";
import MixBytes from "/images/smart-contract-auditors/mix-bytes.svg";
import OpenZeppelin from "/images/smart-contract-auditors/open-zeppilin.svg";
import Oxorio from "/images/smart-contract-auditors/oxorio.svg";
import Secure3 from "/images/smart-contract-auditors/secure-3.svg";
import SigmaPrime from "/images/smart-contract-auditors/sigma-prime.svg";
import Spearbit from "/images/smart-contract-auditors/spearbit.svg";
import TrailOfBits from "/images/smart-contract-auditors/trail-of-bits.svg";
import WatchPug from "/images/smart-contract-auditors/watch-pug.svg";
import Zellic from "/images/smart-contract-auditors/zellic.svg";

const auditors = [
  { symbol: "AE", name: "Arbitrary Execution" },
  { symbol: "BlockSec", name: "BlockSec" },
  { symbol: "Cyfrin", name: "Cyfrin" },
  { symbol: "Hacken", name: "Hacken" },
  { symbol: "Halborn", name: "Halborn" },
  { symbol: "MixBytes", name: "MixBytes" },
  { symbol: "OpenZeppelin", name: "OpenZeppelin" },
  { symbol: "Oxorio", name: "Oxorio" },
  { symbol: "Secure3", name: "Secure3" },
  { symbol: "SigmaPrime", name: "Sigma Prime" },
  { symbol: "Spearbit", name: "Spearbit" },
  { symbol: "TrailOfBits", name: "Trail of Bits" },
  { symbol: "WatchPug", name: "Watch Pug" },
  { symbol: "Zellic", name: "Zellic" },
];

interface Auditor {
  symbol: string;
  name: string;
}

const getIcon = (symbol: string) => {
  switch (symbol) {
    case "AE":
      return AE;
    case "BlockSec":
      return BlockSec;
    case "Cyfrin":
      return Cyfrin;
    case "Hacken":
      return Hacken;
    case "Halborn":
      return Halborn;
    case "MixBytes":
      return MixBytes;
    case "OpenZeppelin":
      return OpenZeppelin;
    case "Oxorio":
      return Oxorio;
    case "Secure3":
      return Secure3;
    case "SigmaPrime":
      return SigmaPrime;
    case "Spearbit":
      return Spearbit;
    case "TrailOfBits":
      return TrailOfBits;
    case "WatchPug":
      return WatchPug;
    case "Zellic":
      return Zellic;
    default:
      return undefined;
  }
};

export default function SmartContractAuditorDropdown() {
  const [selectedAuditor, setSelectedAuditor] = useState<Auditor | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);

  const filteredAuditors = auditors.filter((auditor) =>
    auditor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdown}>
        <div className={styles.selected} onClick={toggleDropdown}>
          {selectedAuditor === null ? (
            <span>Select a smart contract auditor</span>
          ) : (
            <>
              <img
                src={getIcon(selectedAuditor.symbol)}
                alt={selectedAuditor.name}
                className={styles.icon}
              />
              <span>{selectedAuditor.name}</span>
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
            {filteredAuditors.map((auditor, index) => (
              <div
                key={index}
                className={styles.dropdownItem}
                onClick={() => {
                  setSelectedAuditor(auditor);
                  setOpen(false);
                }}
              >
                <img
                  src={getIcon(auditor.symbol)}
                  alt={auditor.name}
                  className={styles.icon}
                />
                <span>{auditor.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
