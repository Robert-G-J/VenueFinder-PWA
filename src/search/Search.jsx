import React from "react";
import SearchBarContainer from "../searchbar/SearchBarContainer";
import SpotListContainer from "../spot-list/SpotListContainer";
import "./index.css";

const Search = () => (
  <div className="search__body">
    <header className="search__header">
      <h1>Search</h1>
      <SearchBarContainer />
    </header>
    <SpotListContainer />
  </div>
);
export default Search;
