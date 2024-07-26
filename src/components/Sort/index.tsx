import React, { useState, ReactNode } from "react";
import ReactDOM from "react-dom";
import styles from "./styles.module.scss";
import DropdownIcon from "/images/dropdown-icon.svg";

interface ModalProps {
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const modalRoot = document.getElementById(
    "sort-dropdown-menu"
  ) as HTMLElement;
  return ReactDOM.createPortal(
    <div
      style={{
        position: "absolute",
        top: "112%",
        left: "0%",
        zIndex: 1000,
      }}
    >
      {children}
    </div>,
    modalRoot
  );
};

interface Option {
  label: string;
  value: string;
}

interface SortDropdownProps {
  options: Option[];
  onSelect: (option: Option) => void;
  selectedOption: Option | null;
}

const SortDropdown: React.FC<SortDropdownProps> = ({
  options,
  onSelect,
  selectedOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.dropdownContainer} id="sort-dropdown-menu">
      <span className={styles.mobileSortLabel}>Sort by <img src={DropdownIcon} alt="dropdown icon" /></span>
      <button
        className={styles.dropdownButton}
        onClick={() => {setIsOpen(!isOpen); console.log("clicked", isOpen);}}
      >
        {selectedOption?.label} <img src={DropdownIcon} alt="dropdown icon" />
      </button>
      {isOpen && (
        <Modal>
          <div className={styles.dropdownContent}>
            {options.map((option) => (
              <div
                key={option.value}
                className={styles.dropdownItem}
                onClick={() => {
                  onSelect(option);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
        </Modal>
      )}
    </div>
  );
};

const SortDropdownMenu: React.FC = () => {
  const sortOptions = [
    { label: "Most popular", value: "popular" },
    { label: "Newest", value: "newest" },
    { label: "Oldest", value: "oldest" },
  ];
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    sortOptions[0]
  );

  const handleSortSelect = (option: Option) => {
    setSelectedOption(option);
    console.log("Selected:", option);
  };

  return (
    <div className={styles.itemsSortContainer}>
      <span className={styles.itemsText}>238 items</span>
      <SortDropdown
        options={sortOptions}
        onSelect={handleSortSelect}
        selectedOption={selectedOption}
      />
    </div>
  );
};

export default SortDropdownMenu;
