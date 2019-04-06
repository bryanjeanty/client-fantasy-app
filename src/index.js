import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { fetchAuthenticated } from "./app/actions/account.js";
import App, { store } from "./app/components/core/App";

store.dispatch(fetchAuthenticated()).then(() => {
  render(<App />, document.getElementById("root"));
});
