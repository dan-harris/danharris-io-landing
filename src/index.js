import React from "react";
import ReactDOM from "react-dom";
// app imports
import LandingApp from "./containers/LandingApp";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

// render app
ReactDOM.render(<LandingApp />, document.getElementById("root"));

// register service worker
registerServiceWorker();