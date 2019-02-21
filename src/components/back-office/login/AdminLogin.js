import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { AdminHeader } from "../header";
import { Auth } from "../../../auth";
import { submitAdminLogin } from "../../../actions/login";
import * as routes from "../../../lib/constants/routes";
import * as enumerations from "../../../lib/constants/enumerations";
import * as images from "../../../lib/constants/images";
import { Translations } from "../../../lib/translations";
import { InlineLoading, Input, Button } from "../../ui-kit";

class AdminLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      otp: "",
      errorMsg: ""
    };
  }

  render() {
    const { loginData } = this.props;
    const { errorMsg, otp } = this.state;
    return (
      <div className="login-process">
        <AdminHeader />
        <section className="main-section">
          <div className="custom-container">
            <div className="login-wrapper  backoffice-login">
              <h3 className="text-center">{Translations.admin_login.backoffice_login}</h3>
              <p>{Translations.admin_login.enter_password} </p>
              {errorMsg && <p> {errorMsg} </p>}
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <Input
                    type="password"
                    name="otp"
                    className="form-control"
                    id="otp"
                    value={otp}
                    onChange={this.getUserEnterPassword}
                    placeholder={Translations.placeholders.password}
                  />

                  {otp && otp.length === 0 ? (
                    <img src={images.error} alt={"error"} />
                  ) : (
                      <img src={images.checked} alt={"checked"} />
                    )}
                </div>
                <div className="form-group">
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
            </div>
          </div>
        </section>
      </div>
    );
  }

  //logout user
  componentDidMount = () => {
    Auth.logoutAdmin();
  };

  /**
   * getUserEnterPassword
   */
  getUserEnterPassword = e => {
    this.setState({ otp: e.values.val });
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

    let root_route;
    this.props.submitAdminLogin({ otp }).then(() => {
      console.log('this.props.loginData.user ', this.props.loginData.user);
      console.log('enumerations.adminRank.rank2 ', enumerations.adminRank.rank2);
      if (this.props.loginData && this.props.loginData.user && this.props.loginData.user.success === true)
        if (this.props.loginData.user.data.role === enumerations.adminRank.rank2) {
          root_route = routes.BACK_OFFICE_CAMPAIGNS_ROUTE;
        }
        else if (this.props.loginData.user.data.role === enumerations.adminRank.rank3) {
          root_route = routes.BACK_OFFICE_REPORTED_IMAGES_ROUTE;
        }
        else {
          root_route = routes.BACK_OFFICE_ROOT_ROUTE;
        }
      this.props.history.push(root_route);
      if (this.props.loginData && this.props.loginData.error && this.props.loginData.error.data && this.props.loginData.error.data.success === false)
        this.setState({ errorMsg: this.props.loginData.error.data.message });
    });
  };


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
