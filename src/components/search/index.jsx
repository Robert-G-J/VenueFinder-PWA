import React, { Component } from "react";
import { connect } from "redux";
import "./index.css";
import SearchBarContainer from "../../containers/SearchBarContainer";
import SearchLocation from "../searchLocation";
import SpotList from "../spotList";
import * as actions from "../../actions";
import { searchByCoords, searchByText } from "../../services/fsqExplore";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryParams: {
        ll: null,
        query: null,
        near: null,
        v: "20180101" // versioning- update as often as possible
      },
      queryResponse: [],
      locationText: "",
      latitude: null,
      longitude: null
    };

    // bindings
    this.onChangeSearchField = this.onChangeSearchField.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleLocationTextChange = this.handleLocationTextChange.bind(this);
    this.handleCoordinatesChange = this.handleCoordinatesChange.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.usingLocation = this.usingLocation.bind(this);
    this.searchForVenues = this.searchForVenues.bind(this);
  }

  onChangeSearchField(e) {
    this.setState({ query: e.target.value });
  }

  usingLocation() {
    return this.state.queryParams.ll != null;
  }

  searchForVenues() {
    if (this.usingLocation()) {
      return searchByCoords(this.state.queryParams);
    }
    return searchByText(this.state.queryParams);
  }

  handleClick(e) {
    e.preventDefault();
    this.searchForVenues().then(res => {
      console.log("FSQ response", res.response.groups[0].items);
      this.setState({ queryResponse: res.response.groups[0].items });
    });
  }

  handleQueryChange(e) {
    this.setState({
      queryParams: { ...this.state.queryParams, query: e.target.value }
    });
  }

  handleCoordinatesChange(latitude, longitude) {
    this.setState({ latitude, longitude });
    const lat = parseFloat(latitude);
    const lon = parseFloat(longitude);
    this.setState({
      queryParams: { ...this.state.queryParams, ll: `${lat}, ${lon}` }
    });
  }

  handleLocationTextChange(locationText) {
    this.setState({ locationText });
    this.setState({
      queryParams: { ...this.state.queryParams, near: locationText }
    });
  }

  render() {
    const {
      queryParams,
      queryResponse,
      locationText,
      latitude,
      longitude
    } = this.state;

    return (
      <div className="search__body">
        <h1>Search Component</h1>
        {/* <SearchLocation
          locationText={locationText}
          latitude={latitude}
          longitude={longitude}
          onLocationTextChange={this.handleLocationTextChange}
          onCoordinatesChange={this.handleCoordinatesChange}
        /> */}
        <SearchBarContainer />
        <SpotList items={queryResponse} />
      </div>
    );
  }
}
export default Search;
