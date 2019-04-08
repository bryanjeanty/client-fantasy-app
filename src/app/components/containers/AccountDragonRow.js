import React, { Component } from "react";
import { Button } from "reactstrap";
import DragonAvatar from "../content/DragonAvatar";
import { BACKEND } from "../../../config";

class AccountDragonRow extends Component {
  state = {
    nickname: this.props.dragon.nickname,
    edit: false
  };

  updateNickname = event => {
    this.setState({
      nickname: event.target.value
    });
  };

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  };

  save = () => {
    fetch(`${BACKEND.ADDRESS}/dragon/update`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nickname: this.state.nickname,
        dragonId: this.props.dragon.dragonId
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.type === "error") {
          alert(json.message);
        } else {
          this.toggleEdit();
        }
      })
      .catch(error => alert(error.message));
  };

  get SaveButton() {
    return <Button onClick={this.save}>Save</Button>;
  }

  get EditButton() {
    return <Button onClick={this.toggleEdit}>Edit</Button>;
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.nickname}
          onChange={this.updateNickname}
          disabled={!this.state.edit}
        />
        <br />
        <DragonAvatar dragon={this.props.dragon} />
        {this.state.edit ? this.SaveButton : this.EditButton}
      </div>
    );
  }
}

export default AccountDragonRow;
