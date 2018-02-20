import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchLocation extends Component {
  constructor(props) {
    super(props);

    // binds
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log("Got position:", position);
        const { latitude, longitude } = position.coords;
        this.props.onCoordinatesChange(latitude, longitude);
      },
      error => {
        console.log("Error getting position:", error);
      }
    );
  }

  render() {
    return (
      <div className="search-location__body">
        <input
          type="text"
          placeholder="Choose location, or..."
          className="search-location__input"
          onChange={e => this.props.onLocationTextChange(e.target.value)}
        />
        <button className="search-location__button" onClick={this.handleClick}>
          Use current
        </button>
      </div>
    );
  }
}

SearchLocation.propTypes = {
  onLocationTextChange: PropTypes.func,
  onCoordinatesChange: PropTypes.func,
  locationText: PropTypes.string,
  latitude: PropTypes.number,
  longitude: PropTypes.number
};

export default SearchLocation;
