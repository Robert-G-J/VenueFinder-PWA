const expect = require("chai").expect;

describe("Location searching", () => {
  it("Should load with the right title", () => {
    browser.url("http://localhost:3000/");
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql("Search Spots");
  });
});
