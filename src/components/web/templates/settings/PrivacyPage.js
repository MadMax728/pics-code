import React, { Component } from "react";
import * as images from "../../../../lib/constants/images";
import { Text } from "../../../ui-kit/CommonUIComponents";
import { Translations } from "../../../../lib/translations";
import * as inputMask from "../../../../lib/constants/inputMasks";
import { Auth } from "../../../../auth";
import * as routes from "../../../../lib/constants/routes";
import Switch from "react-switch";
import {
  setProfilePrivacy,
  setSocialShare,
  setProfilePersonalizedAdvertise,
  setChangeEmail,
  setChangePassword,
  setChangeInvoiceAddress,
  deleteSearchHistory,
  deactivateAccount,
  getUser,
  getSearch
} from "../../../../actions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { modalType } from "../../../../lib/constants/enumerations";

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const passwordLength = inputMask.PASSWORD_LENGTH;
const storage = Auth.extractJwtFromStorage();
let userInfo = null;
if (storage) {
  userInfo = JSON.parse(storage.userInfo);
}
const switchOnColor = "#86d3ff";
const switchOnHandleColor = "#2693e6";
const switchUncheckedIcon = false;
const switchCheckedIcon = false;
const switchBoxShadow = "0px 1px 5px rgba(0, 0, 0, 0.6)";
const switchActiveBoxShadow = "0px 0px 1px 10px rgba(0, 0, 0, 0.2)";

class PrivacyPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPrivate: false,
      isPersonalized: false,
      isSocialShare: false,
      change_email_form: {
        current_email: "",
        new_email: ""
      },
      change_password_form: {
        current_password: "",
        new_password: "",
        repeat_password: ""
      },
      change_invoicing_address_form: {
        invoice_recipient: "",
        street_number: "",
        postal_code: "",
        city: "",
        country: "",
        vat_identification_number: ""
      },
      userId: "",
      change_email_form_error: {},
      change_password_form_error: {},
      error: {},
      isLoading: "",
      isSearch: ""
    };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    const storage = Auth.extractJwtFromStorage();
    let userInfo = null;
    if (storage) {
      userInfo = JSON.parse(storage.userInfo);
    }
    if (userInfo) {
      this.setState({ userId: userInfo.id, isLoading: true });
    }
    const data = {
      username: userInfo.username
    };
    this.props.getUser(data).then(() => {
      this.setDataOnLoad();
    });
  };

  componentWillReceiveProps = nextProps => {
    // To to test this condition 
    // if (nextProps.searchData.searchKeyword) {
    //   this.props.getSearch("");
    // }
    if (
      nextProps.searchData.searchKeyword !== this.props.searchData.searchKeyword
    ) {
      const searchKeyword = nextProps.searchData.searchKeyword;
      this.props.history.push(routes.ROOT_ROUTE + "?search=" + searchKeyword);
    }
  };

  onKeyPressHandler = () => {};

  setDataOnLoad = () => {
    if (this.props.userDataByUsername.user) {
      const userData = this.props.userDataByUsername.user.data;
      this.setState({
        change_email_form: {
          current_email: userData.email,
          new_email: ""
        },
        change_invoicing_address_form: {
          invoice_recipient: userData.userFullAddress
            ? userData.userFullAddress.invoiceRecipient
            : "",
          street_number: userData.userFullAddress
            ? userData.userFullAddress.street
            : "",
          postal_code: userData.userFullAddress
            ? userData.userFullAddress.postalCode
            : "",
          city: userData.userFullAddress ? userData.userFullAddress.city : "",
          country: userData.userFullAddress
            ? userData.userFullAddress.country
            : "",
          vat_identification_number: userData.userFullAddress
            ? userData.userFullAddress.VATNO
            : ""
        },
        isPrivate: userData.isPrivate,
        isPersonalized: userData.isAdvertise,
        isSocialShare: userData.isSocialShare,
        isLoading: false
      });
    }
  };

  hanldeIsPrivate = checkedEvent => {
    const isPrivate = checkedEvent;
    this.setState({ isPrivate });
    const paramData = { isPrivate };
    this.props.setProfilePrivacy(paramData).then(() => {
      const errors = {};
      if (
        this.props.profilePrivacyData.error &&
        this.props.profilePrivacyData.error.status === 400
      ) {
        errors.servererror = Translations.privacy.server_error;
        this.setState({ error: errors });
      } else if (userInfo) {
        const data = {
          username: userInfo.username
        };
        this.props.getUser(data).then(() => {
          this.setDataOnLoad();
        });
      }
    });
  };

  hanldeIsSocialShare = checkedEvent => {
    const isSocialShare = checkedEvent;
    this.setState({ isSocialShare });
    const paramData = { isSocialShare };
    this.props.setSocialShare(paramData).then(() => {
      const errors = {};
      if (
        this.props.profilePrivacyData.error &&
        this.props.profilePrivacyData.error.status === 400
      ) {
        errors.servererror = Translations.privacy.server_error;
        this.setState({ error: errors });
      } else if (userInfo) {
        const data = {
          username: userInfo.username
        };
        this.props.getUser(data).then(() => {
          this.setDataOnLoad();
        });
      }
    });
  };

  hanldeIsPersonalized = checkedEvent => {
    const isPersonalized = checkedEvent;
    this.setState({ isPersonalized });
    const paramData = { isAdvertise: isPersonalized };
    this.props.setProfilePersonalizedAdvertise(paramData).then(() => {
      const errors = {};
      if (
        this.props.profilePrivacyData.error &&
        this.props.profilePrivacyData.error.status === 400
      ) {
        errors.servererror = Translations.privacy.server_error;
        this.setState({ error: errors });
      } else if (userInfo) {
        const data = { username: userInfo.username };
        this.props.getUser(data).then(() => {
          this.setDataOnLoad();
        });
      }
    });
  };

  formValidChangeEmail = () => {
    const changeEmailErrors = {};
    let isFormValid = true;
    const { change_email_form } = this.state;

    if (change_email_form.current_email.length === 0) {
      changeEmailErrors.current_email =
        Translations.privacy.Current_Email_is_required;
      isFormValid = false;
    }
    const isValidCurrentEmail = emailRegex.test(
      change_email_form.current_email
    );
    if (!isValidCurrentEmail) {
      isFormValid = false;
      changeEmailErrors.current_email =
        Translations.privacy.Email_should_be_valid;
    }

    if (change_email_form.new_email.length === 0) {
      changeEmailErrors.new_email = Translations.privacy.New_Email_is_required;
      isFormValid = false;
    }

    const isValidNewEmail = emailRegex.test(change_email_form.new_email);
    if (!isValidNewEmail) {
      isFormValid = false;
      changeEmailErrors.new_email = Translations.privacy.Email_should_be_valid;
    }
    this.setState({ change_email_form_error: changeEmailErrors });
    return isFormValid;
  };

  formValidChangePassword = () => {
    const changePasswordErrors = {};
    let isChangePasswordFormValid = true;
    const { change_password_form } = this.state;

    if (change_password_form.current_password.length === 0) {
      changePasswordErrors.current_password =
        Translations.privacy.Current_Password_is_required;
      isChangePasswordFormValid = false;
    }

    if (change_password_form.current_password.length < passwordLength) {
      changePasswordErrors.current_password =
        Translations.privacy.Password_Length_error;
      isChangePasswordFormValid = false;
    }

    if (change_password_form.new_password.length === 0) {
      changePasswordErrors.new_password =
        Translations.privacy.New_Password_is_required;
      isChangePasswordFormValid = false;
    }

    if (change_password_form.new_password.length < passwordLength) {
      changePasswordErrors.new_password =
        Translations.privacy.Password_Length_error;
      isChangePasswordFormValid = false;
    }

    if (change_password_form.repeat_password.length === 0) {
      changePasswordErrors.repeat_password =
        Translations.privacy.Repeat_Password_is_required;
      isChangePasswordFormValid = false;
    }

    if (
      change_password_form.new_password !== change_password_form.repeat_password
    ) {
      changePasswordErrors.repeat_password =
        Translations.privacy.Password_is_not_matching;
      isChangePasswordFormValid = false;
    }

    if (change_password_form.repeat_password.length < passwordLength) {
      changePasswordErrors.repeat_password =
        Translations.privacy.Password_Length_error;
      isChangePasswordFormValid = false;
    }

    this.setState({ change_password_form_error: changePasswordErrors });
    return isChangePasswordFormValid;
  };

  // handleFieldChangeEmail event
  handleFieldChangeEmail = event => {
    const { change_email_form } = this.state;
    change_email_form[event.values.name] = event.values.val;
    this.setState({ change_email_form });
    this.formValidChangeEmail();
  };

  // handleSaveChangeEmail called when click on submit
  handleSaveChangeEmail = e => {
    e.preventDefault();
    if (!this.formValidChangeEmail()) {
      return false;
    }
    const { change_email_form } = this.state;
    const changeEmailDataParams = {
      email: change_email_form.current_email,
      newEmail: change_email_form.new_email
    };
    this.props.setChangeEmail(changeEmailDataParams).then(() => {
      const changeEmailErrors = {};
      if (
        this.props.profilePrivacyData.error &&
        this.props.profilePrivacyData.error.status === 400
      ) {
        changeEmailErrors.servererror = Translations.privacy.server_error;
        this.setState({ change_email_form_error: changeEmailErrors });
      } else {
        this.props.history.push(routes.LOGOUT_ROUTE);
      }
    });
  };

  // handleFieldChangePassword event
  handleFieldChangePassword = event => {
    const { change_password_form } = this.state;
    change_password_form[event.values.name] = event.values.val;
    this.setState({ change_password_form });
    this.formValidChangePassword();
  };

  // handleSaveChangePassword called when click on submit
  handleSaveChangePassword = e => {
    e.preventDefault();
    if (!this.formValidChangePassword()) {
      return false;
    }
    const { change_password_form } = this.state;
    const changePasswordData = {
      password: change_password_form.current_password,
      newPassword: change_password_form.new_password
    };
    this.props.setChangePassword(changePasswordData).then(() => {
      const changePasswordErrors = {};
      if (
        this.props.profilePrivacyData.error &&
        this.props.profilePrivacyData.error.status === 400
      ) {
        changePasswordErrors.servererror = Translations.privacy.server_error;
        this.setState({
          change_password_form_error: changePasswordErrors
        });
      } else {
        this.props.history.push(routes.LOGOUT_ROUTE);
      }
    });
  };

  // handleFieldChangeInvoice event
  handleFieldChangeInvoice = event => {
    const { change_invoicing_address_form } = this.state;
    change_invoicing_address_form[event.values.name] = event.values.val;
    this.setState({ change_invoicing_address_form });
  };

  // handleSaveChangeInvoice called when click on submit
  handleSaveChangeInvoice = e => {
    e.preventDefault();
    const { change_invoicing_address_form } = this.state;
    const changeInvoiceAddressData = {
      invoiceRecipient: change_invoicing_address_form.invoice_recipient,
      street: change_invoicing_address_form.street_number,
      postalCode: change_invoicing_address_form.postal_code,
      city: change_invoicing_address_form.city,
      VATNO: change_invoicing_address_form.vat_identification_number,
      country: change_invoicing_address_form.country
    };
    this.props
      .setChangeInvoiceAddress({ address: changeInvoiceAddressData })
      .then(() => {
        const changeInvoiceAddressErrors = {};
        if (
          this.props.profilePrivacyData.error &&
          this.props.profilePrivacyData.error.status === 400
        ) {
          changeInvoiceAddressErrors.servererror =
            Translations.privacy.server_error;
          this.setState({
            change_password_form_error: changeInvoiceAddressErrors
          });
        } else if (userInfo) {
          const data = {
            username: userInfo.username
          };
          this.props.getUser(data).then(() => {
            this.setDataOnLoad();
          });
        }
      });
  };

  handleDeleteSearchHisory = e => {
    const paramData = { searchHistoryId: e.target.id };
    this.props.handleModalInfoShow(modalType.confirmation);
    // this.props.deleteSearchHistory(paramData); // API Call
  };

  handleDeactiveMyAccount = e => {
    const modalForValue = e.target.id;
    this.props.handleModalInfoShow(modalType.confirmation);
  };

  render() {
    const {
      change_email_form,
      change_password_form,
      change_invoicing_address_form,
      userId
    } = this.state;

    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="privacy-form">
          <form action="">
            <div className="form-title">
              {Translations.left_sidebar_settings.privacy}
            </div>

            <div className="form-subtitle">
              {Translations.privacy.limitations}
            </div>
            <div className="limitation-wrapper">
              <div className="row">
                <div className="col-sm-6">
                  {Translations.privacy.set_my_profile_to_private}
                </div>
                <div className="col-sm-6 text-right">
                  <div>
                    <span className="error-msg highlight">
                      {this.state.error.servererror}
                    </span>
                    <label className="switch" htmlFor={"Privacy"}>
                      <Switch
                        onChange={this.hanldeIsPrivate}
                        checked={this.state.isPrivate}
                        onColor={switchOnColor}
                        onHandleColor={switchOnHandleColor}
                        handleDiameter={25}
                        uncheckedIcon={switchUncheckedIcon}
                        checkedIcon={switchCheckedIcon}
                        boxShadow={switchBoxShadow}
                        activeBoxShadow={switchActiveBoxShadow}
                        height={25}
                        width={48}
                        className="react-switch"
                        id="material-switch"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  {Translations.privacy.social_share_function}
                </div>
                <div className="col-sm-6 text-right">
                  <div>
                    <label className="switch" htmlFor={"SocialShare"}>
                      <Switch
                        onChange={this.hanldeIsSocialShare}
                        checked={this.state.isSocialShare}
                        onColor={switchOnColor}
                        onHandleColor={switchOnHandleColor}
                        handleDiameter={25}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow={switchBoxShadow}
                        activeBoxShadow={switchActiveBoxShadow}
                        height={25}
                        width={48}
                        className="react-switch"
                        id="material-switch"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  {Translations.privacy.Personalized_advertising}
                </div>
                <div className="col-sm-6 text-right">
                  <label className="switch" htmlFor={"Personalized"}>
                    <Switch
                      onChange={this.hanldeIsPersonalized}
                      checked={this.state.isPersonalized}
                      onColor={switchOnColor}
                      onHandleColor={switchOnHandleColor}
                      handleDiameter={25}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      boxShadow={switchBoxShadow}
                      activeBoxShadow={switchActiveBoxShadow}
                      height={25}
                      width={48}
                      className="react-switch"
                      id="material-switch"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="form-subtitle">
              {Translations.privacy.Change_email}
            </div>
            <div className="change-email-wrapper">
              <div className="form-group">
                <label htmlFor="email">
                  {Translations.privacy.Current_Email}
                </label>
                <Text
                  type="email"
                  className="form-control"
                  id="current_email"
                  name="current_email"
                  autoComplete="current_email"
                  value={
                    change_email_form.current_email
                      ? change_email_form.current_email
                      : ""
                  }
                  onChange={this.handleFieldChangeEmail}
                />
                {change_email_form.current_email.length > 0 ? (
                  <img src={images.checked} alt={"checked"} />
                ) : (
                  <img src={images.error} alt={"error"} />
                )}
                <span className="error-msg form-field-error">
                  {this.state.change_email_form_error.current_email}
                </span>
              </div>
              <div className="form-group new-email">
                <label htmlFor="email">{Translations.privacy.New_Email}</label>
                <span className="error-msg pull-right">
                  {
                    Translations.privacy
                      .Please_confirm_this_change_in_your_email_account
                  }
                </span>
                <Text
                  type="email"
                  className="form-control"
                  id="new_email"
                  autoComplete="new_email"
                  name="new_email"
                  onChange={this.handleFieldChangeEmail}
                  value={
                    change_email_form.new_email
                      ? change_email_form.new_email
                      : ""
                  }
                />
                {change_email_form.new_email.length > 0 ? (
                  <img src={images.checked} alt={"checked"} />
                ) : (
                  <img src={images.error} alt={"error"} />
                )}
                <span className="error-msg form-field-error">
                  {this.state.change_email_form_error.new_email}
                </span>
                <span className="error-msg highlight">
                  {this.state.change_email_form_error.servererror}
                </span>
              </div>
              <div className="form-group">
                <button
                  className="black_button"
                  onClick={this.handleSaveChangeEmail}
                >
                  {Translations.privacy.save}
                </button>
              </div>
            </div>

            <div className="form-subtitle">
              {Translations.privacy.Change_Password}
            </div>
            <div className="change-password-wrapper">
              <div className="form-group">
                <label htmlFor="c-password">
                  {Translations.privacy.Current_Password}
                </label>
                <Text
                  type="password"
                  className="form-control"
                  id="current_password"
                  autoComplete="current_password"
                  name="current_password"
                  onChange={this.handleFieldChangePassword}
                  value={
                    change_password_form.current_password
                      ? change_password_form.current_password
                      : ""
                  }
                />
                {change_password_form.current_password.length > 0 ? (
                  <img src={images.checked} alt={"checked"} />
                ) : (
                  <img src={images.error} alt={"error"} />
                )}
                <span className="error-msg form-field-error">
                  {this.state.change_password_form_error.current_password}
                </span>
              </div>
              <div className="form-group">
                <label htmlFor="n-password">
                  {Translations.privacy.New_Password}
                </label>
                <Text
                  type="password"
                  className="form-control"
                  id="new_password"
                  autoComplete="new_password"
                  name="new_password"
                  value={
                    change_password_form.new_password
                      ? change_password_form.new_password
                      : ""
                  }
                  onChange={this.handleFieldChangePassword}
                />
                {change_password_form.new_password.length > 0 ? (
                  <img src={images.checked} alt={"checked"} />
                ) : (
                  <img src={images.error} alt={"error"} />
                )}
                <span className="error-msg form-field-error">
                  {this.state.change_password_form_error.new_password}
                </span>
              </div>
              <div className="form-group">
                <label htmlFor="r-password">
                  {Translations.privacy.Repeat_Password}
                </label>
                <Text
                  type="password"
                  className="form-control"
                  id="repeat_password"
                  name="repeat_password"
                  autoComplete="repeat_password"
                  value={
                    change_password_form.repeat_password
                      ? change_password_form.repeat_password
                      : ""
                  }
                  onChange={this.handleFieldChangePassword}
                />
                {change_password_form.repeat_password.length > 0 ? (
                  <img src={images.checked} alt={"checked"} />
                ) : (
                  <img src={images.error} alt={"error"} />
                )}
                <span className="error-msg form-field-error">
                  {this.state.change_password_form_error.repeat_password}
                </span>
              </div>
              <div className="form-group">
                <span className="error-msg highlight">
                  {this.state.change_password_form_error.servererror}
                </span>
                <button
                  className="black_button"
                  onClick={this.handleSaveChangePassword}
                >
                  {Translations.privacy.save}
                </button>
              </div>
            </div>

            <div className="form-subtitle">
              {Translations.privacy.Change_invoicing_address}
            </div>
            <div className="change-invoiceadd-wrapper">
              <div className="form-group">
                <label htmlFor="recipient">
                  {Translations.privacy.Invoice_recipient}
                </label>
                <Text
                  type="text"
                  className="form-control"
                  id="invoice_recipient"
                  name="invoice_recipient"
                  value={
                    change_invoicing_address_form.invoice_recipient
                      ? change_invoicing_address_form.invoice_recipient
                      : ""
                  }
                  onChange={this.handleFieldChangeInvoice}
                />
                {change_invoicing_address_form.invoice_recipient.length > 0 ? (
                  <img src={images.checked} alt={"checked1"} />
                ) : (
                  <img src={images.error} alt={"error1"} />
                )}
              </div>
              <div className="form-group">
                <label htmlFor="street">
                  {Translations.privacy.Street_number}
                </label>
                <Text
                  type="text"
                  className="form-control"
                  id="street_number"
                  name="street_number"
                  value={
                    change_invoicing_address_form.street_number
                      ? change_invoicing_address_form.street_number
                      : ""
                  }
                  onChange={this.handleFieldChangeInvoice}
                />
                {change_invoicing_address_form.street_number.length > 0 ? (
                  <img src={images.checked} alt={"checked"} />
                ) : (
                  <img src={images.error} alt={"error"} />
                )}
              </div>
              <div className="form-group">
                <label htmlFor="postal">
                  {Translations.privacy.Postal_code}
                </label>
                <Text
                  type="text"
                  className="form-control"
                  id="postal_code"
                  name="postal_code"
                  value={
                    change_invoicing_address_form.postal_code
                      ? change_invoicing_address_form.postal_code
                      : ""
                  }
                  onChange={this.handleFieldChangeInvoice}
                />
                {change_invoicing_address_form.postal_code.length > 0 ? (
                  <img src={images.checked} alt={"checked"} />
                ) : (
                  <img src={images.error} alt={"error"} />
                )}
              </div>
              <div className="col-2">
                <div className="col-sm-6 padding-r-5">
                  <div className="form-group">
                    <label htmlFor="city">{Translations.privacy.city}</label>
                    <Text
                      type="text"
                      className="form-control"
                      id="city"
                      name="city"
                      onChange={this.handleFieldChangeInvoice}
                      value={
                        change_invoicing_address_form.city
                          ? change_invoicing_address_form.city
                          : ""
                      }
                    />
                    {change_invoicing_address_form.city.length > 0 ? (
                      <img src={images.checked} alt={"checked"} />
                    ) : (
                      <img src={images.error} alt={"error"} />
                    )}
                  </div>
                </div>
                <div className="col-sm-6 padding-l-5">
                  <div className="form-group">
                    <label htmlFor="country">
                      {Translations.privacy.Country}
                    </label>
                    <Text
                      type="text"
                      className="form-control"
                      id="country"
                      name="country"
                      value={
                        change_invoicing_address_form.country
                          ? change_invoicing_address_form.country
                          : ""
                      }
                      onChange={this.handleFieldChangeInvoice}
                    />
                    {change_invoicing_address_form.country.length > 0 ? (
                      <img src={images.checked} alt={"checked"} />
                    ) : (
                      <img src={images.error} alt={"error"} />
                    )}
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="vat">
                  {Translations.privacy.VAT_identification_number}
                </label>
                <Text
                  type="text"
                  className="form-control"
                  id="vat_identification_number"
                  name="vat_identification_number"
                  value={
                    change_invoicing_address_form.vat_identification_number
                      ? change_invoicing_address_form.vat_identification_number
                      : ""
                  }
                  onChange={this.handleFieldChangeInvoice}
                />
                {change_invoicing_address_form.vat_identification_number
                  .length > 0 ? (
                  <img src={images.checked} alt={"checked"} />
                ) : (
                  <img src={images.error} alt={"error"} />
                )}
              </div>
              <div className="form-group">
                <button
                  className="black_button"
                  onClick={this.handleSaveChangeInvoice}
                >
                  {Translations.privacy.save}
                </button>
              </div>
            </div>

            <div className="form-subtitle">{Translations.privacy.Actions}</div>
            <div className="privacy-actions-wrapper">
              <div className="row">
                <div className="col-sm-6">
                  {Translations.privacy.Delete_search_history}
                </div>
                <div className="col-sm-6 text-right">
                  <div className="action-btns"
                    onClick={this.handleDeleteSearchHisory}
                    id={"delete_search_history"}
                    role="button"
                    tabIndex="0"
                    onKeyDown={this.handleKeyDown}
                  >
                    {Translations.privacy.Delete}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  {Translations.privacy.Deactivate_my_account}
                </div>
                <div className="col-sm-6 text-right">
                  <div className="action-btns"
                    onClick={this.handleDeactiveMyAccount}
                    id={"deactivate_account"}
                    role="button"
                    tabIndex="0"
                    onKeyDown={this.handleKeyDown}
                  >
                    {Translations.privacy.Deactivate}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profilePrivacyData: state.profilePrivacyData,
  userDataByUsername: state.userDataByUsername,
  searchData: state.searchData
});

const mapDispatchToProps = {
  setProfilePrivacy,
  setSocialShare,
  setProfilePersonalizedAdvertise,
  setChangeEmail,
  setChangePassword,
  setChangeInvoiceAddress,
  deleteSearchHistory,
  deactivateAccount,
  getUser,
  getSearch
};

PrivacyPage.propTypes = {
  setProfilePrivacy: PropTypes.func,
  setSocialShare: PropTypes.func,
  setProfilePersonalizedAdvertise: PropTypes.func,
  setChangeEmail: PropTypes.func,
  setChangePassword: PropTypes.func,
  setChangeInvoiceAddress: PropTypes.func,
  deleteSearchHistory: PropTypes.func,
  deactivateAccount: PropTypes.func,
  handleModalInfoShow: PropTypes.func,
  profilePrivacyData: PropTypes.any,
  history: PropTypes.any,
  getUser: PropTypes.func,
  modalInfoShow: PropTypes.any,
  userDataByUsername: PropTypes.any,
  searchData: PropTypes.any,
  getSearch: PropTypes.func,
  checked: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivacyPage);
