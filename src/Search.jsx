import React, { Component } from "react";
import "./search.css";
import SearchLocation from "./SearchLocation";
import SpotTable from "./SpotTable";

const foursquare = require("react-foursquare")({
  clientID: "A150E11L5JS0WTGP0C1F5E4HAJHKDICLYKQIQTDGX4K21LLE",
  clientSecret: "UEYU0RJNPXDXLDY5FNF1DTSZJ4HO3CUEBTNHTJWDJNB1WLPX"
});

class Search extends Component {
  constructor(props) {
    super(props);
    // state declaration
    this.state = {
      queryParams: {
        ll: "37.7749, -122.4194",
        query: null,
        v: "20170801"
      },
      queryResponse: [],
      locationText: ""
    };

    // bindings
    this.onChangeSearchField = this.onChangeSearchField.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleLocationTextChange = this.handleLocationTextChange.bind(this);
  }

  onChangeSearchField(e) {
    this.setState({ query: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    foursquare.venues.getVenues(this.state.queryParams).then(res => {
      console.log("FSQ response", res);
      this.setState({ queryResponse: res.response.venues });
      console.log("FSQ Response set in state");
    });
  }

  handleLocationTextChange(locationText) {
    this.setState({ locationText: locationText });
  }

  render() {
    const { queryResponse, locationText } = this.state;

    return (
      <div className="search__body">
        <div className="search-input">
          <h1>Search Component</h1>
          <SearchLocation
            locationText={locationText}
            onChange={this.handleLocationTextChange}
          />
          <div>
            <label htmlFor="search-input" className="search-input__label" />
            <input
              type="text"
              placeholder="Search spots... "
              onChange={this.onChangeSearchField}
            />
            <button onClick={this.handleClick}>Search</button>
          </div>
        </div>
        <SpotTable venues={queryResponse} />
      </div>
    );
  }
}
export default Search;
