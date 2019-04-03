import React, { Component } from "react";
import DragonAvatar from "./DragonAvatar";

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
    return <DragonAvatar dragon={this.state.dragon} />;
  }
}

export default Dragon;