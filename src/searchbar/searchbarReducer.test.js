/* global describe, expect, it */
import types from "../constants";
import { reducer, initialState } from "./searchbarReducer";

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
        isGetting: true
      };
      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });

  describe("Successfully gets position from navigator", () => {
    it("should return the correct state", () => {
      const coords = {
        lat: 50,
        long: 0
      };
      const action = {
        type: types.GET_POSITION_SUCCESS,
        coords
      };
      const startingState = {
        isGetting: true
      };
      const expectedState = {
        isGetting: false,
        ...coords
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
        isGetting: true
      };
      const expectedState = {
        isGetting: false
      };
      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });
});
