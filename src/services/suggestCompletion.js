import localforage from "localforage";
import fsqApi from './fsqApi';

const suggestCompletion = async params => {
  const cacheKey = `${params.query}|${params.ll}`;
  const response = await localforage.getItem(cacheKey);
  if (response !== null) {
    return response;
  }
  const apiResponse = await fsqApi(params);
  localforage.setItem(cacheKey, apiResponse);
  return apiResponse;
};

export default suggestCompletion;
