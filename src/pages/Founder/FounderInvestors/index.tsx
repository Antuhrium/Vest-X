import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import Menu from "../../../components/Menu";
import Filter, { filtersT } from "../../../components/Filter";
import Pagination from "../../../components/Pagination/Pagination";
import RightBg from "/images/right-bg.png";

const Arrow = ({ direction }: { direction: "right" | "left" }) => {
  if (direction === "left") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M15 6L9 12L15 18"
          stroke="white"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        d="M9 6L15 12L9 18"
        stroke="white"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const filters: filtersT[] = [
  {
    title: "Status",
    type: "radio",
    options: ["Any", "Online", "Offline"],
  },
  {
    title: "Round",
    type: "checkbox",
    options: ["Private", "Seed"],
  },
  {
    title: "Date",
    type: "checkbox",
    options: [
      "Last week",
      "Last month",
      "Last 3 months",
      "Last 6 months",
      "Last year",
    ],
  },
];

const data = [
  {
    id: 1,
    name: "Anel Askarkyzy",
    avatar: "/images/investors-avatar.png",
    email: "askarkyzy.anelia003@mail.com",
    investmentAmount: "680,890",
  },
  {
    id: 1,
    name: "Anel Askarkyzy",
    avatar: "/images/investors-avatar.png",
    email: "askarkyzy.anelia003@mail.com",
    investmentAmount: "680,890",
  },
  {
    id: 1,
    name: "Anel Askarkyzy",
    avatar: "/images/investors-avatar.png",
    email: "askarkyzy.anelia003@mail.com",
    investmentAmount: "680,890",
  },
  {
    id: 1,
    name: "Anel Askarkyzy",
    avatar: "/images/investors-avatar.png",
    email: "askarkyzy.anelia003@mail.com",
    investmentAmount: "680,890",
  },
  {
    id: 1,
    name: "Anel Askarkyzy",
    avatar: "/images/investors-avatar.png",
    email: "askarkyzy.anelia003@mail.com",
    investmentAmount: "680,890",
  },
  {
    id: 1,
    name: "Anel Askarkyzy",
    avatar: "/images/investors-avatar.png",
    email: "askarkyzy.anelia003@mail.com",
    investmentAmount: "680,890",
  },
];

const initialOpenSections = [true, true, true, true, true]

const FounderInvestors: React.FC = () => {
  const [investors, setInvestors] = useState<number[]>([]);
  const [pages, setPages] = useState<number>(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const [mobileStatusRadio, setMobileStatusRadio] = useState<string>("Any")
  const [mobileDateRadio, setMobileDateRadio] = useState<string>("Last week")

  const [isOpenSections, setIsOpenSections] = useState<boolean[]>(initialOpenSections);
  const [roundSelect, setRoundSelect] = useState<"Private" | "Seed" | null>(null);
  const [isMobileButtonsOpen, setIsMobileButtonsOpen] = useState(false);

  const toggleSection = (index: number) => {
    setIsOpenSections((prevSections) =>
      prevSections.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  const handleClearFilters = () => {
    setMobileStatusRadio("Any");
    setMobileDateRadio("Last week");
    setIsOpenSections(initialOpenSections);
    setRoundSelect(null);
    setIsMobileButtonsOpen(false);
  }

  const handleShowResults = () => {
    setIsMobileButtonsOpen(false);
    setIsFilterOpen(false);
  }

  useEffect(() => {
    if (roundSelect != null) {
      setIsMobileButtonsOpen(true);
    } else {
      setIsMobileButtonsOpen(false);
    }
  }, [roundSelect])

  return (
    <div className={styles.container}>
      <Menu
        menuStyle={{
          height: "100vh",
        }}
      />
      <div className="hidden xl:flex">
        <Filter
          filters={filters}
          style={{ height: "100vh", overflowY: "hidden" }}
        />
      </div>

      {isFilterOpen && (
        <div className={styles.mobileFilterBg} onClick={() => {setIsFilterOpen(false); setIsMobileButtonsOpen(false)}} />
      )}
      <div className={`${styles.mobileFilter} ${isFilterOpen ? "" : styles.mobileFilterClose}`}>
        <span className={styles.mobileFilterTitle}>Sort and Filter</span>
        <div className={styles.mobileFilterWrapper}>
          <div className={styles.mobileFilterItem}>
            <div className={styles.mobileFilterTop}>
              <span>Show:</span>
              <button className={`${styles.mobileFilterArrow} transition-all ${isOpenSections[0] ? "rotate-180" : ""}`} onClick={() => toggleSection(0)}>
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.6934 1.78711L10.2656 10.2148L1.83789 1.78711" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
            <div className={`${styles.mobileFilterContent} ${!isOpenSections[0] ? "hidden" : ""}`}>
              All columns
            </div>
          </div>
          <div className={styles.mobileFilterItem}>
            <div className={styles.mobileFilterTop}>
              <span>Grouped by:</span>
              <button className={`${styles.mobileFilterArrow} transition-all ${isOpenSections[1] ? "rotate-180" : ""}`} onClick={() => toggleSection(1)}>
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.6934 1.78711L10.2656 10.2148L1.83789 1.78711" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
            <div className={`${styles.mobileFilterContent} ${!isOpenSections[1] ? "hidden" : ""}`}>
              All columns
            </div>
          </div>
          <div className={styles.mobileFilterItem}>
            <div className={styles.mobileFilterTop}>
              <span>Round</span>
              <button className={`${styles.mobileFilterArrow} transition-all ${isOpenSections[2] ? "rotate-180" : ""}`} onClick={() => toggleSection(2)}>
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.6934 1.78711L10.2656 10.2148L1.83789 1.78711" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
            <div className={`${styles.mobileFilterContent} ${!isOpenSections[2] ? "hidden" : ""}`}>
              <button className={`${styles.mobileFilterRoundButton} ${roundSelect === "Private" ? "bg-[#7F8EA366]" : ""}`} onClick={() => setRoundSelect(prev => prev === "Private" ? null : "Private")}>Private</button>
              <button className={`${styles.mobileFilterRoundButton} ${roundSelect === "Seed" ? "bg-[#7F8EA366]" : ""} ml-3`} onClick={() => setRoundSelect(prev => prev === "Private" ? null : "Seed")}>Seed</button>
            </div>
          </div>
          <div className={styles.mobileFilterItem}>
            <div className={styles.mobileFilterTop}>
              <span>Status</span>
              <button className={`${styles.mobileFilterArrow} transition-all ${isOpenSections[3] ? "rotate-180" : ""}`} onClick={() => toggleSection(3)}>
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.6934 1.78711L10.2656 10.2148L1.83789 1.78711" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
            <div className={`${styles.mobileFilterContent} ${!isOpenSections[3] ? "hidden" : ""}`}>
              <div className={styles.mobileFilterContentItem} onClick={() => setMobileStatusRadio("Any")}>
                <label>Any</label>
                <div className={styles.radioButton}>
                  <div className={mobileStatusRadio === "Any" ? styles.checked : styles.unchecked}></div>
                </div>
              </div>
              <div className={styles.mobileFilterContentItem} onClick={() => setMobileStatusRadio("Online")}>
                <label>Online</label>
                <div className={styles.radioButton}>
                  <div className={mobileStatusRadio === "Online" ? styles.checked : styles.unchecked}></div>
                </div>
              </div>
              <div className={styles.mobileFilterContentItem} onClick={() => setMobileStatusRadio("Offline")}>
                <label>Offline</label>
                <div className={styles.radioButton}>
                  <div className={mobileStatusRadio === "Offline" ? styles.checked : styles.unchecked}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mobileFilterItem}>
            <div className={styles.mobileFilterTop}>
              <span>Date</span>
              <button className={`${styles.mobileFilterArrow} transition-all ${isOpenSections[4] ? "rotate-180" : ""}`} onClick={() => toggleSection(4)}>
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.6934 1.78711L10.2656 10.2148L1.83789 1.78711" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
            <div className={`${styles.mobileFilterContent} ${!isOpenSections[4] ? "hidden" : ""}`}>
              <div className={styles.mobileFilterContentItem} onClick={() => setMobileDateRadio("Last week")}>
                <label>Last week</label>
                <div className={styles.radioButton}>
                  <div className={mobileDateRadio === "Last week" ? styles.checked : styles.unchecked}></div>
                </div>
              </div>
              <div className={styles.mobileFilterContentItem} onClick={() => setMobileDateRadio("Last month")}>
                <label>Last month</label>
                <div className={styles.radioButton}>
                  <div className={mobileDateRadio === "Last month" ? styles.checked : styles.unchecked}></div>
                </div>
              </div>
              <div className={styles.mobileFilterContentItem} onClick={() => setMobileDateRadio("Last 3 months")}>
                <label>Last 3 months</label>
                <div className={styles.radioButton}>
                  <div className={mobileDateRadio === "Last 3 months" ? styles.checked : styles.unchecked}></div>
                </div>
              </div>
              <div className={styles.mobileFilterContentItem} onClick={() => setMobileDateRadio("Last 6 months")}>
                <label>Last 6 months</label>
                <div className={styles.radioButton}>
                  <div className={mobileDateRadio === "Last 6 months" ? styles.checked : styles.unchecked}></div>
                </div>
              </div>
              <div className={styles.mobileFilterContentItem} onClick={() => setMobileDateRadio("Last year")}>
                <label>Last year</label>
                <div className={styles.radioButton}>
                  <div className={mobileDateRadio === "Last year" ? styles.checked : styles.unchecked}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMobileButtonsOpen && (
        <div className={styles.mobileFilterButtonContainer}>
          <button onClick={handleShowResults}>Show 475 Results</button>
          <button className={styles.mobileFilterClear} onClick={handleClearFilters}>Clear Filters</button>
        </div>
      )}

      <div className={styles.wrapper}>
        <div className={`${styles.arrows} hidden xl:flex`}>
          <Arrow direction="left" /> <Arrow direction="right" />
        </div>
        <header className={styles.header}>
          <div className={styles.topHeader}>
            <h2 className={styles.title}>Investors</h2>
            <div className={`${styles.arrows} xl:hidden flex`}>
              <Arrow direction="left" /> <Arrow direction="right" />
            </div>
            <button className={styles.exportButton}>
              Export or Import
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M18.5313 9L12.5312 15L6.53125 9"
                  stroke="white"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className={styles.addButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M12.8691 4.33789C13.1344 4.33789 13.3887 4.44325 13.5762 4.63078C13.7638 4.81832 13.8691 5.07267 13.8691 5.33789V11.3379H19.8691C20.1344 11.3379 20.3887 11.4432 20.5762 11.6308C20.7638 11.8183 20.8691 12.0727 20.8691 12.3379C20.8691 12.6031 20.7638 12.8575 20.5762 13.045C20.3887 13.2325 20.1344 13.3379 19.8691 13.3379H13.8691V19.3379C13.8691 19.6031 13.7638 19.8575 13.5762 20.045C13.3887 20.2325 13.1344 20.3379 12.8691 20.3379C12.6039 20.3379 12.3496 20.2325 12.162 20.045C11.9745 19.8575 11.8691 19.6031 11.8691 19.3379V13.3379H5.86914C5.60392 13.3379 5.34957 13.2325 5.16203 13.045C4.9745 12.8575 4.86914 12.6031 4.86914 12.3379C4.86914 12.0727 4.9745 11.8183 5.16203 11.6308C5.34957 11.4432 5.60392 11.3379 5.86914 11.3379H11.8691V5.33789C11.8691 5.07267 11.9745 4.81832 12.162 4.63078C12.3496 4.44325 12.6039 4.33789 12.8691 4.33789Z"
                  fill="white"
                />
              </svg>
              Add user
            </button>
          </div>
          <div className={styles.headerControls}>
            <div className={styles.mobileHeaderSelect}>
              <div className={styles.mobileSelect}>
                <button>Add user</button>
                <button
                  className={styles.mobileFilterButton}
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                >
                  Sort by
                </button>
              </div>
              <button className={styles.mobileExportOrImport}>Export or Import</button>
            </div>
            <input
              type="text"
              placeholder="Search"
              className={styles.searchInput}
            />
            <div className={styles.select}>
              Show: All columns
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18 9L12 15L6 9"
                  stroke="white"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className={styles.select}>
              All columns
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18 9L12 15L6 9"
                  stroke="white"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </header>
        <div className={styles.counterContainer}>
          <div className={styles.counter}>{data.length} items</div>
          <div className={styles.counterInfo}>
            1-10 from {data.length} items
          </div>
          <div className={styles.arrows}>
            <Arrow direction="left" /> <Arrow direction="right" />
          </div>
        </div>
        <div className={styles.table}>
          <div className={`${styles.tableItem} ${styles.tableHead}`}>
            <div>
              <input type="checkbox" className={styles.checkbox} />
              <span className={styles.checkboxCheckmark}></span>
              User
              <img src="/images/arrow-down.svg" alt="arrow" />
            </div>
            <div>Email</div>
            <div>
              Investment amount | USDT{" "}
              <img src="/images/tether.svg" alt="tether" />
            </div>
          </div>

          {data.map((item) => (
            <div key={item.id} className={styles.tableItem}>
              <div>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  name={"investors"}
                  value={item.id}
                  checked={investors.includes(item.id)}
                  onChange={() => {
                    if (investors.includes(item.id)) {
                      setInvestors((prev) =>
                        prev.filter((filt) => filt === item.id)
                      );
                    } else {
                      setInvestors([...investors, item.id]);
                    }
                  }}
                />
                <span className={styles.checkboxCheckmark}></span>
                <img
                  src={item.avatar}
                  alt={item.name}
                  className={styles.avatar}
                />
                <span className={styles.tableItemName}>
                  {item.name}
                  <div className={styles.mobileTableEmail}>{item.email}</div>
                </span>
              </div>
              <div className={styles.tableEmail}>{item.email}</div>
              <div>
                {item.investmentAmount}
                <span className={styles.mobileCurrency}>USDT</span>
              </div>
            </div>
          ))}
        </div>
        <footer className={styles.footer}>
          <Pagination
            totalPages={24}
            currentPage={pages}
            onPageChange={setPages}
          />
        </footer>
      </div>
      <img className={styles.rightBg} src={RightBg} alt="" />
    </div>
  );
};

export default FounderInvestors;
