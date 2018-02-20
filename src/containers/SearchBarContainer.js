import { connect } from "react-redux";
import { getPosition } from "../actions";

import SearchBar from "../components/searchBar";

const mapStateToProps = state => {
  console.log(state);
  return {
    bla: state.SearchApp.bla
  };
};

const mapDispatchToProps = dispatch => ({
  getPosition: () => {
    dispatch(getPosition());
  }
});

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchBar);

export default SearchContainer;
