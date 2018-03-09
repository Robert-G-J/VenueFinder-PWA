import React from "react";
import SpotItem from "../spot-item/SpotItem";
import PropTypes from "prop-types";

const SpotList = ({ venues }) => (
  <div className="spot-table">
    <ul className="spot-table__list">
      {venues.map(venue => <SpotItem name={venue.name} id={venue.id} />)}
    </ul>
  </div>
);

SpotList.propTypes = {
  venues: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      location: PropTypes.shape({
        address: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        distance: PropTypes.number.isRequired
      })
    })
  )
};
export default SpotList;
