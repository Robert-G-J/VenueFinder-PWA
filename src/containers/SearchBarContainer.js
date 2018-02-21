import { connect } from "react-redux";
import { getPosition } from "../actions";
import { suggestCompletion } from "../services/fsqAPI";
import SearchBar from "../components/searchBar/SearchBar";

const searchForVenues = () => {
  console.log("in searchforvenues fn");
  const response = suggestCompletion({ ll: "50, 50", query: "coffee" });
  console.log("api response", response);
};

const mapStateToProps = state => {
  state;
};

const mapDispatchToProps = dispatch => ({
  getPosition: () => {
    dispatch(getPosition());
  }
});

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchBar);

export default SearchContainer;
