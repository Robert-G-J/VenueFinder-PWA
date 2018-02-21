/* eslint-disable */
import types from "../constants";

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

/* action creators */
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
