import React from "react";

const SpotTable = ({ items, id }) => (
  <div className="spot-table">
    <ul className="spot-table__list">
      {items.map((item, index) => (
        <li key={`item-${index}`} className="spot-table__item">
          <button>{item.venue.name}</button>
        </li>
      ))}
    </ul>
  </div>
);

export default SpotTable;
