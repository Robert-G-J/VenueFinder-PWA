/* eslint-disable */

import React from "react";
import SearchBar from "./SearchBar";
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";

describe("<SearcBar getValues updateSearchbarQuery />", () => {
  let component;
  const mockClick = jest.fn();
  const mockChange = jest.fn();

  beforeEach(() => {
    component = shallow(
      <SearchBar getVenues={mockClick} updateSearchbarQuery={mockChange} />
    );
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <SearchBar getVenues={mockClick} updateSearchbarQuery={mockChange} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("<TextField />", () => {

    it('exists', () => {
      component.find("<TextField>")
    })

  })
  it("renders without crashing", () => {
    expect(component.exists()).toEqual(true);
  });

  it("should have one input", () => {
    expect(component.find(".search-bar__input").length).toEqual(1);
  });

  describe("<Button />", () => {
    it("Should exist", () => {
      expect(component.find(".search-bar__button").length).toEqual(1);
    });

    it("Should call a click handler when clicked", () => {
      component = mount(
        <SearchBar updateSearchbarQuery={mockChange} getVenues={mockClick} />
      );
      component.find("[data-selector='search-bar__button']").first().simulate("click");
      expect(mockClick).toHaveBeenCalled()
    });
  });
});
