import React from "react";
import SpotList from ".";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("The SpotList component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SpotList items={[]} id={1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const component = shallow(<SpotList />);
    expect(component.exists()).toEqual(true);
  });
});
