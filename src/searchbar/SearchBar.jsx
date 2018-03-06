import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const SearchBar = ({ updateSearchbarQuery, getVenues }) => {
  const debounceUpdateSearchbarQuery = _.debounce(updateSearchbarQuery, 250);

  return (
    <div className="search-bar">
      <label htmlFor="search-bar" className="search-bar__label">
        Search for spots
      </label>
      <input
        type="text"
        id="search-bar"
        className="search-bar__input"
        placeholder="Search spots..."
        onChange={event => debounceUpdateSearchbarQuery(event.target.value)}
      />
      <button className="search-bar__button" onClick={getVenues}>
        Search near me
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  getVenues: PropTypes.func.isRequired,
  updateSearchbarQuery: PropTypes.func.isRequired
};

export default SearchBar;
