import React from "react";

const SpotItem = props => (
  <li key={`item-${props.index}`} className="spot-table__item">
    <button>{props.item.venue.name}</button>
  </li>
);

export default SpotItem;
