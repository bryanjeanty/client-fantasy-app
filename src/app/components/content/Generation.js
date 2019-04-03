import React, { Component } from "react";

const DEFAULT_GENERATION = {
  generationId: "",
  expiration: ""
};

const MINIMUN_DELAY = 3000;

class Generation extends Component {
  state = {
    generation: DEFAULT_GENERATION
  };

  timer = null;

  componentDidMount() {
    this.fetchNextGeneration();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  fetchGeneration = () => {
    fetch("http://localhost:5000/generation")
      .then(response => response.json())
      .then(json => {
        this.setState({
          generation: json.generation
        });
      })
      .catch(error => console.error("error", error));
  };

  fetchNextGeneration = () => {
    this.fetchGeneration();

    let delay =
      new Date(this.state.generation.expiration).getTime() -
      new Date().getTime();

    if (delay < MINIMUN_DELAY) {
      delay = MINIMUN_DELAY;
    }

    this.timer = setTimeout(() => this.fetchNextGeneration(), delay);
  };

  render() {
    const { generation } = this.state;
    return (
      <div>
        <h3>Generation {generation.generationId}.</h3>
        <h4>Expires on : {new Date(generation.expiration).toString()}</h4>
      </div>
    );
  }
}

export default Generation;
