import React from "react";
import SpotItem from "./SpotItem";
import renderer from "react-test-renderer";

describe("The SpotItem component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<SpotItem item={{ venue: { name: "test" } }} id={1} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
