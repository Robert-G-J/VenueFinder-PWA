/* eslint-disable */
const expect = require("chai").expect;

describe("Location searching", () => {
  it("Should load with the right title", () => {
    browser.url("http://localhost:3000/");
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql("Search Spots");
  });

  it("Should allow me to search by current location", () => {
    const spotText = "coffee";
    browser.url("http://localhost:3000/");
    browser
      .click(".search-location__button")
      .element(".search-bar__input")
      .setValue(spotText)
      .click(".search-bar__button");
    const list = browser.element(".spot-table__list").getText();
    expect(list).to.eq("Friska");
  });
});
