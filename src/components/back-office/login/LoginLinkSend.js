import React, { Component } from "react";
import { AdminHeader } from "../header";
import * as routes from "../../../lib/constants/routes";
import { generateOTP } from "../../../actions/login";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class LoginLinkSend extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.generateOTP().then(() => {
      if (this.props.loginData.user.success === true)
        this.props.history.push(routes.LOGIN_PASSWORD_ROUTE);
    });
  };
  render() {
    return (
      <div className="login-process">
        <AdminHeader />
        <section>
          <div className="custom-container">
            <div className="login-wrapper backoffice-login">
              <h3 className="text-center">Backoffice log in</h3>
              <p>Send password to admin´s email address. </p>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <button type="submit" className="blue_button">
                    Send
                  </button>
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
  generateOTP
};

LoginLinkSend.propTypes = {
  generateOTP: PropTypes.func.isRequired,
  loginData: PropTypes.object,
  history: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginLinkSend);
