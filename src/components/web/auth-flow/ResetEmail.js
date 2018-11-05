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
      }
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
  };

  // handelSubmit called when click on submit
  handleSubmit = e => {
    e.preventDefault();
    let data = {
      email: this.state.form.email
    };
    this.props.submitResetPassword(data).then(res => {
      Auth.logoutUser();
      this.props.history.push(routes.ROOT_ROUTE);
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
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    name="email"
                    value={form.email ? form.email : ""}
                    onChange={this.handleChangeField}
                  />
                  {form.email.length === 0 ? (
                    <img src={images.error} alt={"error"} />
                  ) : (
                    <img src={images.checked} alt={"checked"} />
                  )}
                </div>
                <div className="form-group">
                  <button className="blue_button" onClick={this.handleSubmit}>
                    Send
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
