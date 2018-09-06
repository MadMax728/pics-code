import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { handleResetPassword } from "../../../actions";
import OnBoarding from "./OnboardingSkeleton";
import { func, shape } from "prop-types";
import { LOGIN_ROUTE } from "../../../lib/constants/routes";
import * as images from "../../../lib/constants/images";

const updateState = apply => (name, value) => state => ({
  [name]: apply(state[name], value)
});
const updatePassword = updateState((name, value) => value);
class ResetPassword extends Component {
  state = {
    password: "",
    repeatPassword: "",
    isValidPassword: false
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.isValidPassword) {
      this.props.handleResetPassword(this.state.password);
      this.props.history.push(LOGIN_ROUTE);
    }
  };

  updatePassword = e => {
    //logic for repeat password to match pass
    e.preventDefault();
    this.setState(updatePassword("password", e.target.value));
  };

  updateRepeatPassword = e => {
    //logic for repeat password to match pass
    e.preventDefault();
    this.setState(updatePassword("repeatPassword", e.target.value), () => {
      if (this.state.password === this.state.repeatPassword) {
        this.setState(() => ({ isValidPassword: true }));
      } else {
        this.setState(() => ({ isValidPassword: false }));
      }
    });
  };

  render() {
    return (
      <OnBoarding
        topHeader={"Reset password"}
        subHeader={"We will send you an email to resetting your password."}
      >
        {() => (
          <form>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter new password"
                onChange={this.updatePassword}
              />

              {this.state.password.length === 0 ? (
                <img src={images.error} alt={"error"} />
              ) : (
                <img src={images.checked} alt={"checked"} />
              )}
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="new-password"
                placeholder="Repeat password"
                onChange={this.updateRepeatPassword}
              />
              {this.state.repeatPassword.length === 0 ||
              !this.state.isValidPassword ? (
                <img src={images.error} alt={"error"} />
              ) : (
                <img src={images.checked} alt={"checked"} />
              )}
            </div>
            <div className="form-group">
              <button className="blue_button" onClick={this.handleSubmit}>
                Send
              </button>
            </div>
          </form>
        )}
      </OnBoarding>
    );
  }
}

ResetPassword.propTypes = {
  handleResetPassword: func,
  history: shape({
    push: func
  })
};
const ResetEmail = withRouter(
  connect(
    null,
    { handleResetPassword }
  )(ResetPassword)
);
export default ResetEmail;
