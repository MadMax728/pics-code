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
      }
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
    const { form } = this.state;

    if (form.userName.length === 0 || form.password.length === 0) {
      return false;
    }

    return true;
  };

  handleChangeField = event => {
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
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
      .then(() => {
        this.props.history.push(routes.ROOT_ROUTE);
      });
  };

  render() {
    const { loginData } = this.props;
    const { form } = this.state;

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
                  <input
                    type="email"
                    className="form-control"
                    id="email"
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
