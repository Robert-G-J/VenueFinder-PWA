import types from "../constants";

/* action creators */
export default function fetchCurrentPosition() {
  return {
    type: types.FETCH_CURRENT_POSITION,
    isFetching: true
  };
}
