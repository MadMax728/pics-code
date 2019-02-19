import React, { Component } from "react";
import { AdminHeader } from "../header";
import * as routes from "../../../lib/constants/routes";
import { generateOTP } from "../../../actions/login";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import InlineLoading from "../../ui-kit/loading-indicator/InlineLoading";
import { Button } from "../../ui-kit";
import { Translations } from "../../../lib/translations";

class LoginLinkSend extends Component {
  render() {
    const { isLoading } = this.props;
    return (
      <div className="login-process">
        <AdminHeader />
        {isLoading && <InlineLoading />}
        <section className="main-section">
          <div className="custom-container">
            <div className="login-wrapper bkoffice-wrapper backoffice-login">
              <h3 className="text-center">{Translations.admin_login.backoffice_login}</h3>
              <p>{Translations.admin_login.send_password} </p>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <Button type="submit" className="blue_button" text={Translations.admin_login.send} />
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.generateOTP().then(() => {
      if (this.props.loginData.user.success === true)
        this.props.history.push(routes.LOGIN_PASSWORD_ROUTE);
    });
  };

}

const mapStateToProps = state => ({
  loginData: state.loginData,
  isLoading: state.loginData.isLoading
});

const mapDispatchToProps = {
  generateOTP
};

LoginLinkSend.propTypes = {
  generateOTP: PropTypes.func.isRequired,
  loginData: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  history: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginLinkSend);
