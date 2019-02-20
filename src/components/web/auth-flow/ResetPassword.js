import React, { Component } from "react";
import * as images from "../../../lib/constants/images";
import * as routes from "../../../lib/constants/routes";
import { Translations } from "../../../lib/translations";
import PropTypes from "prop-types";
import {
  setNewPassword
} from "../../../actions/forgotPassword";
import { Auth } from "../../../auth";
import { BaseHeader, BaseFooter, DownloadStore } from "../common";
import { connect } from "react-redux";
import { Input, Button } from "../../ui-kit";

class ResetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        password: "",
        repeat_password: ""
      }
    };
  }

  render() {
    const { form } = this.state;
    return (
      <div className="login-process">
        <BaseHeader />
        <section>
          <div className="custom-container">
            <div className="login-wrapper">
              <h3 className="text-center">
                {Translations.reset_password.header}
              </h3>
              <p>{Translations.reset_password.subheader}</p>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <Input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder={Translations.reset_password.enetr_password}
                    autoComplete="Password"
                    name="password"
                    value={form.password ? form.password : ""}
                    onChange={this.handleChangeField}
                  />

                  {form.password.length === 0 ? (
                    <img src={images.error} alt={"error"} />
                  ) : (
                      <img src={images.checked} alt={"checked"} />
                    )}
                </div>
                <div className="form-group">
                  <Input
                    type="password"
                    className="form-control"
                    id="new-password"
                    placeholder={Translations.reset_password.repeat_password}
                    autoComplete="Repeat Password"
                    name="repeat_password"
                    value={form.repeat_password ? form.repeat_password : ""}
                    onChange={this.handleChangeField}
                  />
                  {form.repeat_password.length === 0 ||
                    form.password !== form.repeat_password ? (
                      <img src={images.error} alt={"error"} />
                    ) : (
                      <img src={images.checked} alt={"checked"} />
                    )}
                </div>
                <div className="form-group">
                  <Button 
                    className="blue_button" 
                    text={Translations.reset_password.send}
                  />
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

  //logout user
  componentDidMount = () => {
    Auth.logoutUser();
  };

  // handleChangeField which will be update every from value when change
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
    const data = {
      password: this.state.form.password,
      repeatPassword: this.state.form.repeat_password
    };
    this.props.setNewPassword(data).then(() => {
      this.props.history.push(routes.ROOT_ROUTE);
    });
  };

  /**
   * formValid
   */
  formValid = () => {
    const { form } = this.state;

    if (
      form.repeat_password.length === 0 ||
      form.password.length === 0 ||
      form.repeat_password !== form.password
    ) {
      return false;
    }

    return true;
  };

}

const mapStateToProps = state => ({
  newPasswordData: state.newPasswordData
});

const mapDispatchToProps = {
  setNewPassword
};

ResetPassword.propTypes = {
  setNewPassword: PropTypes.func.isRequired,
  // newPasswordData: PropTypes.object,
  history: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPassword);
