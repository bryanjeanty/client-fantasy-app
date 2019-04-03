import React, { Component } from "react";
import { createStore } from "redux";
import "../../styles/core/App.css";
import Generation from "../content/Generation";
import Dragon from "../content/Dragon";

const DEFAULT_GENERATION = {
  generationId: "",
  expiration: ""
};

const GENERATION_ACTION_TYPE = "GENERATION_ACTION_TYPE";

const generationReducer = (state, action) => {
  if (action.type === GENERATION_ACTION_TYPE) {
    return { generation: action.generation };
  }

  return {
    generation: DEFAULT_GENERATION
  };
};

const store = createStore(generationReducer);

store.subscribe(() => console.log("store state update", store.getState()));

store.dispatch({ type: "foo" });
store.dispatch({
  type: GENERATION_ACTION_TYPE,
  generation: {
    generationId: "goo",
    expiration: "bar"
  }
});

console.log("store.getstate()", store.getState());
// console.log("store", store);

const generationActionCreator = payload => {
  return {
    type: GENERATION_ACTION_TYPE,
    generation: payload
  };
};

const zooAction = generationActionCreator({
  generationId: "zoo",
  expiration: "bar"
});

store.dispatch(zooAction);

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
