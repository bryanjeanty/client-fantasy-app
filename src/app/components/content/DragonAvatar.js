import React, { Component } from "react";

class DragonAvatar extends Component {
  render() {
    const { dragonId, generationId, birthdate, traits } = this.props.dragon;
    const traitList = traits.map(trait => {
      return (
        <li key={trait.traitType}>
          Dragon {trait.traitType}: <strong>{trait.traitValue}</strong>
        </li>
      );
    });

    if (!dragonId) return <div />;

    return (
      <div>
        <h1>Dragon</h1>
        <p>
          Dragon ID: <strong>{dragonId}</strong>
        </p>
        <p>
          Birthdate: <strong>{birthdate}</strong>
        </p>
        <ul>{traitList}</ul>
        <p>
          Generation ID: <strong>{generationId}</strong>
        </p>
      </div>
    );
  }
}

export default DragonAvatar;
