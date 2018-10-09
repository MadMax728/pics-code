import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as images from "../../../lib/constants/images";
import * as routes from "../../../lib/constants/routes";
import { Translations } from "../../../lib/translations";
import { BaseHeader, BaseFooter, Cookies, DownloadStore } from "../common";
import PropTypes from "prop-types";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      email: "",
      password: "",
      repeatPassword: "",
      maleChecked: true,
      emailValid: false,
      isValidPassword: false,
      femaleChecked: false
    };
  }

  getUserInput = e => {
    e.preventDefault();
  };

  handleSubmit = event => {
    this.props.history.push(routes.ROOT_ROUTE);
  };

  render = () => (
    <div className="login-process">
      <BaseHeader />
      <section>
        <div className="custom-container">
          <div className="login-wrapper">
            <h3 className="text-center">{Translations.login.header}</h3>
            <p>{Translations.login.subheader}</p>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="User name"
                  value={this.state.userName}
                  onChange={this.getUserInput}
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
                  onChange={this.getUserInput}
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
                  onChange={this.getUserInput}
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
                  id="repeat-password"
                  placeholder="Repeat Password"
                  value={this.state.repeatPassword}
                  onChange={this.getUserInput}
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
                      onChange={this.getUserInput}
                    />
                    <label htmlFor="male">Male</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="female"
                      name="amount"
                      checked={!this.state.maleChecked}
                      onChange={this.getUserInput}
                    />
                    <label htmlFor="female">Female</label>
                  </li>
                </ul>
              </div>
              <div className="form-group">
                <button className="blue_button" onClick={this.handleSubmit}>
                  Register
                </button>
              </div>
            </form>
            <div>
              <div className="terms-conditions">
                By clicking on register you agree to our
                <Link to={""}> General Terms & Conditions</Link>,
                <Link to={""}> Terms of Use </Link> and
                <Link to={""}> Data Protection & Privacy Policy </Link>.
              </div>
              <div className="free-register">
                Register free as a <b>company</b>
              </div>
            </div>
            <DownloadStore />
          </div>
        </div>
      </section>
      <Cookies />
      <BaseFooter />
    </div>
  );
}

Register.propTypes = {
  history: PropTypes.any
};

export default Register;
