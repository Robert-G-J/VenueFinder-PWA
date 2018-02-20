/* eslint-disable */

import React from "react";
import SearchBar from ".";
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";

describe("The search bar component", () => {
  let component;
  const mockOther = jest.fn();
  const mockClick = jest.fn();
  const mockChange = jest.fn();

  beforeEach(() => {
    component = shallow(
      <SearchBar handleClick={mockClick} handleQueryChange={mockChange} />
    );
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <SearchBar
          getPosition={mockClick}
          handleClick={mockClick}
          handleQueryChange={mockChange}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    expect(component.exists()).toEqual(true);
  });

  it("should have one input", () => {
    expect(component.find(".search-bar__input").length).toEqual(1);
  });

  describe("Current location button", () => {
    it("Should exist", () => {
      expect(component.find(".search-bar__button").length).toEqual(1);
    });

    it("Should call a click handler when clicked", () => {
      component = mount(
        <SearchBar
          getPosition={mockClick}
          handleQueryChange={mockChange}
          handleClick={mockOther}
        />
      );
      expect(mockClick.mock.calls.length).toEqual(0);
      component.find(".search-bar__button").simulate("click"); // cannot find the button to click, doesn't increase the calls on the mock? Maybe it isn't activating the mock?
      expect(mockClick.mock.calls.length).toEqual(1);
    });
  });
});
