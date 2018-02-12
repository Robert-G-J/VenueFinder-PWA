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
    const clickEvent = browser
      .url("http://localhost:3000/")
      .click(".search-location__button") // needs to wait until browser returns coords
      .element(".search-bar__input")
      .setValue(spotText)
      .click(".search-bar__button")
      .waitForExist(".spot-table__item")
      .then(function() {
        browser.element(".spot-table__item").getValue();
      });
  });
});
