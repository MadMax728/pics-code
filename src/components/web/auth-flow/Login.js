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
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: ""
    };
  }

  /**
   * getUserEnteredUserName
   */
  getUserEnteredUserName = e => {
    e.preventDefault();
    this.setState({ userName: e.target.value });
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
    const { userName, password } = this.state;

    if (userName.length === 0 || password.length === 0) {
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    if (!this.formValid()) {
      return false;
    }

    const { userName, password } = this.state;

    this.props.submitLogin({ email: userName, password: password });
    this.props.history.push(routes.ROOT_ROUTE);
  };

  render() {
    const { loginData } = this.props;
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
                    value={this.state.userName}
                    onChange={this.getUserEnteredUserName}
                    placeholder={Translations.placeholders.username_email}
                  />
                  {this.state.userName.length > 0 ? (
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
                    value={this.state.password}
                    onChange={this.getUserEnterPassword}
                    placeholder={Translations.placeholders.password}
                  />
                  {this.state.password.length > 0 ? (
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
                  {!loginData || !loginData.isLoading ? (
                    <button type="submit" className="blue_button">
                      {Translations.login.login}
                    </button>
                  ) : (
                    <InlineLoading />
                  )}
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

const mapStateToProps = state => ({
  loginData: state.loginData
});

const mapDispatchToProps = {
  submitLogin
};

Login.propTypes = {
  submitLogin: PropTypes.func.isRequired,
  loginData: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
