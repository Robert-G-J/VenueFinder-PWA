import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import SearchApp from "./reducers";

const reducers = combineReducers({
  SearchApp
});

export default createStore(
  reducers,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
