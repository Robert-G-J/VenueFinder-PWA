import React from "react";

class PlacesSearcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  componentDidMount() {
    fetch("/api")
      .then(res => {
        console.log("res", res);
        res.json();
      })
      .then(data => this.setState({ data }));
  }
  render() {
    return (
      <div className="search__input">
        <h1>PlacesSearcher Component</h1>
        <input type="text" />
        {this.state.data.map(d => {
          <div key={d.id}>d</div>;
        })}
      </div>
    );
  }
}
export default PlacesSearcher;
