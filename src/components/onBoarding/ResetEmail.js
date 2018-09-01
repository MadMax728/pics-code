import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { handleResetEmail } from "../../actions";
import OnBoarding from "./OnboardingSkeleton";
import { FORGOT_PASSWORD } from "../../constants/routes";
import * as images from "../../constants/images";
import { emailRegex } from "../../constants/inputMasks";

class ResetMail extends Component {
  state = {
    email: "",
    emailValid: false
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.emailValid) {
      this.props.handleResetEmail(this.state.email);
      this.props.history.push(FORGOT_PASSWORD);
    }
  };

  updateEmail = e => {
    e.preventDefault();
    this.setState({ email: e.target.value }, () => {
      const isEmailValid = emailRegex.test(this.state.email);
      this.setState({ emailValid: isEmailValid });
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
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.updateEmail}
              />
              {!this.state.emailValid ? (
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

ResetMail.propType = {};
const ResetEmail = withRouter(
  connect(
    null,
    { handleResetEmail }
  )(ResetMail)
);
export default ResetEmail;
