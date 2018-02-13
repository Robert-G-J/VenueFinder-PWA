import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import Search from "./components/search/";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";

ReactDOM.render(<Search />, document.getElementById("root"));
registerServiceWorker();
