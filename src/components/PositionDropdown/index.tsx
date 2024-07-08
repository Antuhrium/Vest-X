import { useState } from "react";
import styles from "./styles.module.scss";

interface PositionDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

const positionOptions = [
  { label: "UX / UI designer", value: "UX / UI designer" },
  { label: "Developer", value: "Developer" },
  { label: "Project Manager", value: "Project Manager" },
  { label: "QA Tester", value: "QA Tester" },
  // Add more social options if needed
];

export default function PositionDropdown({
  value,
  onChange,
}: PositionDropdownProps) {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const filteredOptions = positionOptions.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdown} onClick={toggleDropdown}>
        <div className={styles.selected}>
          <span>{value || "Select a position option"}</span>
          <span
            className={`${styles.arrow} ${open ? styles.up : styles.down}`}
          ></span>
        </div>
        {open && (
          <div className={styles.dropdownList}>
            {filteredOptions.map((option) => (
              <div
                key={option.value}
                className={styles.dropdownItem}
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                  setSearchTerm("");
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
