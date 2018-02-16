/* global describe, expect, it */
import types from "../constants";
import { reducer, initialState } from ".";

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
});
