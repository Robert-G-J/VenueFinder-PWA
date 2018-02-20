import { connect } from "react-redux";
import { getPosition } from "../actions";

import SearchBar from "../components/searchBar/SearchBar";

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => ({
  getPosition: () => {
    dispatch(getPosition());
  }
});

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchBar);

export default SearchContainer;
