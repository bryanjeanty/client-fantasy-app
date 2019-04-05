import React, { Component } from "react";
import Generation from "../content/Generation";
import Dragon from "../content/Dragon";

class Home extends Component {
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

export default Home;
