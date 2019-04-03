import React, { Component } from "react";
import { createStore } from "redux";
import "../../styles/core/App.css";
import Generation from "../content/Generation";
import Dragon from "../content/Dragon";
import { generationReducer } from "../../reducers/index";
import { generationActionCreator } from "../../actions/generation";

const store = createStore(
  generationReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => console.log("store state update", store.getState()));

fetch("http://localhost:5000/generation")
  .then(response => response.json())
  .then(json => {
    store.dispatch(generationActionCreator(json.generation));
  })
  .catch(error => console.error("error", error));

class App extends Component {
  render() {
    return (
      <div>
        <h2>Dragon Stack</h2>
        <Generation />
        <Dragon />
      </div>
    );
  }
}

export default App;
