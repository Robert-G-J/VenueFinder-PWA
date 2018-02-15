/* eslint-disable */
import thunk from "redux-thunk";
import types from "../constants";

export const isGettingCurrentPosition = {
  type: types.IS_GETTING_POSITION
};

export const currentPositionSuccess = coords => {
  return {
    type: types.GET_POSITION_SUCCESS,
    coords
  };
};

export const currentPositionFailure = {
  type: types.GET_POSITION_FAILURE
};

/* action creators */
export function getPosition() {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch(isGettingCurrentPosition);
      navigator.geolocation.getCurrentPosition(
        // success
        coords => {
          dispatch(currentPositionSuccess(coords));
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
