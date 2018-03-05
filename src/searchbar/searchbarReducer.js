import types from "../constants";

export const initialState = {
  position: {
    isGetting: false
  }
};
// I'm not sure whether I should be hardcoding the key/values in reducers. I feel that they should be in the action that's dispatched
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.IS_GETTING_POSITION:
      return {
        ...state,
        position: {
          isGetting: true
        }
      };

    case types.GET_POSITION_SUCCESS:
      return {
        ...state,
        position: {
          isGetting: false,
          coords: {
            latitude: action.position.coords.latitude,
            longitude: action.position.coords.longitude,
            accuracy: action.position.coords.accuracy
          }
        }
      };

    case types.GET_POSITION_FAILURE:
      return {
        ...state,
        position: {
          isGetting: false
        }
      };

    case types.IS_GETTING_VENUES:
      return {
        ...state,
        position: {
          ...state.position,
          ...state.coords
        },
        fsqResponseData: {
          isGetting: true
        }
      };

    case types.GET_VENUES_SUCCESS:
      return {
        ...state,
        fsqResponseData: {
          isGetting: false,
          venues: action.venues
        }
      };

    default:
      return state;
  }
};

export default reducer;
