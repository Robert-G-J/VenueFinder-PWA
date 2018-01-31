import object from "lodash/object";

const foursquare = require("react-foursquare")({
  clientID: "A150E11L5JS0WTGP0C1F5E4HAJHKDICLYKQIQTDGX4K21LLE",
  clientSecret: "UEYU0RJNPXDXLDY5FNF1DTSZJ4HO3CUEBTNHTJWDJNB1WLPX"
});

export const searchByCoords = queryParams => {
  const queryByCoord = object.omit(queryParams, "near");
  return foursquare.venues.explore(queryByCoord);
};

export const searchByText = queryParams => {
  const queryByPlaceName = object.omit(queryParams, "ll");
  return foursquare.venues.explore(queryByPlaceName);
};
