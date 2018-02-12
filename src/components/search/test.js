/* eslint-disable */

import React from "react";
import Search from ".";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

it("Search app renders correctly", () => {
  const tree = renderer.create(<Search />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("Search app doesn't crash", () => {
  const component = shallow(<Search />);
  expect(component.exists()).toEqual(true);
});
