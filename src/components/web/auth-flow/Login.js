import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { submitLogin } from "../../../actions/login";
import { InlineLoading, Input, Button, ErrorSpan } from "../../ui-kit";
import * as images from "../../../lib/constants/images";
import * as routes from "../../../lib/constants/routes";
import { Translations } from "../../../lib/translations";
import { BaseHeader, BaseFooter, DownloadStore } from "../common";
import { Auth } from "../../../auth";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        username: "",
        password: ""
      },
      error: {}
    };
  }

  render() {
    const { loginData } = this.props;
    const { form, error } = this.state;
    return (
      <div className="login-process">
        <BaseHeader />
        <section>
          <div className="custom-container">
            <div className="login-wrapper">
              <h3 className="text-center">{Translations.login.header}</h3>
              <p>{Translations.login.subheader}</p>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <ErrorSpan value={error.servererror} />
                </div>
                <div className="form-group">
                  <Input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder={Translations.placeholders.username_email}
                    value={form.username? form.username : ""}
                    onChange={this.handleChangeField}
                  />
                  {form.username.length > 0 ? (
                    <img src={images.checked} alt={"checked"} />
                  ) : (
                    <img src={images.error} alt={"error"} />
                  )}
                  <ErrorSpan value={error.username} />
                </div>
                <div className="form-group">
                  <Input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder={Translations.placeholders.password}
                    value={form.password? form.password : ""}
                    onChange={this.handleChangeField}
                  />
                  {form.password.length > 0 ? (
                    <img src={images.checked} alt={"checked"} />
                  ) : (
                    <img src={images.error} alt={"error"} />
                  )}
                  <ErrorSpan value={error.password} />
                </div>
                <div className="form-group">
                  <Link to={routes.RESET_EMAIL}>
                    {Translations.login.forgot_password}
                  </Link>
                </div>
                <div className="form-group marBtm0">
                  {loginData && loginData.isLoading ? (
                    <InlineLoading />
                  ) : (
                    <Button
                      type="submit"
                      className="blue_button"
                      text={Translations.login.login}
                    />
                  )}
                </div>
              </form>
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

  /**
   * formValid
   */
  formValid = () => {
    const errors = {};
    let isFormValid = true;
    const { form } = this.state;

    if (form.username.length === 0) {
      errors.username = Translations.login.username_required;
      isFormValid = false;
    }
    if (form.password.length === 0) {
      errors.password = Translations.login.password_required;
      isFormValid = false;
    }
    this.setState({ error: errors });
    return isFormValid;

    // if (form.username.length === 0 || form.password.length === 0) {
    //   return false;
    // }

    // return isFormValid;
  };

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
    this.props
      .submitLogin({ email: form.username, password: form.password })
      .then(() => {
        const errors = {};
        if (
          this.props.loginData.error &&
          this.props.loginData.error.status === 400
        ) {
          errors.servererror = Translations.login.invalid_credentials;
          this.setState({ error: errors });
        } else {
          this.props.history.push(routes.ROOT_ROUTE);
        }
      });
  };

}

const mapStateToProps = state => ({
  loginData: state.loginData
});

const mapDispatchToProps = {
  submitLogin
};

Login.propTypes = {
  submitLogin: PropTypes.func.isRequired,
  loginData: PropTypes.object,
  history: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
