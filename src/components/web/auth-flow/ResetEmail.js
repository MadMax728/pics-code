import React, { Component } from "react";
import * as images from "../../../lib/constants/images";
import * as routes from "../../../lib/constants/routes";
import { Translations } from "../../../lib/translations";
import { BaseHeader, BaseFooter } from "../common";
import PropTypes from "prop-types";
import { submitResetPassword } from "../../../actions/forgotPassword";
import { submitLogin } from "../../../actions";
import connect from "react-redux/es/connect/connect";
import { Auth } from "../../../auth";
import * as userService from "../../../services/userService";
import { Redirect } from "react-router";

class ResetMail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        email: ""
      },
      error: {}
    };
  }
  //logout user
  componentDidMount = () => {
    Auth.logoutUser();
  };

  // handleChangeField which will be update every from value when change
  handleChangeField = event => {
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
    console.log(this.state.form);
    this.formValid();
  };

  formValid = () => {
    const errors = {};
    let isFormValid = true;
    const { form } = this.state;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (form.email.length === 0) {
      errors.email = "Email is required.";
      isFormValid = false;
    }
    const isValidemail = emailRegex.test(form.email);
    if (!isValidemail) {
      isFormValid = false;
      errors.email = "Email ID should be valid.";
    }
    this.setState({ error: errors });
    return isFormValid;

    // const { form } = this.state;
    //
    // if (form.email.length === 0) {
    //   return false;
    // }
    //
    // return true;
  };

  // handelSubmit called when click on submit
  handleSubmit = e => {
    e.preventDefault();
    if (!this.formValid()) {
      return false;
    }
    const data = {
      email: this.state.form.email
    };
    this.props.submitResetPassword(data).then(res => {
      const errors = {};
      if (
        this.props.resetPasswordData.error &&
        this.props.resetPasswordData.error.status === 400
      ) {
        errors.servererror = "Something went wrong";
        this.setState({ error: errors });
      } else {
        this.props.history.push(routes.FORGOT_PASSWORD);
      }
    });
  };

  render() {
    const { form } = this.state;
    return (
      <div className="login-process">
        <BaseHeader />
        <section>
          <div className="custom-container">
            <div className="login-wrapper">
              <h3 className="text-center">{Translations.reset_email.header}</h3>
              <p>{Translations.reset_email.subheader}</p>
              <form>
                <span className="error-msg highlight">{this.state.error.servererror}</span>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder={Translations.register.email}
                    name="email"
                    value={form.email ? form.email : ""}
                    onChange={this.handleChangeField}
                  />
                  {form.email.length === 0 ? (
                    <img src={images.error} alt={"error"} />
                  ) : (
                    <img src={images.checked} alt={"checked"} />
                  )}
                  <span className="error-msg highlight">{this.state.error.email}</span>
                </div>
                <div className="form-group">
                  <button className="blue_button" onClick={this.handleSubmit}>
                    {Translations.register.send}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <BaseFooter className={"custom-container"} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  resetPasswordData: state.resetPasswordData
});

const mapDispatchToProps = {
  submitResetPassword
};

ResetMail.propTypes = {
  submitResetPassword: PropTypes.func.isRequired,
  resetPasswordData: PropTypes.object,
  history: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetMail);
