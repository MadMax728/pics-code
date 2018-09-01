import React, { Component } from "react";
import OnBoarding from "./OnboardingSkeleton";
import { withRouter } from "react-router-dom";

class ResetMail extends Component {
  state = {};
  render() {
    return (
      <OnBoarding>
        {() => (
          <div className="custom-container">
            <div className="login-wrapper">
              <h3 className="text-center">Reset password</h3>
              <p>We will send you an email to resetting your password. </p>
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
                  <button className="blue_button" onClick={this.pushHistory}>
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </OnBoarding>
    );
  }
}

const ResetEmail = withRouter(ResetMail);
export { ResetEmail };
