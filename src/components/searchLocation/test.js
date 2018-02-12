import React from "react";
import SearchLocation from ".";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("The SearchLocation component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SearchLocation />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const component = shallow(<SearchLocation />);
    expect(component.exists()).toEqual(true);
  });
});
