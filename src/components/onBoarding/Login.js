import { connect } from "react-redux";
import React, { Component } from "react";
import { login } from "../../actions";
import OnboardingSkelton from "./OnboardingSkeleton";
import { Link, withRouter } from "react-router-dom";

import { func, object, bool } from "prop-types";
import { getLoginLoading } from "../../reducers";
import InlineLoading from "../ui-kit/loading-indicator/InlineLoading";
import * as images from "../../lib/constants/images";
import * as routes from "../../lib/constants/routes";

const updateState = key => value => () => ({ [key]: value });
const updateName = updateState("userName");
const updatePassword = updateState("password");
class Login extends Component {
  state = {
    userName: "",
    password: "",
    formValid: false
  };

  updateName = e => {
    e.preventDefault();
    this.setState(updateName(e.target.value));
  };

  updatePassword = e => {
    e.preventDefault();
    this.setState(updatePassword(e.target.value));
  };

  formValid = () => {
    const { userName, password } = this.state;
    if (userName.length === 0 || password.length === 0) {
      this.setState(() => ({ formValid: false }));
      return false;
    }
    this.setState(() => ({ formValid: true }));
    return true;
  };
  onSubmitButton = event => {
    event.preventDefault();
    if (this.formValid()) {
      this.props.login(this.state);
      this.props.history.push(routes.ROOT_ROUTE);
    }
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
              {this.state.userName.length > 0 ? (
                <img src={images.checked} alt={"checked"} />
              ) : (
                <img src={images.error} alt={"error"} />
              )}
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
              {this.state.password.length > 0 ? (
                <img src={images.checked} alt={"checked"} />
              ) : (
                <img src={images.error} alt={"error"} />
              )}
            </div>
            <div className="form-group">
              <Link to={routes.RESET_EMAIL}>Forgot password</Link>
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
  login: func,
  showLoginLoading: bool,
  history: object.isRequired
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
