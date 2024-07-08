import { useState } from "react";
import styles from "./styles.module.scss";

interface PeriodDropdownProps {
  periodValue: string;
  periodUnit: string;
  onValueChange: (value: string) => void;
  onUnitChange: (unit: string) => void;
}

const unitOptions = ["month", "day", "year"];

export default function PeriodDropdown({
  periodValue,
  periodUnit,
  onValueChange,
  onUnitChange,
}: PeriodDropdownProps) {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const filteredUnits = unitOptions.filter((unit) =>
    unit.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.periodDropdownContainer}>
      <input
        type="text"
        value={periodValue}
        onChange={(e) => onValueChange(e.target.value)}
        className={styles.periodInput}
      />
      <div className={styles.unitDropdown} onClick={toggleDropdown}>
        <div className={styles.selectedUnit}>
          <span>{periodUnit}</span>
          <span
            className={`${styles.arrow} ${open ? styles.up : styles.down}`}
          ></span>
        </div>
        {open && (
          <div className={styles.unitDropdownList}>
            {filteredUnits.map((unit, index) => (
              <div
                key={index}
                className={styles.unitDropdownItem}
                onClick={() => {
                  onUnitChange(unit);
                  setOpen(false);
                  setSearchTerm("");
                }}
              >
                {unit}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
