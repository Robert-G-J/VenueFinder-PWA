import React from "react";
import Search from "./Search";
import renderer from "react-test-renderer";

describe("The search component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Search />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
