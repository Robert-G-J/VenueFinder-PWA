import localforage from "localforage";

const foursquare = require("react-foursquare-es5-mod")({
  clientID: process.env.REACT_APP_FSQ_CLIENT_ID,
  clientSecret: process.env.REACT_APP_FSQ_CLIENT_PRIVATE_KEY
});

export const suggestCompletionPLEASE = params =>
  foursquare.venues.suggestCompletion(params);

export const suggestCompletion = async params => {
  const response = await localforage.getItem("1");
  console.log("getItem", response);
  if (response !== null) {
    return response;
  }
  const apiResponse = await suggestCompletionPLEASE(params);
  localforage.setItem("1", apiResponse);
  return apiResponse;
};
