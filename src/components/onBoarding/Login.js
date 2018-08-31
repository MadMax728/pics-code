import { connect } from "react-redux";
import React, { Component } from "react";
import { login } from "../../actions";
import OnboardingSkelton from "./OnboardingSkeleton";
import * as images from "../../constants/images";
import { Link, withRouter } from "react-router-dom";

import { LoginTypes } from "../../types";
import { getLoginLoading } from "../../reducers";
import InlineLoading from "../ui-kit/loading-indicator/InlineLoading";

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
    this.props.history.push("/home");
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
              {/* <img src={images.checked} alt={"checked"} /> */}
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
              {/* <img src={images.error} alt={"error"} /> */}
            </div>
            <div className="form-group">
              <Link to="/forgotPassword">Forgot password</Link>
            </div>
            <div className="form-group">
              {!this.props.showLoginLoading ? (
                <button onClick={this.onSubmitButton} className="blue_button">
                  Log in
                </button>
              ) : (
                <InlineLoading />
              )}
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
const mapStateToProps = state => ({
  showLoginLoading: getLoginLoading(state)
});
export default withRouter(
  connect(
    mapStateToProps,
    { login }
  )(Login)
);
