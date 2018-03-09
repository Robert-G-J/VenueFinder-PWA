import React from "react";
import PropTypes from "prop-types";

const SpotItem = props => (
  <li key={`item-${props.id}`} className="spot-table__item">
    <button>{props.name}</button>
  </li>
);

SpotItem.propTypes = {
  id: PropTypes.string
};

export default SpotItem;
