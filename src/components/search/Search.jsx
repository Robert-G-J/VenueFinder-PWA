import React, { Component } from "react";
import "./index.css";
import SearchBarContainer from "../../containers/SearchBarContainer";
import SpotList from "../spotList/SpotList";
import { suggestCompletion } from "../../services/fsqAPI";

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
    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  onChangeSearchField(e) {
    this.setState({ query: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    // this.searchForVenues().then(res => {
    //   console.log("FSQ response", res.response.groups[0].items);
    //   this.setState({ queryResponse: res.response.groups[0].items });
    // });
  }

  handleQueryChange(e) {
    this.setState({
      queryParams: { ...this.state.queryParams, query: e.target.value }
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
