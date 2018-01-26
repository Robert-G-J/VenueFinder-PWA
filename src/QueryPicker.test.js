import React from "react";
import QueryPicker from "./QueryPicker";
import renderer from "react-test-renderer";

describe("The Query Picker component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<QueryPicker />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
