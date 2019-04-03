import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import DragonAvatar from "./DragonAvatar";
import { fetchDragon } from "../../actions/dragon";

class Dragon extends Component {
  componentDidMount() {
    this.props.fetchDragon();
  }

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

const mapStateToProps = state => {
  const dragon = state.dragon;

  return { dragon };
};

const componentConnector = connect(
  mapStateToProps,
  { fetchDragon }
);

export default componentConnector(Dragon);
