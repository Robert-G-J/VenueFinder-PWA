import React from "react";
import SearchBar from "./SearchBar";
import renderer from "react-test-renderer";

describe("The search bar componenet", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SearchBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
