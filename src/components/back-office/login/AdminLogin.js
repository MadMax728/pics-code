import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { AdminHeader } from "../header";
import { Auth } from "../../../auth";
import { submitAdminLogin } from "../../../actions/login";
import * as routes from "../../../lib/constants/routes";
import * as images from "../../../lib/constants/images";
import { Translations } from "../../../lib/translations";
import { InlineLoading } from "../../ui-kit";

class AdminLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: ""
    };
  }

  //logout user
  componentDidMount = () => {
    Auth.logoutAdmin();
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
    const { password } = this.state;

    if (password.length === 0) {
      return false;
    }

    return true;
  };

  /**
   * Handle submit
   */
  handleSubmit = event => {
    if (!this.formValid()) {
      return false;
    }

    const { password } = this.state;

    this.props.submitAdminLogin({ password }).then(() => {
      this.props.history.push(routes.BACK_OFFICE_ROOT_ROUTE);
    });
  };

  render() {
    const { loginData } = this.props;
    return (
      <div className="login-process">
        <AdminHeader />
        <section>
          <div className="custom-container">
            <div className="login-wrapper backoffice-login">
              <h3 className="text-center">Backoffice log in</h3>
              <p>Please enter your password here. </p>
              <form>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={this.state.password}
                    onChange={this.getUserEnterPassword}
                    placeholder={Translations.placeholders.password}
                  />
                  <img src={images.error} alt={"error"} />
                </div>
                <div className="form-group">
                  {loginData && loginData.isLoading ? (
                    <InlineLoading />
                  ) : (
                    <button
                      type="button"
                      onClick={this.handleSubmit}
                      className="blue_button"
                    >
                      {Translations.login.login}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginData: state.loginData
});

const mapDispatchToProps = {
  submitAdminLogin
};

AdminLogin.propTypes = {
  submitAdminLogin: PropTypes.func.isRequired,
  loginData: PropTypes.object,
  history: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminLogin);
