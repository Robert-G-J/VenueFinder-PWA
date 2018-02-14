/* global expect, it, describe */

import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import types from "../constants";
import { fetchCurrentPosition } from ".";

describe("Async actions", () => {
  it("Should create an action to indicate is fetching current position", () => {
    const expectedAction = {
      type: types.FETCH_CURRENT_POSITION,
      isFetching: true
    };
    expect(fetchCurrentPosition()).toEqual(expectedAction);
  });
  it("creates FETCH_CURRENT_POSITION_SUCCESS when fetching current position has been done", () => {});
});
