import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import Generation from "../content/Generation";
import Dragon from "../content/Dragon";
import AccountDragons from "../content/AccountDragons";
import { logout } from "../../actions/account";

class Home extends Component {
  render() {
    return (
      <div>
        <Button onClick={this.props.logout} className="logout-button">
          Log Out
        </Button>
        <h2>Dragon Stack</h2>
        <Generation />
        <Dragon />
        <br />
        <AccountDragons />
      </div>
    );
  }
}

export default connect(
  null,
  { logout }
)(Home);
