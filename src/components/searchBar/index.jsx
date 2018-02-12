/* eslint-disable */
import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <label htmlFor="search-bar" className="search-bar__label" />
        <input
          type="text"
          className="search-bar__input"
          placeholder="Search spots..."
          onChange={this.props.handleQueryChange}
        />
        <button className="search-bar__button" onClick={this.props.handleClick}>
          Search
        </button>
      </div>
    );
  }
}

SearchBar.propTypes = {
  query: PropTypes.string,
  handleClick: PropTypes.func,
  handleQueryChange: PropTypes.func
};

export default SearchBar;
