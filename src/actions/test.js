/* global expect, it, describe */

import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import types from "../constants";
import * as actions from ".";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Async actions", () => {
  const store = mockStore();

  beforeEach(() => {
    store.clearActions();
  });

  it("creates action-creator to indicate is fetching current position", () => {
    const mockCoords = { lat: 50, lon: 0 };
    const mockCurrentPosition = jest.fn(cb => cb(mockCoords));
    const mockGeolocation = {
      getCurrentPosition: mockCurrentPosition
    };
    const expectedActions = [
      actions.isGettingCurrentPosition,
      actions.currentPositionSuccess(mockCoords)
    ];
    global.navigator.geolocation = mockGeolocation;

    return store.dispatch(actions.getPosition()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates action when cannot get coordinates", () => {
    const expectedActions = [
      actions.isGettingCurrentPosition,
      actions.currentPositionFailure
    ];
    const mockGeolocationFail = {
      getCurrentPosition: jest.fn((successCB, failCB) => failCB())
    };
    global.navigator.geolocation = mockGeolocationFail;

    return store.dispatch(actions.getPosition()).catch(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
