import React, { useState } from "react";
import styles from "./style.module.scss";
import SearchIcon from "/images/tdesign_search.svg";

interface SearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const Search: React.FC<SearchProps> = ({
  onSearch,
  placeholder = "Search projects by name, token, category, or other keywords",
}) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <i className={styles.searchIcon}>
        <img src={SearchIcon} alt="search" />
      </i>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={styles.searchInput}
      />
    </form>
  );
};

export default Search;
