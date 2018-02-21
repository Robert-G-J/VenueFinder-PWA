/* eslint-disable */
import React, { Component } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ getPosition, handleQueryChange, bla }) => (
  <div className="search-bar">
    <label htmlFor="search-bar" className="search-bar__label" />
    <input
      type="text"
      className="search-bar__input"
      placeholder="Search spots..."
      onChange={handleQueryChange}
    />
    <button
      className="search-bar__button"
      onClick={() => {
        getPosition();
      }}
    >
      Search near me
    </button>
  </div>
);

SearchBar.propTypes = {
  getPosition: PropTypes.func,
  handleQueryChange: PropTypes.func.isRequired
};

export default SearchBar;
