import { connect } from "react-redux";
import { getPosition, getVenues } from "./SearchBarActionCreators";
import SearchBar from "./SearchBar";

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => ({
  getPosition: () => {
    dispatch(getPosition());
  },

  getVenues: params => {
    dispatch(getVenues(params));
  }
});

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchBar);

export default SearchContainer;
