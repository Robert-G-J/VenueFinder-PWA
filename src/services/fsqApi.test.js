import fsqApi from "./fsqApi";
import { mockResponse } from '../helpers/venues';

jest.mock('./fsqApi');

describe("Foursquare API", () => {
  it("Should return venues", async () => {
    const fsqApiResult = await fsqApi();
    expect(mockResponse).toEqual(fsqApiResult);
  });
});
