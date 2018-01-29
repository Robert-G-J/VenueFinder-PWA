import React from "react";
import SpotTable from "./SpotTable";
import renderer from "react-test-renderer";

describe("The Query Picker component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SpotTable venues={[]} id={1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
