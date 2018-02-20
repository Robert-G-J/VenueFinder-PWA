import React from "react";
import SpotItem from "../spotItem/SpotItem";

const SpotList = ({ items, id }) => (
  <div className="spot-table">
    <ul className="spot-table__list">
      {items.map((item, index) => <SpotItem item={item} index={index} />)}
    </ul>
  </div>
);

export default SpotList;
