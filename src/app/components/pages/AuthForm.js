import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, FormGroup, Input } from "reactstrap";
import { signup, login } from "../../actions/account.js";
import fetchStates from "../../reducers/fetchStates";

let Error = <div />;

class AuthForm extends Component {
  state = {
    username: "",
    password: ""
  };

  updateUsername = event => {
    this.setState({ username: event.target.value });
  };

  updatePassword = event => {
    this.setState({ password: event.target.value });
  };

  signup = () => {
    const { username, password } = this.state;

    this.props.signup({ username, password });
    this.showError();
  };

  login = () => {
    const { username, password } = this.state;

    this.props.login({ username, password });
    this.showError();
  };

  showError = () => {
    if (this.props.account.status === fetchStates.error) {
      return (Error = <div>{this.props.account.message}</div>);
    } else {
      return (Error = <div />);
    }
  };

  render() {
    return (
      <div>
        <h2>Dragon Stack</h2>
        <FormGroup>
          <Input
            type="text"
            value={this.state.username}
            placeholder="username"
            onChange={this.updateUsername}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            value={this.state.password}
            placeholder="password"
            onChange={this.updatePassword}
          />
        </FormGroup>
        <div>
          <Button onClick={this.login}>Log In</Button>
          <span> or </span>
          <Button onClick={this.signup}>Sign Up</Button>
        </div>
        <br />
        {Error}
      </div>
    );
  }
}

export default connect(
  ({ account }) => ({ account }),
  { signup, login }
)(AuthForm);
