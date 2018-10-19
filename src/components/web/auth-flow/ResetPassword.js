import React, { Component } from "react";
import * as images from "../../../lib/constants/images";
import * as routes from "../../../lib/constants/routes";
import { Translations } from "../../../lib/translations";
import PropTypes from "prop-types";
import { BaseHeader, BaseFooter, DownloadStore } from "../common";
class ResetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      repeatPassword: "",
      form: {}
    };
  }

  // handleChangeField which will be update every from value when change
  handleChangeField = event => {
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
    console.log(this.state.form);
  };

  // handelSubmit called when click on submit
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.form);
    if (!this.formValid()) {
      return false;
    }
    this.props.history.push(routes.ROOT_ROUTE);
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

  render() {
    const { form } = this.state;

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
                    autoComplete="Password"
                    name="password"
                    value={form.password ? form.password : ""}
                    onChange={this.handleChangeField}
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
                    autoComplete="Repeat Password"
                    name="repeat_password"
                    value={form.repeat_password ? form.repeat_password : ""}
                    onChange={this.handleChangeField}
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

ResetPassword.propTypes = {
  history: PropTypes.any
};

export default ResetPassword;
