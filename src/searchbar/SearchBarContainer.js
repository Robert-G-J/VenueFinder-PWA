import { connect } from "react-redux";
import { getPosition } from "./SearchBarActionCreators";
import SearchBar from "./SearchBar";

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
