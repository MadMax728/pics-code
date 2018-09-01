import React, { Component } from "react";
import { connect } from "react-redux";
import { RegisterTypes } from "../../types";
import { handleRegisteration } from "../../actions";
import OnboardingSkelton from "./OnboardingSkeleton";
import { getRegisterLoading } from "../../reducers";
import { withRouter } from "react-router-dom";
import InlineLoading from "../ui-kit/loading-indicator/InlineLoading";
import * as images from "../../constants/images";
import * as CONSTANTS from "../../constants/routes";

const updateState = apply => (name, value) => state => ({
  [name]: apply(state[name], value)
});
const toggleState = updateState(p => !p);
const updateName = updateState((undefined, value) => value);
const updateEmail = updateState((undefined, value) => value);
const updatePassword = updateState((undefined, value) => value);
//const updatePassword = updateState(value => value)
const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/g;

class Register extends Component {
  state = {
    userName: "",
    email: "",
    password: "",
    repeatPassword: "",
    maleChecked: true,
    emailValid: false,
    isValidPassword: false,
    femaleChecked: false
  };

  updateUserName = e => {
    e.preventDefault();
    this.setState(updateName("userName", e.target.value));
  };

  updateEmail = e => {
    e.preventDefault();
    this.setState(updateEmail("email", e.target.value), () => {
      const isEmailValid = emailRegex.test(this.state.email);

      this.setState({ emailValid: isEmailValid });
    });
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

  updateMaleChecked = e => {
    // inital checked male
    e.preventDefault();
    this.setState(toggleState("maleChecked"));
  };

  formValid = () => {
    const { email, userName, password, isValidPassword } = this.state;
    const isEmailValid = emailRegex.test(email);
    if (
      userName.length < 0 ||
      !isEmailValid ||
      !isValidPassword ||
      password.length < 0
    ) {
      this.setState({ formValid: false });
      return false;
    }
    this.setState({ formValid: true });
    return true;
  };
  handleRegisteration = e => {
    e.preventDefault();
    if (this.formValid()) {
      this.props.handleRegisteration(this.state);
      this.props.history.push(CONSTANTS.LOGIN_ROUTE);
    }
  };

  render = () => (
    <OnboardingSkelton
      topHeader={"Do what you love"}
      subHeader={"Register for free"}
      showDownloadStore
    >
      {() => (
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="User name"
              value={this.state.userName}
              onChange={this.updateUserName}
            />
            {this.state.userName.length === 0 ? (
              <img src={images.error} alt={"error"} />
            ) : (
              <img src={images.checked} alt={"checked"} />
            )}
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.updateEmail}
            />
            {this.state.email === 0 || !this.state.emailValid ? (
              <img src={images.error} alt={"error"} />
            ) : (
              <img src={images.checked} alt={"checked"} />
            )}
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={this.state.password}
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
              id="password"
              placeholder="Repeat Password"
              value={this.state.repeatPassword}
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
            <ul className="options">
              <li>
                <input
                  type="radio"
                  id="male"
                  name="amount"
                  className="black_button"
                  checked={this.state.maleChecked}
                  onChange={this.updateMaleChecked}
                />
                <label htmlFor="male">Male</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="female"
                  name="amount"
                  checked={!this.state.maleChecked}
                  onChange={this.updateMaleChecked}
                />
                <label htmlFor="female">Female</label>
              </li>
            </ul>
          </div>
          <div className="form-group">
            {!this.props.showRegsiterLoading ? (
              <button
                className="blue_button"
                onClick={this.handleRegisteration}
              >
                Register
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

Register.propTypes = {
  ...RegisterTypes
};

const mapStateToProps = state => ({
  showRegsiterLoading: getRegisterLoading(state)
});
export default withRouter(
  connect(
    mapStateToProps,
    { handleRegisteration }
  )(Register)
);
