import React, { useState } from "react";
import { RangeSlider } from "rsuite";
import styles from "./styles.module.scss";
import HeaderTitle from "../HeaderTitle";
import "./styles.scss";

export type filtersT = {
    title: string;
    type: "radio" | "checkbox";
    options: string[];
};

interface FilterTypes {
    filters: filtersT[];
    title?: string;
    buttonTitle?: string;
    style?: {[key: string]: string}
}

const Filter: React.FC<FilterTypes> = ({ title, filters, buttonTitle, style }) => {
    const [range, setRange] = useState<[number, number]>([299, 1499]);
    const [selectedRadio, setSelectedRadio] = useState<{
        [key: string]: string;
    }>({});
    const [selectedCheckboxes, setSelectedCheckboxes] = useState<{
        [key: string]: string[];
    }>({});

    const handleCheckboxChange = (filterName: string, value: string) => {
        setSelectedCheckboxes((prevState) => {
            const isSelected = prevState[filterName]?.includes(value);
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
                    [filterName]: [...(prevState[filterName] || []), value],
                };
            }
        });
    };

    return (
        <div className={styles.container} style={style}>
            {title ? (
                <HeaderTitle className={styles.headerTitle}>
                    {title}
                </HeaderTitle>
            ) : null}

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
                        <label className={styles.radioContainer} key={option}>
                            <input
                                type={filter.type}
                                name={filter.title}
                                value={option}
                                checked={
                                    filter.type === "radio"
                                        ? selectedRadio[filter.title] === option
                                        : selectedCheckboxes[
                                              filter.title
                                          ]?.includes(option)
                                }
                                onChange={() => {
                                    if (filter.type === "radio") {
                                        setSelectedRadio((prevState) => ({
                                            ...prevState,
                                            [filter.title]: option,
                                        }));
                                    } else {
                                        handleCheckboxChange(
                                            filter.title,
                                            option
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
                                {filter.type === "checkbox" &&
                                    selectedCheckboxes[filter.title]?.includes(
                                        option
                                    ) && (
                                        <img
                                            style={{
                                                display: "flex",
                                            }}
                                            src="/images/white-checkmark.svg"
                                            alt="checkmark"
                                        />
                                    )}
                            </span>
                            {option}
                        </label>
                    ))}
                </div>
            ))}
            {buttonTitle && <button className={styles.button}>{buttonTitle}</button>}
        </div>
    );
};

export default Filter;
