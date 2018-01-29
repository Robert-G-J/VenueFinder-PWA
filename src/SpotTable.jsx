import React from "react";

const SpotTable = ({ venues, id }) => (
  <div className="spot-table">
    <ul className="spot-table__list">
      {venues.map((venue, index) => (
        <li key={`item-${index}`} className="spot-table__item">
          <button>{venue.name}</button>
        </li>
      ))}
    </ul>
  </div>
);

export default SpotTable;
