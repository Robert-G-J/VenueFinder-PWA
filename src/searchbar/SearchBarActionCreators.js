/* eslint-disable */
import types from "../constants";
import { suggestCompletion } from "../services/fsqAPI";

export const isGettingCurrentPosition = {
  type: types.IS_GETTING_POSITION
};

export const currentPositionSuccess = position => {
  return {
    type: types.GET_POSITION_SUCCESS,
    position: position
  };
};

export const currentPositionFailure = {
  type: types.GET_POSITION_FAILURE
};

export function getPosition() {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch(isGettingCurrentPosition);
      navigator.geolocation.getCurrentPosition(
        // success
        position => {
          console.log("successfully got position", position);
          dispatch(currentPositionSuccess(position));
          resolve();
        },
        () => {
          dispatch(currentPositionFailure);
          reject();
        }
      );
    });
  };
}

export const isGettingVenues = {
  type: types.IS_GETTING_VENUES
};

export const getVenuesSuccess = venues => {
  return {
    type: types.GET_VENUES_SUCCESS,
    venues: venues
  };
};

export const getVenuesFailure = {
  type: types.GET_VENUES_FAILURE
};

export function getVenues(params) {
  return dispatch => {
    dispatch(isGettingVenues);
    suggestCompletion(params);
    // .then(() => console.log("successfully got venues"))
    //   .then( () => dispatch(getVenuesSuccess))
    //   .catch(ex => dispatch(getVenuesFailure))
    // );
  };
}
