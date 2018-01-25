import React from "react";
import PlacesSearcher from "./PlacesSearcher";
import renderer from "react-test-renderer";

describe("The search component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<PlacesSearcher />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
