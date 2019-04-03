import React, { Component } from "react";
import "../../styles/core/App.css";
import Generation from "../content/Generation";
import Dragon from "../content/Dragon";

class App extends Component {
  render() {
    return (
      <div>
        <h2>Dragon Stack from React</h2>
        <Generation />
        <Dragon />
      </div>
    );
  }
}

export default App;
