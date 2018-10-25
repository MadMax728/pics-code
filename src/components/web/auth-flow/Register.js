import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as routes from "../../../lib/constants/routes";
import * as images from "../../../lib/constants/images";
import { Translations } from "../../../lib/translations";
import { BaseHeader, BaseFooter, Cookies, DownloadStore } from "../common";
import PropTypes from "prop-types";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        gender: "male",
        username: "",
        email: "",
        password: "",
        repeat_password: "",
        emailValid: false,
        isValidPassword: false
      }
    };
  }

  componentDidMount() {}

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
    this.props.history.push(routes.ROOT_ROUTE);
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
              <form onSubmit={this.handleSubmit}>
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
                  {form.username.length === 0 ? (
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
                  {form.email.length === 0 || form.emailValid ? (
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
                  {form.password.length === 0 ? (
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
                  {form.repeat_password.length === 0 ||
                  form.repeat_password !== form.password ? (
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
                        defaultChecked={form.gender === "male"}
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
                        defaultChecked={form.gender === "female"}
                      />
                      <label htmlFor="female">Female</label>
                    </li>
                  </ul>
                </div>
                <div className="form-group">
                  <button className="blue_button" type="submit">
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
        <BaseFooter className={"custom-container"} />
      </div>
    );
  }
}

Register.propTypes = {
  history: PropTypes.any
};

export default Register;
