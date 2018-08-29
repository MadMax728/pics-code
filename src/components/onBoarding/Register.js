import React, { Component } from "react";
import { connect } from "react-redux";
import { RegisterTypes } from "../../types";
import { handleRegisteration } from "../../actions";
import OnboardingSkelton from "./OnboardingSkeleton";

const updateState = apply => (name, value) => state => ({
  [name]: apply(state[name], value)
});
const toggleState = updateState(p => !p);
const updateName = updateState((undefined, value) => value);
const updateEmail = updateState((undefined, value) => value);
const updatePassword = updateState((undefined, value) => value);
//const updatePassword = updateState(value => value)
class Register extends Component {
  state = {
    userName: "",
    email: "",
    password: "",
    maleChecked: true,
    femaleChecked: false
  };

  updateUserName = e => {
    e.preventDefault();
    this.setState(updateName("userName", e.target.value));
  };

  updateEmail = e => {
    e.preventDefault();
    this.setState(updateEmail("email", e.target.value));
  };

  updatePassword = e => {
    //logic for repeat password to match pass
    e.preventDefault();
    this.setState(updatePassword("password", e.target.value));
  };

  updateMaleChecked = e => {
    // inital checked male
    e.preventDefault();
    this.setState(toggleState("maleChecked"));
  };

  handleRegisteration = e => {
    e.preventDefault();
    this.props.handleRegisteration(this.state);
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
                type="text"
                className="form-control"
                id="username"
                placeholder="User name"
                value={this.state.userName}
                onChange={this.updateUserName}
              />
              {/* <img src="images/checked.svg" alt={"checked"} /> */}
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
              {/* <img src="images/error.svg" alt={"checked"} /> */}
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
              {/* <img src="images/checked.svg" alt={"checked"} /> */}
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Repeat Password"
                value={this.state.repeatPassword}
                onChange={this.updatePassword}
              />
              {/* <img src="images/error.svg" alt={"error"} /> */}
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
              <button
                className="blue_button"
                onClick={this.handleRegisteration}
              >
                Register
              </button>
            </div>
          </form>
        )}
      </OnboardingSkelton>
    );
  }
}

Register.propTypes = {
  ...RegisterTypes
};

export default connect(
  null,
  { handleRegisteration }
)(Register);
