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
      otp: "",
      errorMsg: "",
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
    this.setState({ otp: e.target.value });
  };

  /**
   * formValid
   */
  formValid = () => {
    const { otp } = this.state;

    if (otp.length === 0) {
      return false;
    }

    return true;
  };

  /**
   * Handle submit
   */
  handleSubmit = event => {
    event.preventDefault();
    if (!this.formValid()) {
      return false;
    }

    const { otp } = this.state;

    this.props.submitAdminLogin({ otp }).then(() => {
      if (this.props.loginData && this.props.loginData.user && this.props.loginData.user.success === true)
        this.props.history.push(routes.BACK_OFFICE_ROOT_ROUTE);
      if (this.props.loginData && this.props.loginData.error && this.props.loginData.error.data && this.props.loginData.error.data.success === false)
        this.setState({errorMsg: this.props.loginData.error.data.message});
    });
  };

  render() {
    const { loginData } = this.props;
    const { errorMsg } = this.state;
    return (
      <div className="login-process">
        <AdminHeader />
        <section>
          <div className="custom-container">
            <div className="login-wrapper backoffice-login">
              <h3 className="text-center">Backoffice log in</h3>
              <p>Please enter your password here. </p>
              {errorMsg && <p> {errorMsg} </p>}
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="otp"
                    value={this.state.otp}
                    onChange={this.getUserEnterPassword}
                    placeholder={Translations.placeholders.password}
                  />

                  {this.state.otp.length === 0 ? (
                    <img src={images.error} alt={"error"} />
                  ) : (
                    <img src={images.checked} alt={"checked"} />
                  )}
                </div>
                <div className="form-group">
                  {loginData && loginData.isLoading ? (
                    <InlineLoading />
                  ) : (
                    <button
                      type="submit"
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
