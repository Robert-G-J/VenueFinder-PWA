/* global describe, expect, it */
import types from "../constants";
import { reducer, initialState } from "./searchbarReducer";
import { venues } from "../helpers/venues";

describe("Reducers", () => {
  it("Should return the initial state when no action is passed", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe("Is getting current position", () => {
    it("should return the correct state", () => {
      const action = {
        type: types.IS_GETTING_POSITION
      };
      const expectedState = {
        position: {
          isGetting: true
        }
      };
      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });

  describe("Successfully gets position from navigator", () => {
    it("should return the correct state", () => {
      const position = {
        coords: {
          latitude: 50,
          longitude: 0,
          accuracy: 5
        }
      };

      const action = {
        type: types.GET_POSITION_SUCCESS,
        position
      };

      const startingState = {
        ...initialState,
        position: {
          isGetting: true
        }
      };

      const expectedState = {
        position: {
          isGetting: false,
          coords: {
            ...position.coords
          }
        }
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });

  describe("Fails to get position from navigator", () => {
    it("should return the correct state", () => {
      const action = {
        type: types.GET_POSITION_FAILURE
      };

      const startingState = {
        position: {
          isGetting: true
        }
      };

      const expectedState = {
        position: {
          isGetting: false
        }
      };
      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });

  describe("On getting venues from fsq", () => {
    it("should return the correct state", () => {
      const action = {
        type: types.IS_GETTING_VENUES
      };

      const startingState = {
        position: {
          isGetting: false
        }
      };

      const expectedState = {
        ...startingState,
        fsqResponseData: {
          isGetting: true
        }
      };
      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });

  describe("Successfully gets venues from foursquare", () => {
    it("should return the correct state", () => {
      const action = {
        type: types.GET_VENUES_SUCCESS,
        venues
      };
      const startingState = {
        ...initialState,
        fsqResponseData: {
          isGetting: true
        }
      };
      const expectedState = {
        ...startingState,
        fsqResponseData: {
          isGetting: false,
          venues
        }
      };
      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });
});
