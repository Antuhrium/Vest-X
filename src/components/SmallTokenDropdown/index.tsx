import { useState } from "react";
import styles from "./styles.module.scss";
import USDT from "/images/tokens/USDT.svg";
import ETH from "/images/tokens/ETH.svg";
import BNB from "/images/tokens/BNB.svg";
import AVAX from "/images/tokens/AVAX.svg";

interface SmallTokenDropdownProps {
  tokenAmount: string;
  tokenType: string;
  onAmountChange: (amount: string) => void;
  onTypeChange: (type: string) => void;
}

const tokenOptions = ["USDT", "ETH", "BNB", "AVAX"];

const getIcon = (token: string) => {
  switch (token) {
    case "USDT":
      return USDT;
    case "ETH":
      return ETH;
    case "BNB":
      return BNB;
    case "AVAX":
      return AVAX;
    default:
      return "";
  }
};

export default function SmallTokenDropdown({
  tokenAmount,
  tokenType,
  onAmountChange,
  onTypeChange,
}: SmallTokenDropdownProps) {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const filteredTokens = tokenOptions.filter((token) =>
    token.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.tokenDropdownContainer}>
      <input
        type="text"
        value={tokenAmount}
        onChange={(e) => onAmountChange(e.target.value)}
        className={styles.tokenInput}
        placeholder="Enter token amount"
      />
      <div className={styles.tokenUnitDropdown} onClick={toggleDropdown}>
        <div className={styles.selectedToken}>
          <span>{tokenType}</span>
          <img
            src={getIcon(tokenType)}
            alt="token icon"
            className={styles.tokenIcon}
          />
          <span
            className={`${styles.arrow} ${open ? styles.up : styles.down}`}
          ></span>
        </div>
        {open && (
          <div className={styles.tokenDropdownList}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {filteredTokens.map((token, index) => (
              <div
                key={index}
                className={styles.tokenDropdownItem}
                onClick={() => {
                  onTypeChange(token);
                  setOpen(false);
                  setSearchTerm("");
                }}
              >
                {token}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
