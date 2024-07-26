import { useEffect, useState } from "react";
import Filter, { filtersT } from "../../../components/Filter";
import HeaderTitle from "../../../components/HeaderTitle";
import Menu from "../../../components/Menu";
import ProjectCard from "../../../components/ProjectCard/ProjectCard";
import Search from "../../../components/Search";
import styles from "./style.module.scss";
import Tags from "../../../components/Tags";
import SortDropdownMenu from "../../../components/Sort";
import Pagination from "../../../components/Pagination/Pagination";
import RightBg from "/images/right-bg.png";
import Project1 from "/images/projectsList/1.png";
import Project2 from "/images/projectsList/2.png";
import Project3 from "/images/projectsList/3.png";
import Project4 from "/images/projectsList/4.png";

const filters: filtersT[] = [
  {
    title: "Status",
    type: "checkbox",
    options: ["Vesting Open", "Active", "Completed"],
  },
  {
    title: "Funding Stage",
    type: "checkbox",
    options: [
      "Seed Stage",
      "Early Stage",
      "Growth Stage",
      "Late Stage",
      "Exit Stage",
    ],
  },
  {
    title: "Location",
    type: "checkbox",
    options: ["USA", "Asia", "Europa", "Africa", "Others"],
  },
];

const projects = [
  { projectName: "Project name" },
  { projectName: "Project name" },
  { projectName: "Project name" },
  { projectName: "Project name" },
  { projectName: "Project name" },
  { projectName: "Project name" },
];

const getProjectImage = (index: number) => {
  switch (index) {
    case 0:
      return Project1;
    case 1:
      return Project2;
    case 2:
      return Project3;
    case 3:
      return Project4;
    default:
      return Project1;
  }
};

const initialOpenSections = [true, true, true, true]

const radioStatus = ["Vesting Open", "Active", "Completed"]
const checkboxLocation = ["USA", "Asia", "Europa", "Africa", "others"]
const checkboxFunding = ["Seed Stage", "Early Stage", "Growth Stage", "Late Stage", "Exit Stage"]

const ExploreProjectsPage = () => {
  const [, onSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [mobileStatusRadio, setMobileStatusRadio] = useState<string>("Vesting Open")
  const [mobileFundingCheckbox, setMobileFundingCheckbox] = useState<string[]>([])
  const [mobileLocationCheckbox, setMobileLocationCheckbox] = useState<string[]>([])
  const [filterInput, setFilterInput] = useState({ from: 299, to: 1499 });
  const [isOpenSections, setIsOpenSections] = useState<boolean[]>(initialOpenSections);
  const [isMobileButtonsOpen, setIsMobileButtonsOpen] = useState(false);

  const toggleSection = (index: number) => {
    setIsOpenSections((prevSections) =>
      prevSections.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  const handleClearFilters = () => {
    setMobileStatusRadio("Vesting Open");
    setMobileFundingCheckbox([]);
    setMobileLocationCheckbox([]);
    setIsOpenSections(initialOpenSections);
    setIsMobileButtonsOpen(false);
  }

  const handleShowResults = () => {
    setIsMobileButtonsOpen(false);
    setIsFilterOpen(false);
  }


  const handleFundingChange = (stage: string) => {
    setMobileFundingCheckbox(prevState => {
      if (prevState.includes(stage)) {
        return prevState.filter(item => item !== stage);
      } else {
        return [...prevState, stage];
      }
    });
  };

  const handleLocationChange = (stage: string) => {
    setMobileLocationCheckbox(prevState => {
      if (prevState.includes(stage)) {
        return prevState.filter(item => item !== stage);
      } else {
        return [...prevState, stage];
      }
    });
  };

  const handleChangeMinInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) < 0) {
      setFilterInput(prev => ({ ...prev, from: 299 }));
      return;
    }
    if (Number(e.target.value) > 1499) {
      setFilterInput(prev => ({ ...prev, from: 1499 }));
      return;
    }
    setFilterInput(prev => ({ ...prev, from: Number(e.target.value) }));
  }
  const handleChangeMaxInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) < 0) {
      setFilterInput(prev => ({ ...prev, to: 299 }));
      return;
    }
    if (Number(e.target.value) > 1499) {
      setFilterInput(prev => ({ ...prev, to: 1499 }));
      return;
    }
    setFilterInput(prev => ({ ...prev, to: Number(e.target.value) }));
  }


  useEffect(() => {
    if (mobileFundingCheckbox.length > 0 && mobileLocationCheckbox.length > 0) {
      setIsMobileButtonsOpen(true);
    } else {
      setIsMobileButtonsOpen(false);
    }
  }, [mobileFundingCheckbox, mobileLocationCheckbox])
  return (
    <>
      <img className={styles.rightBg} src={RightBg} alt="" />
      <section className={styles.container}>
        <Menu
          menuStyle={{
            height: "100vh",
          }}
        />

        <div className="hidden xl:flex">
          <Filter
            filters={filters}
            style={{ height: "100vh", overflowY: "hidden" }}
            title="Filter"
          />
        </div>

        {isFilterOpen && (
          <div className={styles.mobileFilterBg} onClick={() => { setIsFilterOpen(false); setIsMobileButtonsOpen(false) }} />
        )}
        <div className={`${styles.mobileFilter} ${isFilterOpen ? "" : styles.mobileFilterClose}`}>
          <span className={styles.mobileFilterTitle}>Sort and Filter</span>
          <div className={styles.mobileFilterWrapper}>
            <div className={styles.mobileFilterItem}>
              <div className={styles.mobileFilterTop}>
                <span>Investment amount (USDT)</span>
              </div>
              <div className={`${styles.mobileFilterContent} flex gap-4 pt-3 flex-nowrap`}>
                <div className={styles.mobileFilterInputs}>
                  <label htmlFor="inpMin">from</label>
                  <input type="number" id="inpMin" min={299} max={1499} value={filterInput.from} onChange={(e) => handleChangeMinInput(e)} />
                </div>
                <div className={styles.mobileFilterInputs}>
                  <label htmlFor="inpMin">to</label>
                  <input type="number" placeholder="max 1499" min={299} max={1499} value={filterInput.to} onChange={(e) => handleChangeMaxInput(e)} />
                </div>
              </div>
            </div>
            <div className={styles.mobileFilterItem}>
              <div className={styles.mobileFilterTop}>
                <span>Status</span>
                <button className={`${styles.mobileFilterArrow} transition-all ${isOpenSections[0] ? "rotate-180" : ""}`} onClick={() => toggleSection(0)}>
                  <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.6934 1.78711L10.2656 10.2148L1.83789 1.78711" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <div className={`${styles.mobileFilterContent} ${!isOpenSections[0] ? "hidden" : ""}`}>
                {radioStatus.map(stat => (
                  <div className={styles.mobileFilterContentItem} onClick={() => setMobileStatusRadio(stat)}>
                    <label>{stat}</label>
                    <div className={styles.radioButton}>
                      <div className={mobileStatusRadio === stat ? styles.checked : styles.unchecked}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.mobileFilterItem}>
              <div className={styles.mobileFilterTop}>
                <span>Funding Stage</span>
                <button className={`${styles.mobileFilterArrow} transition-all ${isOpenSections[1] ? "rotate-180" : ""}`} onClick={() => toggleSection(1)}>
                  <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.6934 1.78711L10.2656 10.2148L1.83789 1.78711" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <div className={`${styles.mobileFilterContent} ${!isOpenSections[1] ? "hidden" : ""}`}>
                {checkboxFunding.map(fund => (
                  <div className={styles.mobileFilterContentItem} onClick={() => handleFundingChange(fund)}>
                    <label>{fund}</label>
                    <div className={`${styles.checkboxButton} ${mobileFundingCheckbox.includes(fund) ? styles.checkboxChecked : ""}`}>
                      {mobileFundingCheckbox.includes(fund) && (<img src="/images/white-checkmark.svg" alt="checkmark"/>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.mobileFilterItem}>
              <div className={styles.mobileFilterTop}>
                <span>Funding Stage</span>
                <button className={`${styles.mobileFilterArrow} transition-all ${isOpenSections[2] ? "rotate-180" : ""}`} onClick={() => toggleSection(2)}>
                  <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.6934 1.78711L10.2656 10.2148L1.83789 1.78711" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <div className={`${styles.mobileFilterContent} ${!isOpenSections[2] ? "hidden" : "pt-3"}`}>
                <Tags />
              </div>
            </div>
            <div className={styles.mobileFilterItem}>
              <div className={styles.mobileFilterTop}>
                <span>Location</span>
                <button className={`${styles.mobileFilterArrow} transition-all ${isOpenSections[3] ? "rotate-180" : ""}`} onClick={() => toggleSection(3)}>
                  <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.6934 1.78711L10.2656 10.2148L1.83789 1.78711" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <div className={`${styles.mobileFilterContent} ${!isOpenSections[3] ? "hidden" : ""}`}>
                {checkboxLocation.map(fund => (
                  <div className={styles.mobileFilterContentItem} onClick={() => handleLocationChange(fund)}>
                    <label>{fund}</label>
                    <div className={`${styles.checkboxButton} ${mobileLocationCheckbox.includes(fund) ? styles.checkboxChecked : ""}`}>
                      {mobileLocationCheckbox.includes(fund) && (<img src="/images/white-checkmark.svg" alt="checkmark"/>)}
                    </div>
                  </div>
                ))}
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
          <HeaderTitle className={styles.title}>Explore Projects</HeaderTitle>
          <div className={styles.searchWrapper}>
            <Search onSearch={onSearch} />
            <SortDropdownMenu />
          </div>
          <div className={styles.mobileFilterControlContainer}>
            <button className={styles.mobileOpenFilter} onClick={() => setIsFilterOpen(!isFilterOpen)}><img src="/images/explore-projects-btn.svg" alt="filter" /></button>
            <SortDropdownMenu />
          </div>
          <div className={styles.tags}>
            <Tags />
          </div>
          <div className={styles.projectsWrapper}>
            {projects.map((project, index) => (
              <ProjectCard
                projectName={project.projectName}
                vestingStatus="Vesting open"
                tokenName="EcoSwap"
                imageSrc={getProjectImage(index)}
                description="EcoSwap is a decentralized marketplace and community platform..."
                tags={["Defi", "Paytech", "AI"]}
              />
            ))}
          </div>
          <div className={styles.paginationWrapper}>
            <Pagination
              totalPages={24}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ExploreProjectsPage;
