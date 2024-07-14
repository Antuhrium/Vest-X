import React, { useState } from "react";
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

const FounderInvestors: React.FC = () => {
  const [investors, setInvestors] = useState<number[]>([]);
  const [pages, setPages] = useState<number>(1);

  return (
    <div className={styles.container}>
      <Menu
        menuStyle={{
          height: "100vh",
        }}
      />
      <Filter
        filters={filters}
        style={{ height: "100vh", overflowY: "hidden" }}
      />

      <div className={styles.wrapper}>
        <div className={styles.arrows}>
          <Arrow direction="left" /> <Arrow direction="right" />
        </div>
        <header className={styles.header}>
          <div className={styles.topHeader}>
            <h2 className={styles.title}>Investors</h2>
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
                {item.name}
              </div>
              <div>{item.email}</div>
              <div>{item.investmentAmount}</div>
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
        <img className={styles.rightBg} src={RightBg} alt="" />
      </div>
    </div>
  );
};

export default FounderInvestors;
