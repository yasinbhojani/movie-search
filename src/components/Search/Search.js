import React, { useState } from "react";
import styles from "./Search.module.css";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchTermHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") {
      alert("Can't leave the search box empty");
    } else {
      props.searchMovies(searchTerm.trim());
    }
  };

  return (
    <div className={styles.search}>
      <form onSubmit={formSubmitHandler}>
        <input
          type="search"
          placeholder="Search Movies or Shows..."
          onChange={searchTermHandler}
          value={searchTerm}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
