import { connect } from "react-redux";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { submitLogin } from "../../../actions/login";
import { InlineLoading } from "../../ui-kit";
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
        userName: "",
        password: ""
      },
      error: {}
    };
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

    if (form.userName.length === 0) {
      errors.username = "Username is required.";
      isFormValid = false;
    }
    if (form.password.length === 0) {
      errors.password = "Password is required.";
      isFormValid = false;
    }
    this.setState({ error: errors });
    return isFormValid;

    // if (form.userName.length === 0 || form.password.length === 0) {
    //   return false;
    // }

    // return isFormValid;
  };

  handleChangeField = event => {
    const { form } = this.state;
    form[event.target.name] = event.target.value;
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
      .submitLogin({ email: form.userName, password: form.password })
      .then(res => {
        const errors = {};
        if (
          this.props.loginData.error &&
          this.props.loginData.error.status === 400
        ) {
          errors.servererror = "Username or password is wrong.";
          this.setState({ error: errors });
        } else {
          this.props.history.push(routes.ROOT_ROUTE);
        }
      });
  };

  render() {
    const { loginData } = this.props;
    const { form } = this.state;
    return (
      <div className="login-process col-xs-12 no-padding">
        <BaseHeader />
        <section>
          <div className="custom-container">
            <div className="login-wrapper">
              <h3 className="text-center">{Translations.login.header}</h3>
              <p>{Translations.login.subheader}</p>
              <form onSubmit={this.handleSubmit}>
                <span>{this.state.error.servererror}</span>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="text"
                    name="userName"
                    value={form.userName}
                    onChange={this.handleChangeField}
                    placeholder={Translations.placeholders.username_email}
                  />
                  {form.userName.length > 0 ? (
                    <img src={images.checked} alt={"checked"} />
                  ) : (
                    <img src={images.error} alt={"error"} />
                  )}
                  <span>{this.state.error.username}</span>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    autoComplete="password"
                    name="password"
                    value={form.password}
                    onChange={this.handleChangeField}
                    placeholder={Translations.placeholders.password}
                  />
                  {form.password.length > 0 ? (
                    <img src={images.checked} alt={"checked"} />
                  ) : (
                    <img src={images.error} alt={"error"} />
                  )}
                  <span>{this.state.error.password}</span>
                </div>
                <div className="form-group">
                  <Link to={routes.RESET_EMAIL}>
                    {Translations.login.forgot_password}
                  </Link>
                </div>
                <div className="form-group">
                  {loginData && loginData.isLoading ? (
                    <InlineLoading />
                  ) : (
                    <button
                      type="submit"
                      // onClick={this.handleSubmit}
                      className="blue_button"
                    >
                      {Translations.login.login}
                    </button>
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
