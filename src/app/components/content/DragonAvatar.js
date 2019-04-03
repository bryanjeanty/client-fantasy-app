import React, { Component } from "react";

class DragonAvatar extends Component {
  render() {
    const { dragonId, generationId, birthdate, traits } = this.props.dragon;
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

export default DragonAvatar;
