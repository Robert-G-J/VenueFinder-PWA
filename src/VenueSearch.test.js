import React from "react";
import VenueSearch from "./VenueSearch";
import renderer from "react-test-renderer";

describe("The search component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<VenueSearch />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
