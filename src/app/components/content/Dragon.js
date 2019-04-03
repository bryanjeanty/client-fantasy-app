import React, { Component } from "react";

const DEFAULT_DRAGON = {
  dragonId: "",
  birthdate: "",
  traits: [],
  generationId: "",
  nickname: ""
};

class Dragon extends Component {
  state = {
    dragon: DEFAULT_DRAGON
  };

  componentDidMount() {
    this.fetchNewDragon();
  }

  fetchNewDragon = () => {
    fetch("http://localhost:5000/dragon/new")
      .then(response => response.json())
      .then(json => {
        this.setState({
          dragon: json.dragon
        });
      })
      .catch(error => console.error("error", error));
  };

  render() {
    const { dragonId, generationId, birthdate, traits } = this.state.dragon;
    const traitList = traits.map(trait => {
      return (
        <li key={trait.traitType}>
          Dragon {trait.traitType}: {trait.traitValue}
        </li>
      );
    });

    return (
      <div>
        <h1>Dragon</h1>
        <p>Dragon ID: {dragonId}</p>
        <p>Birthdate: {birthdate}</p>
        <ul>{traitList}</ul>
        <p>Generation ID: {generationId}</p>
      </div>
    );
  }
}

export default Dragon;
