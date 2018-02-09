import React from "react";
import Search from ".";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("The Search component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Search />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const component = shallow(<Search />);
    expect(component.exists()).toEqual(true);
  });
});
