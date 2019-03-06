import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as routes from "../../../lib/constants/routes";
import * as images from "../../../lib/constants/images";
import { Translations } from "../../../lib/translations";
import { BaseHeader, BaseFooter, DownloadStore } from "../common";
import { RadioButton, Button, Input, ErrorSpan } from "../../ui-kit";
import PropTypes from "prop-types";
import {
  submitRegister,
  submitCompanyRegister
} from "../../../actions/register";
import { Auth } from "../../../auth";
import { connect } from "react-redux";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUser: true,
      form: {
        gender: "male",
        username: "",
        email: "",
        password: "",
        repeat_password: "",
        emailValid: false,
        isValidPassword: false
      },
      error: {}
    };
  }

  render() {
    const { form, isUser, error } = this.state;

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
                  <ErrorSpan value={error.servererror} />
                  <Input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder={Translations.register.username}
                    name="username"
                    value={form.username ? form.username : ""}
                    onChange={this.handleChangeField}
                  />
                  {form.username.length === 0 ? (
                    <img src={images.error} alt={"error"} />
                  ) : (
                    <img src={images.checked} alt={"checked"} />
                  )}
                  <ErrorSpan value={error.username} />
                </div>

                <div className="form-group">
                  <Input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder={Translations.register.email}
                    name="email"
                    value={form.email ? form.email : ""}
                    onChange={this.handleChangeField}
                  />
                  {form.email.length === 0 || form.emailValid ? (
                    <img src={images.error} alt={"error"} />
                  ) : (
                    <img src={images.checked} alt={"checked"} />
                  )}
                  <ErrorSpan value={error.email} />
                </div>

                <div className="form-group">
                  <Input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder={Translations.register.password}
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
                  <ErrorSpan value={error.password} />
                </div>
                <div className="form-group">
                  <Input
                    type="password"
                    className="form-control"
                    id="repeat-password"
                    placeholder={Translations.register.repeat_password}
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
                  <ErrorSpan value={error.repeat_password} />
                </div>
                {isUser ? (
                  <div className="form-group">
                    <ul className="options">
                      <li>
                        <RadioButton
                          type="radio"
                          id="male"
                          name="gender"
                          value="male"
                          defaultChecked={form.gender === "male"}
                          className="black_button"
                          onChange={this.handleChangeField}
                        />
                        <label htmlFor="male">
                          {Translations.register.male}
                        </label>
                      </li>
                      <li>
                        <RadioButton
                          type="radio"
                          id="female"
                          value="female"
                          name="gender"
                          defaultChecked={form.gender === "female"}
                          onChange={this.handleChangeField}
                        />
                        <label htmlFor="female">
                          {Translations.register.female}
                        </label>
                      </li>
                    </ul>
                  </div>
                ) : (
                  ""
                )}

                <div className="form-group">
                  <Button
                    className="blue_button"
                    type="submit"
                    text={Translations.register.register}
                  />
                </div>
              </form>
              <div>
                <div className="terms-conditions">
                  {Translations.register.agree}
                  <Link to={routes.TERMS_CONDITIONS_ROUTE}>
                    {" "}
                    {Translations.base_footer.general_terms_and_conditions}
                  </Link>
                  ,
                  <Link to={routes.TEARMS_USE_ROUTE}>
                    {" "}
                    {Translations.base_footer.terms_of_use}{" "}
                  </Link>{" "}
                  and
                  <Link to={routes.DATA_PROTECTION_AND_PRIVACY_POLICY_ROUTE}>
                    {" "}
                    {
                      Translations.base_footer
                        .data_protection_and_privacy_policy
                    }
                  </Link>
                  .
                </div>

                <div className="free-register">
                  {Translations.register.free}{" "}
                  <b
                    onClick={this.handleUserLogin}
                    onKeyPress={this.onKeyHandle}
                    role="button"
                    tabIndex="0"
                  >
                    {isUser
                      ? Translations.register.company
                      : Translations.register.user}
                  </b>
                </div>
              </div>
              <DownloadStore />
            </div>
          </div>
        </section>
        <BaseFooter className={"custom-container"} />
      </div>
    );
  }

  //logout user
  componentDidMount = () => {
    Auth.logoutUser();
  };

  handleUserLogin = () => {
    this.setState({ isUser: !this.state.isUser });
  };

  formValid = () => {
    const errors = {};
    let isFormValid = true;
    const { form } = this.state;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (form.username.length === 0) {
      errors.username = Translations.register.username_required;
      isFormValid = false;
    }
    if (form.password.length === 0) {
      errors.password = Translations.register.password_required;
      isFormValid = false;
    }
    if (form.password.length === 0) {
      errors.email = Translations.register.email_required;
      isFormValid = false;
    }
    const isValidemail = emailRegex.test(form.email);
    if (!isValidemail) {
      isFormValid = false;
      errors.email = Translations.register.email_valid;
    }
    if (form.password.length === 0) {
      errors.repeat_password = Translations.register.password_required;
      isFormValid = false;
    }
    if (form.password.length === 0) {
      errors.password = Translations.register.password_required;
      isFormValid = false;
    }
    if (form.password !== form.repeat_password) {
      errors.repeat_password = Translations.register.password_match;
      isFormValid = false;
    }

    this.setState({ error: errors });
    return isFormValid;

    // if (form.userName.length === 0 || form.password.length === 0) {
    //   return false;
    // }

    // return isFormValid;
  };

  // handleChangeField which will be update every from value when change
  handleChangeField = event => {
    const { form } = this.state;
    form[event.values.name] = event.values.val;
    this.setState({ form });
    this.formValid();
  };

  // handelSubmit called when click on submit
  handleSubmit = e => {
    e.preventDefault();

    if (!this.formValid()) {
      return false;
    }
    const { form } = this.state;
    let username = form.username;
    username = username.toLowerCase();
    username = username.replace(/\s/g, "_");
    const data = {
      username,
      email: form.email,
      password: form.password,
      confirm_password: form.repeat_password
    };
    if (this.state.isUser) {
      data.gender = form.gender;
      data.userType = "creator";
    } else {
      data.userType = "company";
    }
    this.props.submitRegister(data).then(() => {
      Auth.logoutUser();
      const errors = {};
      if (
        this.props.registerData.error &&
        this.props.registerData.error.status === 400
      ) {
        errors.servererror = Translations.comman_error.server_error;
        this.setState({ error: errors });
      } else {
        this.props.history.push(routes.ROOT_ROUTE);
      }
    });
  };
}

Register.propTypes = {
  history: PropTypes.any,
  submitRegister: PropTypes.func.isRequired,
  submitCompanyRegister: PropTypes.func.isRequired,
  registerData: PropTypes.object
};

const mapStateToProps = state => ({
  registerData: state.registerData
});

const mapDispatchToProps = {
  submitRegister,
  submitCompanyRegister
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
