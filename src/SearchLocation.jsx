import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchLocation extends Component {
  render() {
    return (
      <div className="search-location__body">
        <input
          type="text"
          placeholder="Choose location, or..."
          className="search-location__input"
          onChange={e => this.props.onChange(e.target.value)}
        />
        <button className="search-location__button">Use current</button>
      </div>
    );
  }
}

SearchLocation.propTypes = {
  onChange: PropTypes.func,
  locationText: PropTypes.string
};

export default SearchLocation;
