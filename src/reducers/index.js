import types from "../constants";

export const initialState = {
  isGetting: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.IS_GETTING_POSITION:
      return {
        ...state,
        isGetting: true
      };
    default:
      return state;
  }
};
