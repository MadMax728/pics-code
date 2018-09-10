import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { handleResetEmail } from "../../../../actions";
import { OnBoardingSkeleton } from "../on-boarding-skeleton";
import { func, shape } from "prop-types";
import { FORGOT_PASSWORD } from "../../../../lib/constants/routes";
import * as images from "../../../../lib/constants/images";
import { emailRegex } from "../../../../lib/constants/inputMasks";

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
      <OnBoardingSkeleton
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
      </OnBoardingSkeleton>
    );
  }
}

ResetMail.propTypes = {
  handleResetEmail: func,
  history: shape({
    push: func
  })
};
const ResetEmail = withRouter(
  connect(
    null,
    { handleResetEmail }
  )(ResetMail)
);
export default ResetEmail;
