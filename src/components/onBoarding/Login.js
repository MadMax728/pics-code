import React, { Component } from "react";
import OnboardingSkelton from "./OnboardingSkeleton";
import * as images from "../../constants/images";

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

  onSubmitButton = fn => fn(this.state);

  render() {
    return (
      <OnboardingSkelton
        topHeader={"Do what you love"}
        subHeader={"Register for free"}
        showDownloadStore
      >
        {({ onSubmitLogin }) => (
          <form onSubmit={this.onSubmitButton(onSubmitLogin)}>
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
              <button className="blue_button">Log in</button>
            </div>
          </form>
        )}
      </OnboardingSkelton>
    );
  }
}

export default Login;
