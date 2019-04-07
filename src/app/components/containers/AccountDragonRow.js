import React, { Component } from "react";
import DragonAvatar from "../content/DragonAvatar";

class AccountDragonRow extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.dragon.nickname}</h4>
        <br />
        <DragonAvatar dragon={this.props.dragon} />
      </div>
    );
  }
}

export default AccountDragonRow;
