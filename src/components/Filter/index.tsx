import React, { useState } from "react";
import { RangeSlider } from "rsuite";
import styles from "./styles.module.scss";
import HeaderTitle from "../HeaderTitle";
import "./styles.scss";

const filters = [
    {
        title: "Status",
        type: "radio",
        options: [
            { label: "Vesting Open", value: "Vesting Open", name: "Status" },
            { label: "Active", value: "Active", name: "Status" },
            { label: "Completed", value: "Completed", name: "Status" },
        ],
    },
    {
        title: "Funding Stage",
        type: "checkbox",
        options: [
            { label: "Seed Stage", value: "Seed Stage", name: "Funding Stage" },
            {
                label: "Early Stage",
                value: "Early Stage",
                name: "Funding Stage",
            },
            {
                label: "Growth Stage",
                value: "Growth Stage",
                name: "Funding Stage",
            },
            { label: "Late Stage", value: "Late Stage", name: "Funding Stage" },
            { label: "Exit Stage", value: "Exit Stage", name: "Funding Stage" },
        ],
    },
    {
        title: "Location",
        type: "checkbox",
        options: [
            { label: "USA", value: "USA", name: "Location" },
            { label: "Asia", value: "Asia", name: "Location" },
            { label: "Europa", value: "Europa", name: "Location" },
            { label: "Africa", value: "Africa", name: "Location" },
            { label: "Others", value: "Others", name: "Location" },
        ],
    },
];

const Filter: React.FC = () => {
    const [range, setRange] = useState<[number, number]>([299, 1499]);
    const [selectedRadio, setSelectedRadio] = useState<string>("Vesting Open");
    const [selectedCheckboxes, setSelectedCheckboxes] = useState<{
        [key: string]: string[];
    }>({
        "Funding Stage": [],
        Location: [],
    });

    const handleCheckboxChange = (filterName: string, value: string) => {
        setSelectedCheckboxes((prevState) => {
            const isSelected = prevState[filterName].includes(value);
            if (isSelected) {
                return {
                    ...prevState,
                    [filterName]: prevState[filterName].filter(
                        (item) => item !== value
                    ),
                };
            } else {
                return {
                    ...prevState,
                    [filterName]: [...prevState[filterName], value],
                };
            }
        });
    };

    return (
        <div className={styles.container}>
            <HeaderTitle className={styles.headerTitle}>Filter</HeaderTitle>

            <div className={styles.rangeContainer}>
                <div className={styles.title}>Investment amount (USDT)</div>
                <div className={styles.inputsWrapper}>
                    <div className={styles.inputContainer}>
                        <span>from</span>
                        <input
                            type="number"
                            value={range[0]}
                            onChange={(e) =>
                                setRange([Number(e.target.value), range[1]])
                            }
                            className={styles.rangeInput}
                            min={299}
                            max={2000}
                        />
                    </div>

                    <div className={styles.inputContainer}>
                        <span>to</span>
                        <input
                            type="number"
                            value={range[1]}
                            className={styles.rangeInput}
                            onChange={(e) =>
                                setRange([range[0], Number(e.target.value)])
                            }
                            min={299}
                            max={2000}
                        />
                    </div>
                </div>
                <RangeSlider
                    min={299}
                    max={2000}
                    progress
                    value={range}
                    onChange={(value) => setRange(value)}
                />
            </div>

            {filters.map((filter) => (
                <div className={styles.filtersWrapper} key={filter.title}>
                    <div className={styles.title}>{filter.title}</div>
                    {filter.options.map((option) => (
                        <label
                            className={styles.radioContainer}
                            key={option.value}
                        >
                            <input
                                type={filter.type}
                                name={option.name}
                                value={option.value}
                                checked={ filter.type === "radio" ? selectedRadio === option.value : selectedCheckboxes[ filter.title ]?.includes(option.value) }
                                onChange={() => {
                                    if (filter.type === "radio") {
                                        setSelectedRadio(option.value);
                                    } else {
                                        handleCheckboxChange(
                                            filter.title,
                                            option.value
                                        );
                                    }
                                }}
                            />
                            <span
                                className={
                                    filter.type === "radio"
                                        ? styles.radioCheckmark
                                        : styles.checkboxCheckmark
                                }
                            >
                                <img
                                    style={{ display:  selectedCheckboxes[ filter.title ]?.includes(option.value) ? "flex" : "none" }}
                                    src="/images/white-checkmark.svg"
                                    alt="checkmark"
                                />
                            </span>
                            {option.label}
                        </label>
                    ))}
                </div>
            ))}
            <button className={styles.button}>Apply</button>
        </div>
    );
};

export default Filter;
