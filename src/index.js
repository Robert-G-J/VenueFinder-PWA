/* global document */

import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
import Search from "./components/search/";
// import store from "./store";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";

ReactDOM.render(<Search />, document.getElementById("root"));
registerServiceWorker();
