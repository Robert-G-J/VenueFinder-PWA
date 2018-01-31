import React from "react";
import SpotTable from "./SpotTable";
import renderer from "react-test-renderer";

describe("The Spot Table component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SpotTable items={[]} id={1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
