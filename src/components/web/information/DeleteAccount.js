import React, { Component } from "react";
import * as images from "../../../lib/constants/images";
import * as routes from "../../../lib/constants/routes";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSearch } from "../../../actions";
import { Translations } from "../../../lib/translations";
import {
  Input,
  Label,
  ErrorSpan,
  Button,
  Textarea,
  InlineLoading
} from "../../ui-kit";
import * as inputMask from "../../../lib/constants/inputMasks";

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordLength = inputMask.PASSWORD_LENGTH;

class DeleteAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      delete_account_form: { username: "", password: "", repeat_password: "" },
      errors: {}
    };
  }

  render() {
    const { delete_account_form, errors } = this.state;
    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="cms-middle-section">
          <div className="panel-wrapper">
            <div className="content-wrapper">
              <div className="title">
                {Translations.service_delete_account.title}
              </div>
              <p>{Translations.service_delete_account.content} </p>
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <Label
                        htmlFor={Translations.service_delete_account.username}
                        value={Translations.service_delete_account.username}
                      />
                      <Input
                        type="email"
                        className="form-control"
                        id="username"
                        name="username"
                        autoComplete="username"
                        value={
                          delete_account_form.username
                            ? delete_account_form.username
                            : ""
                        }
                        onChange={this.handleFieldChangeUsername}
                      />
                      {delete_account_form.username.length > 0 ? (
                        <img src={images.checked} alt={"checked"} />
                      ) : (
                        <img src={images.error} alt={"error"} />
                      )}
                      <ErrorSpan value={errors.username} />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <Label
                        htmlFor={Translations.service_delete_account.password}
                        value={Translations.service_delete_account.password}
                      />
                      <Input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        autoComplete="password"
                        value={
                          delete_account_form.password
                            ? delete_account_form.password
                            : ""
                        }
                        onChange={this.handleFieldChangePassword}
                      />
                      {delete_account_form.password.length > 0 ? (
                        <img src={images.checked} alt={"checked"} />
                      ) : (
                        <img src={images.error} alt={"error"} />
                      )}
                      <ErrorSpan value={errors.password} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <Label
                        htmlFor={
                          Translations.service_delete_account.repeat_password
                        }
                        value={
                          Translations.service_delete_account.repeat_password
                        }
                      />
                      <Input
                        type="password"
                        className="form-control"
                        id="repeat_password"
                        name="repeat_password"
                        autoComplete="repeat_password"
                        value={
                          delete_account_form.repeat_password
                            ? delete_account_form.repeat_password
                            : ""
                        }
                        onChange={this.handleFieldChangePassword}
                      />
                      {delete_account_form.repeat_password.length > 0 ? (
                        <img src={images.checked} alt={"checked"} />
                      ) : (
                        <img src={images.error} alt={"error"} />
                      )}
                      <ErrorSpan value={errors.repeat_password} />
                    </div>
                  </div>
                  <div className="col-sm-6 margin-top-25">
                    {/* <div className="form-group capcha-wrapper">
                      <img
                        src={images.capcha}
                        alt={"capcha"}
                        className="capcha-img"
                      />
                    </div> */}
                    <div className="form-group button_wrapper col-md-12 col-sm-6">
                      <Button
                        className="black_button wid120"
                        onClick={this.handleSave}
                        text={
                          Translations.service_delete_account.delete_account
                        }
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.searchData.searchKeyword) {
      this.props.getSearch("");
    }
    if (
      nextProps.searchData.searchKeyword !== this.props.searchData.searchKeyword
    ) {
      const searchKeyword = nextProps.searchData.searchKeyword;
      this.props.history.push(routes.ROOT_ROUTE + "?search=" + searchKeyword);
    }
  };

  handleFieldChangeUsername = event => {
    const { delete_account_form } = this.state;
    delete_account_form[event.values.name] = event.values.val;
    this.setState({ delete_account_form });
    this.formValid();
  };

  handleFieldChangePassword = event => {
    const { delete_account_form } = this.state;
    delete_account_form[event.values.name] = event.values.val;
    this.setState({ delete_account_form });
    this.formValid();
  };

  formValid = () => {
    const errors = {};
    let isFormValid = true;
    const { delete_account_form } = this.state;

    if (delete_account_form.username.length === 0) {
      errors.username =
        Translations.service_delete_account.username_is_required;
      isFormValid = false;
    }

    const isValidEmail = emailRegex.test(delete_account_form.username);
    if (!isValidEmail) {
      isFormValid = false;
      errors.username =
        Translations.service_delete_account.email_should_be_valid;
    }

    if (delete_account_form.password.length === 0) {
      errors.password = Translations.service_delete_account.password_required;
      isFormValid = false;
    }

    if (
      delete_account_form.password.length > 0 &&
      delete_account_form.password.length < passwordLength
    ) {
      errors.password =
        Translations.service_delete_account.password_length_error;
      isFormValid = false;
    }

    if (delete_account_form.repeat_password.length === 0) {
      errors.repeat_password =
        Translations.service_delete_account.repeat_password_is_required;
      isFormValid = false;
    }

    if (
      delete_account_form.repeat_password.length > 0 &&
      delete_account_form.repeat_password.length < passwordLength
    ) {
      errors.repeat_password =
        Translations.service_delete_account.password_length_error;
      isFormValid = false;
    }

    if (
      delete_account_form.repeat_password.length > 0 &&
      delete_account_form.password !== delete_account_form.repeat_password
    ) {
      errors.repeat_password =
        Translations.service_delete_account.password_is_not_matching;
      isFormValid = false;
    }

    this.setState({ errors });
    return isFormValid;
  };

  handleSave = e => {
    e.preventDefault();
    if (!this.formValid()) {
      return false;
    }
    const { delete_account_form } = this.state;
    //console.log(delete_account_form);
  };
}

const mapStateToProps = state => ({
  searchData: state.searchData
});

const mapDispatchToProps = {
  getSearch
};

DeleteAccount.propTypes = {
  searchData: PropTypes.any,
  history: PropTypes.any,
  getSearch: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteAccount);
