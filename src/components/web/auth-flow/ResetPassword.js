import React, { Component } from "react";
import * as images from "../../../lib/constants/images";
import * as routes from "../../../lib/constants/routes";
import { Translations } from "../../../lib/translations";
import { BaseHeader, BaseFooter, DownloadStore } from "../common";
class ResetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      repeatPassword: ""
    };
  }

  /**
   * updateRepeatPassword
   */
  updateRepeatPassword = e => {
    e.preventDefault();
    this.setState({ repeatPassword: e.target.value });
  };

  /**
   * getUserEnterPassword
   */
  getUserEnterPassword = e => {
    e.preventDefault();
    this.setState({ password: e.target.value });
  };

  /**
   * formValid
   */
  formValid = () => {
    const { repeatPassword, password } = this.state;

    if (
      repeatPassword.length === 0 ||
      password.length === 0 ||
      repeatPassword !== password
    ) {
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    if (!this.formValid()) {
      return false;
    }

    this.props.history.push(routes.ROOT_ROUTE);
  };

  render() {
    return (
      <div className="login-process">
        <BaseHeader />
        <section>
          <div className="custom-container">
            <div className="login-wrapper">
              <h3 className="text-center">
                {Translations.reset_password.header}
              </h3>
              <p>{Translations.reset_password.subheader}</p>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter new password"
                    onChange={this.getUserEnterPassword}
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
                  this.state.password !== this.state.repeatPassword ? (
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
              <DownloadStore />
            </div>
          </div>
        </section>
        <BaseFooter />
      </div>
    );
  }
}

export default ResetPassword;
