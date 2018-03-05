/* eslint-disable */
import React, { Component } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ handleQueryChange, getVenues }) => (
  <div className="search-bar">
    <label htmlFor="search-bar" className="search-bar__label" />
    <input
      type="text"
      className="search-bar__input"
      placeholder="Search spots..."
      onChange={handleQueryChange}
    />
    <button className="search-bar__button" onClick={getVenues}>
      Search near me
    </button>
  </div>
);

SearchBar.propTypes = {
  getVenues: PropTypes.func,
  handleQueryChange: PropTypes.func
};

export default SearchBar;
