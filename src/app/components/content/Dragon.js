import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import DragonAvatar from "./DragonAvatar";
import { fetchDragon } from "../../actions/dragon";

class Dragon extends Component {
  render() {
    return (
      <div>
        <Button onClick={() => this.props.fetchDragon()} color="primary">
          New Dragon
        </Button>
        <DragonAvatar dragon={this.props.dragon} />
      </div>
    );
  }
}

export default connect(
  ({ dragon }) => {
    return { dragon };
  },
  { fetchDragon }
)(Dragon);
