import React from "react";

const QueryPicker = ({ venues, id }) => (
  <div className="picker">
    <ul className="picker__list">
      {venues.map((venue, index) => (
        <li key={`item-${index}`} className="picker__item">
          <button>{venue.name}</button>
        </li>
      ))}
    </ul>
  </div>
);

export default QueryPicker;
