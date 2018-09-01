import React, { Component } from "react";
import OnBoarding from "./OnboardingSkeleton";
import { withRouter } from "react-router-dom";
import { FORGOT_PASSWORD } from "../../constants/routes";
class ResetMail extends Component {
  state = {};
  handleSubmit = () => this.props.history.push(FORGOT_PASSWORD);

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
              />
              {/*<img src="images/checked.svg" />*/}
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
const ResetEmail = withRouter(ResetMail);
export default ResetEmail;
