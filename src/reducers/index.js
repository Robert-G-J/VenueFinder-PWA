import types from "../constants";

export const initialState = {
  isGetting: true
};
// I'm not sure whether I should be hardcoding the key/values in reducers. I feel that they should be in the action that's dispatched
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.IS_GETTING_POSITION:
      return {
        ...state,
        isGetting: true
      };
    case types.GET_POSITION_SUCCESS:
      return {
        ...state,
        isGetting: false,
        ...action.coords
      };
    case types.GET_POSITION_FAILURE:
      return {
        ...state,
        isGetting: false
      };
    default:
      return state;
  }
};

export default reducer;
