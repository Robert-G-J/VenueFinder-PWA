import React from "react";
import SearchBar from ".";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("The search bar component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SearchBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const component = shallow(<SearchBar />);
    expect(component.exists()).toEqual(true);
  });
});
