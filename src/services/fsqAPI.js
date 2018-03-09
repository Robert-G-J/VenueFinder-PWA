const foursquare = require("react-foursquare")({
  clientID: process.env.REACT_APP_FSQ_CLIENT_ID,
  clientSecret: process.env.REACT_APP_FSQ_CLIENT_PRIVATE_KEY
});

export const suggestCompletion = params =>
  foursquare.venues.suggestCompletion(params);
