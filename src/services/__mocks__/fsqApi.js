import { mockResponse } from '../../helpers/venues';

export default function fsqApi() {
  return new Promise((resolve) => {
    resolve(mockResponse);
  });
}