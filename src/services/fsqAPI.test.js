import sinon from "sinon";
import { suggestCompletion } from "./fsqAPI";

const foursquare = require("react-foursquare");

describe("Functions that call the foursquare endpoints", () => {
  afterEach(() => {
    foursquare.venues.suggestCompletion.restore();
  });

  it("call the suggestCompletion endpoint", () => {
    const query = {
      ll: "50, 50",
      query: "coffee"
    };

    const fsqSpy = sinon.spy(foursquare.venues, "suggestCompletion");
    expect(fsqSpy).called.toBe(false);
    suggestCompletion(query);
    expect(fsqSpy).called.toBe(true);
  });
});
