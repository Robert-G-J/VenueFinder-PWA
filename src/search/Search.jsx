import React from "react";
import SearchBarContainer from "../searchbar/SearchBarContainer";
import SpotListContainer from "../spot-list/SpotListContainer";
import "./index.css";

const Search = () => (
  <div className="search__body">
    <h1>Search Component</h1>
    <SearchBarContainer />
    <SpotListContainer />
  </div>
);
export default Search;
