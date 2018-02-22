/* global expect, it, describe */

import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import * as actions from "./SearchBarActionCreators";
import types from "../constants";
import { suggestCompletion } from "../services/fsqAPI";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("SearchBar action creators", () => {
  describe("to get current position", () => {
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
  describe("to get all nearby venues", () => {
    const mockVenues = {
      minivenues: [
        {
          id: 1,
          name: "Froufrou Coffee",
          location: {
            address: "The Frang, Broadmead",
            city: "Bristol"
          }
        },
        {
          id: 2,
          name: "Conga Rhubarb and Friends",
          location: {
            address: "Xmas Pudding Gang HQ",
            city: "Bristol"
          }
        }
      ]
    };

    it("creates an action to indicate is getting venues", () => {
      const expectedAction = {
        type: types.IS_GETTING_VENUES
      };
      expect(actions.isGettingVenues).toEqual(expectedAction);
    });

    it("creates an action when successfully gets venues", () => {
      const expectedAction = {
        type: types.GET_VENUES_SUCCESS,
        venues: mockVenues
      };
      expect(actions.getVenuesSuccess(mockVenues)).toEqual(expectedAction);
    });

    it("creates an action when fails to get venues", () => {
      const expectedAction = {
        type: types.GET_VENUES_FAILURE
      };
      expect(actions.getVenuesFailure).toEqual(expectedAction);
    });

    it("has an async action-creator for successfully getting Venues", () => {
      const expectedActions = [
        actions.isGettingVenues,
        actions.getVenuesSuccess(mockVenues)
      ];
      const mockSuggestCompletion = jest.fn(cb => cb(mockVenues));
    });
  });
});
