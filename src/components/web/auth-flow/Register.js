import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as routes from "../../../lib/constants/routes";
import * as images from "../../../lib/constants/images";
import { Translations } from "../../../lib/translations";
import { BaseHeader, BaseFooter, Cookies, DownloadStore } from "../common";
import { Text, RadioButton } from "../../ui-kit/CommonUIComponents";
import PropTypes from "prop-types";
import { submitRegister } from "../../../actions/register";
import { Auth } from "../../../auth";
import connect from "react-redux/es/connect/connect";

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
      },
      error: {}
    };
  }

  //logout user
  componentDidMount = () => {
    Auth.logoutUser();
  };

  formValid = () => {
    const errors = {};
    let isFormValid = true;
    const { form } = this.state;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (form.username.length === 0) {
      errors.username = "Username is required.";
      isFormValid = false;
    }
    if (form.password.length === 0) {
      errors.password = "Password is required.";
      isFormValid = false;
    }
    if (form.password.length === 0) {
      errors.email = "Email is required.";
      isFormValid = false;
    }
    const isValidemail = emailRegex.test(form.email);
    if (!isValidemail) {
      isFormValid = false;
      errors.email = "Email ID should be valid.";
    }
    if (form.password.length === 0) {
      errors.repeat_password = "Password is required.";
      isFormValid = false;
    }
    if (form.password.length === 0) {
      errors.password = "Password is required.";
      isFormValid = false;
    }
    if (form.password !== form.repeat_password) {
      errors.repeat_password = "Password is not matching.";
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
    console.log(this.state.form);
    this.formValid();
  };

  // handelSubmit called when click on submit
  handleSubmit = e => {
    e.preventDefault();

    if (!this.formValid()) {
      return false;
    }
    const { form } = this.state;
    const data = {
      username: form.username,
      email: form.email,
      name: "abc",
      gender: form.gender,
      password: form.password,
      repeatPassword: form.repeat_password
    };

    this.props.submitRegister(data).then(() => {
      Auth.logoutUser();
      const errors = {};
      if (
        this.props.registerData.error &&
        this.props.registerData.error.status === 400
      ) {
        errors.servererror = "Something went wrong";
        this.setState({ error: errors });
      } else {
        this.props.history.push(routes.ROOT_ROUTE);
      }
    });
  };

  render() {
    const { form } = this.state;

    return (
      <div className="login-process col-xs-12 no-padding">
        <BaseHeader />
        <section className="col-xs-12">
          <div className="custom-container">
            <div className="login-wrapper">
              <h3 className="text-center">{Translations.login.header}</h3>
              <p>{Translations.login.subheader}</p>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <span>{this.state.error.servererror}</span>
                  <Text
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
                  <span>{this.state.error.username}</span>
                </div>

                <div className="form-group">
                  <Text
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
                  <span>{this.state.error.email}</span>
                </div>

                <div className="form-group">
                  <Text
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
                  <span>{this.state.error.password}</span>
                </div>
                <div className="form-group">
                  <Text
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
                  <span>{this.state.error.repeat_password}</span>
                </div>
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
                      <label htmlFor="male">{Translations.register.male}</label>
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
                <div className="form-group">
                  <button className="blue_button" type="submit">
                    {Translations.register.register}
                  </button>
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
                  <b>{Translations.register.company}</b>
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
  history: PropTypes.any,
  submitRegister: PropTypes.func.isRequired,
  registerData: PropTypes.object
};

const mapStateToProps = state => ({
  registerData: state.registerData
});

const mapDispatchToProps = {
  submitRegister
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
