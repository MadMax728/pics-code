import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as images from "../../../lib/constants/images";
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
      emailValid: false,
      isValidPassword: false,
      form: {
        gender: "male"
      }
    };
  }

  handleChangeField = event => {
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
    console.log(this.state.form);
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.form);
  };

  render() {
    const { form } = this.state;

    return (
      <div className="login-process">
        <BaseHeader />
        <section className="col-xs-12">
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
                    name="username"
                    value={form.username ? form.username : ""}
                    onChange={this.handleChangeField}
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
                    name="email"
                    value={form.email ? form.email : ""}
                    onChange={this.handleChangeField}
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
                    autoComplete="password"
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
                    id="repeat-password"
                    placeholder="Repeat Password"
                    autoComplete="repeat-password"
                    name="repeat_password"
                    value={form.repeat_password ? form.repeat_password : ""}
                    onChange={this.handleChangeField}
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
                    <li onChange={this.handleChangeField}>
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        defaultChecked={form.gender === "male" ? true : false}
                        className="black_button"
                      />
                      <label htmlFor="male">Male</label>
                    </li>
                    <li onChange={this.handleChangeField}>
                      <input
                        type="radio"
                        id="female"
                        value="female"
                        name="gender"
                        defaultChecked={form.gender === "female" ? true : false}
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
}

Register.propTypes = {
  history: PropTypes.any
};

export default Register;
