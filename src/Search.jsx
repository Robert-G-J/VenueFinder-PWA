import React, { Component } from "react";
import "./search.css";
import SearchBar from "./SearchBar";
import SearchLocation from "./SearchLocation";
import SpotTable from "./SpotTable";
import { searchByCoords, searchByText } from "./services/fsqExplore";

class Search extends Component {
  constructor(props) {
    super(props);
    // state declaration
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
    } else {
      return searchByText(this.state.queryParams);
    }
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
    this.setState({ latitude: latitude, longitude: longitude });
    let lat = parseFloat(latitude);
    let lon = parseFloat(longitude);
    this.setState({
      queryParams: { ...this.state.queryParams, ll: `${lat}, ${lon}` }
    });
  }

  handleLocationTextChange(locationText) {
    this.setState({ locationText: locationText });
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
        <SearchLocation
          locationText={locationText}
          latitude={latitude}
          longitude={longitude}
          onLocationTextChange={this.handleLocationTextChange}
          onCoordinatesChange={this.handleCoordinatesChange}
        />
        <SearchBar
          query={queryParams.query}
          handleClick={this.handleClick}
          handleQueryChange={this.handleQueryChange}
        />
        <SpotTable items={queryResponse} />
      </div>
    );
  }
}
export default Search;
