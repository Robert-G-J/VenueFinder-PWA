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

const makeDateString = () => {
  const today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth();
  const yyyy = today.getFullYear();
  const prependZero = ddOrMm => {
    if (ddOrMm.length > 2) return new Error("Only two digit values");
    return dd < 10 ? `0${dd}` : dd;
  };
  return `${yyyy}${prependZero(mm)}${prependZero(dd)}`;
};

// function that returns a function
// check if already have coords in state, if not then call getPosition
export function getVenues() {
  return (dispatch, getState) => {
    dispatch(getPosition())
      .then(() => {
        dispatch(isGettingVenues);
        const position = getState().SearchBar.position;
        console.log("Thunk getState:", position);
        suggestCompletion({
          ll: `${position.coords.latitude}, ${position.coords.longitude}`,
          v: makeDateString(),
          query: "coffee"
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
