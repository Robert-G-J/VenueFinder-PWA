import React from "react";
import SearchLocation from "./SearchLocation";
import renderer from "react-test-renderer";

describe("The SearchLocation component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SearchLocation />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
