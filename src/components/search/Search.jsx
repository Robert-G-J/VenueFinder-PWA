import React from "react";
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar';
import SpotList from '../SpotList';

const Search = () => (
  <div className="search_body">
    <h1>Search</h1>
    <SearchBar />
    <SpotList />
  </div>;
 );

 Search.propTypes = {
  getPosition: PropTypes.func.isRequired
 }

 Search.defaultProps = {

 }


