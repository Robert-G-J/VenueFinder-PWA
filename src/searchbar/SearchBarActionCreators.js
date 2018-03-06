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
        error => {
          dispatch(currentPositionFailure);
          reject(error);
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

export const makeDateString = () => {
  const today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth();
  const yyyy = today.getFullYear();
  const prependZero = dateString => {
    if (dateString.length > 2) return new Error("Only two digit values");
    return dateString < 10 ? `0${dateString}` : dateString;
  };
  return `${yyyy}${prependZero(mm)}${prependZero(dd)}`;
};

// check if already have coords in state, if not then call getPosition
export function getVenues() {
  return (dispatch, getState) => {
    dispatch(getPosition())
      .then(() => {
        dispatch(isGettingVenues);
        const position = getState().SearchBar.position;
        const query = getState().SearchBar.fsqRequestData.query;
        console.log("Thunk getState:", position);

        suggestCompletion({
          ll: `${position.coords.latitude}, ${position.coords.longitude}`,
          v: makeDateString(),
          query: `${query}`
        }).then(
          venues => {
            console.log("successfully got venues", venues);
            dispatch(getVenuesSuccess(venues));
          },
          () => {
            dispatch(getVenuesFailure);
          }
        );
      })
      .catch(error => {
        console.error("Cannot retrieve your position", error);
      });
  };
}

export const updateSearchbarQuery = searchTerm => {
  return {
    type: types.UPDATE_SEARCHBAR_QUERY,
    query: searchTerm
  };
};
