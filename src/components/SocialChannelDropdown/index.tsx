import { useState } from "react";
import styles from "./styles.module.scss";
import TwitterIcon from "/images/socials/twitter.svg";
import TelegramIcon from "/images/socials/telegram.svg";

interface SocialChannelDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

const socialOptions = [
  { icon: TwitterIcon, label: "Twitter", value: "Twitter" },
  { icon: TelegramIcon, label: "Telegram", value: "Telegram" },
];

export default function SocialChannelDropdown({
  value,
  onChange,
}: SocialChannelDropdownProps) {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const filteredOptions = socialOptions.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdown} onClick={toggleDropdown}>
        <div className={styles.selected}>
          <span>
            {(
              <div className={styles.flexRow}>
                <img
                  src={
                    socialOptions.filter((option) => option.value === value)[0]
                      ? socialOptions.filter(
                          (option) => option.value === value
                        )[0].icon
                      : undefined
                  }
                  alt={value}
                />{" "}
                {value}
              </div>
            ) || "Select a social channel"}
          </span>
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
                <div className={styles.flexRow}>
                  <img src={option.icon} alt={option.label} />
                  {option.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
