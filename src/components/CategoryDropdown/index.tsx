import { useState } from "react";
import styles from "./styles.module.scss";
import { Checkbox } from "rsuite";

const categories = [
  { name: "Artificial Intelligence" },
  { name: "Blockchain Explores" },
  { name: "Blockchains" },
  { name: "Blogs" },
  { name: "Centralized Exchanges" },
  { name: "Coins" },
  { name: "Consulting Firms" },
  { name: "Cources" },
  { name: "Cryptofinance" },
  { name: "Custodians" },
  { name: "Data Platforms" },
  { name: "DeFi" },
  { name: "Decentralized Exchanges" },
  { name: "Education" },
  { name: "Events" },
  { name: "Gaming" },
  { name: "Guids" },
  { name: "Hardware Wallets" },
  { name: "Investors" },
  { name: "Infrastructure" },
  { name: "Insurance Providers" },
  { name: "Investment Platforms" },
  { name: "Launchpads" },
  { name: "Layer 2" },
  { name: "Lending" },
  { name: "Marketing Agencies" },
  { name: "Marketplaces" },
  { name: "Metaverse" },
  { name: "Mining" },
  { name: "Move To Earn" },
  { name: "News Websites" },
  { name: "Newsletters" },
  { name: "NFT" },
  { name: "Oracles" },
  { name: "Payment Providers" },
  { name: "Podcasts" },
  { name: "Portfolio Trackers" },
  { name: "Research" },
  { name: "SaaS" },
  { name: "Secure3" },
  { name: "Soft Wallets" },
  { name: "Tools" },
  { name: "Trading Tools" },
  { name: "Web3" },

  // Add more categories if needed
];

interface Category {
  name: string;
}

export default function CategoryDropdown() {
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const handleCategorySelect = (category: Category) => {
    if (selectedCategories.some((cat) => cat.name === category.name)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat.name !== category.name)
      );
    } else if (selectedCategories.length < 3) {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdown}>
        <div className={styles.selected} onClick={toggleDropdown}>
          {selectedCategories.length === 0 ? (
            <span
              style={{
                color: "#676E76",
              }}
            >
              Select a category
            </span>
          ) : (
            <span>{selectedCategories.map((cat) => cat.name).join(", ")}</span>
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
            {filteredCategories.map((category, index) => (
              <div key={index} className={styles.dropdownItem}>
                <Checkbox
                  checked={selectedCategories.some(
                    (cat) => cat.name === category.name
                  )}
                  onChange={() => handleCategorySelect(category)}
                >
                  {category.name}
                </Checkbox>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
