import React from "react";
import SpotList from "./SpotList";
import renderer from "react-test-renderer";

describe("The SpotList component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SpotList items={[]} id={1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
