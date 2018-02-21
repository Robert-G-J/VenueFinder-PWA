import React from "react";
import SpotItem from "../spot-item/SpotItem";

const SpotList = ({ items, id }) => (
  <div className="spot-table">
    <ul className="spot-table__list">
      {items.map((item, index) => <SpotItem item={item} index={index} />)}
    </ul>
  </div>
);

export default SpotList;
