import { connect } from "react-redux";
import React, { Component } from "react";
import { login } from "../../actions";
import OnboardingSkelton from "./OnboardingSkeleton";
import * as images from "../../constants/images";
import { LoginTypes } from "../../types";
const updateState = key => value => () => ({ [key]: value });
const updateName = updateState("userName");
const updatePassword = updateState("password");
class Login extends Component {
  state = {
    userName: "",
    password: ""
  };

  updateName = e => {
    e.preventDefault();
    this.setState(updateName(e.target.value));
  };

  updatePassword = e => {
    e.preventDefault();
    this.setState(updatePassword(e.target.value));
  };

  onSubmitButton = event => {
    event.preventDefault();
    this.props.login(this.state);
  };

  render() {
    return (
      <OnboardingSkelton
        topHeader={"Do what you love"}
        subHeader={"Register for free"}
        showDownloadStore
      >
        {() => (
          <form>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                value={this.state.userName}
                onChange={this.updateName}
                placeholder="User name / Email"
              />
              <img src={images.checked} alt={"checked"} />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                value={this.state.password}
                onChange={this.updatePassword}
                placeholder="Password"
              />
              <img src={images.error} alt={"error"} />
            </div>
            <div className="form-group">
              {/* <a href="">Forgot password</a> */}
            </div>
            <div className="form-group">
              <button onClick={this.onSubmitButton} className="blue_button">
                Log in
              </button>
            </div>
          </form>
        )}
      </OnboardingSkelton>
    );
  }
}

Login.propTypes = {
  ...LoginTypes
};
export default connect(
  null,
  { login }
)(Login);
