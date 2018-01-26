import React, { Component } from "react";

const foursquare = require("react-foursquare")({
  clientID: "A150E11L5JS0WTGP0C1F5E4HAJHKDICLYKQIQTDGX4K21LLE",
  clientSecret: "UEYU0RJNPXDXLDY5FNF1DTSZJ4HO3CUEBTNHTJWDJNB1WLPX"
});

class VenueSearch extends Component {
  constructor(props) {
    super(props);
    // state declaration
    this.state = {
      queryParams: {
        ll: "37.7749, -122.4194",
        query: null,
        v: "20170801"
      },
      queryResponse: []
    };

    // bindings
    this.onChangeSearchField = this.onChangeSearchField.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  render() {
    return (
      <div className="search__input">
        <h1>VenueSearch Component</h1>
        <div>
          <label />
          <input type="text" onChange={this.onChangeSearchField} />
          <button onClick={this.handleClick}>Search</button>
        </div>
        {/* <div>{this.state.queryResponse && this.state.queryResponse.map()}</div> */}
      </div>
    );
  }
}
export default VenueSearch;
