import React, { Component } from "react";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "../../styles/core/App.css";
import Generation from "../content/Generation";
import Dragon from "../content/Dragon";
import { generationReducer } from "../../reducers/index";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  generationReducer,
  composeEnhancer(applyMiddleware(thunk))
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h2>Dragon Stack</h2>
          <Generation />
          <Dragon />
        </div>
      </Provider>
    );
  }
}

export default App;
