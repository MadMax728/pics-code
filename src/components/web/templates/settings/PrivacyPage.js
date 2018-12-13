import React, { Component } from "react";
import * as images from "../../../../lib/constants/images";
import { Text } from "../../../ui-kit/CommonUIComponents";
import { Translations } from "../../../../lib/translations";
import { Auth } from "../../../../auth";
import {
  setProfilePrivacy,
  setSocialShare,
  setProfilePersonalizedAdvertise,
  setChangeEmail,
  setChangePassword,
  setChangeInvoiceAddress,
  deleteSearchHistory,
  deactivateAccount
} from "../../../../actions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { modalType } from "../../../../lib/constants/enumerations";

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
      userId: ""
    };
  }

  componentDidMount = () => {
    const storage = Auth.extractJwtFromStorage();
    let userInfo = null;
    if (storage) {
      userInfo = JSON.parse(storage.userInfo);
    }
    if (userInfo) {
      this.setState({ userId: userInfo.id });
    }
  };

  onKeyPressHandler = () => {};

  hanldeIsPrivate = event => {
    const isPrivate = event.target.checked;
    this.setState({ isPrivate });
    const paramData = { isprivate: isPrivate };
    this.props.setProfilePrivacy(paramData);
  };

  hanldeIsSocialShare = event => {
    const isSocialShare = event.target.checked;
    this.setState({ isSocialShare });
    const paramData = { isSocialShare };
    this.props.setSocialShare(paramData);
  };

  hanldeIsPersonalized = event => {
    const isPersonalized = event.target.checked;
    this.setState({ isPersonalized });
    const paramData = { isPersonalizedAdvertise: isPersonalized };
    this.props.setProfilePersonalizedAdvertise(paramData);
  };

  // handleFieldChangeEmail event
  handleFieldChangeEmail = event => {
    const { change_email_form } = this.state;
    change_email_form[event.values.name] = event.values.val;
    this.setState({ change_email_form });
  };

  // handleSaveChangeEmail called when click on submit
  handleSaveChangeEmail = e => {
    e.preventDefault();
    console.log(this.state.change_email_form);
    const paramData = { emailDetails: "emailDetails" };
    this.props.setChangeEmail(paramData);
  };

  // handleFieldChangePassword event
  handleFieldChangePassword = event => {
    const { change_password_form } = this.state;
    change_password_form[event.values.name] = event.values.val;
    this.setState({ change_password_form });
  };

  // handleSaveChangePassword called when click on submit
  handleSaveChangePassword = e => {
    e.preventDefault();
    console.log(this.state.change_password_form);
    const paramData = { passwordDetails: "passwordDetails" };
    this.props.setChangePassword(paramData);
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
    console.log(this.state.change_invoicing_address_form);
    const paramData = { addressDetails: "addressDetails" };
    this.props.setChangeInvoiceAddress(paramData);
  };

  handleDeleteSearchHisory = e => {
    console.log("Delete History", e.target.id);
    const paramData = { searchHistoryId: e.target.id };
    this.props.handleModalInfoShow(modalType.confirmation);
    // this.props.deleteSearchHistory(paramData); // API Call
  };

  handleDeactiveMyAccount = e => {
    console.log("Deactivate Account ", e.target.id);
    const paramData = { accountId: e.target.id };
    this.props.handleModalInfoShow(modalType.confirmation);
    // this.props.deactivateAccount(paramData); // API Call
  };

  render() {
    const {
      change_email_form,
      change_password_form,
      change_invoicing_address_form,
      userId
    } = this.state;
    console.log("userid", userId);

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
                    <label className="switch" htmlFor={"Privacy"}>
                      <input type="checkbox" onChange={this.hanldeIsPrivate} />
                      <span className="slider round" />
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
                      <input
                        type="checkbox"
                        onChange={this.hanldeIsSocialShare}
                      />
                      <span className="slider round" />
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
                    <input
                      type="checkbox"
                      onChange={this.hanldeIsPersonalized}
                    />
                    <span className="slider round" />
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
                  onChange={this.handleFieldChangeEmail}
                />
                {change_email_form.current_email.length > 0 ? (
                  <img src={images.checked} alt={"checked"} />
                ) : (
                  <img src={images.error} alt={"error"} />
                )}
              </div>
              <div className="form-group">
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
                />
                {change_email_form.new_email.length > 0 ? (
                  <img src={images.checked} alt={"checked"} />
                ) : (
                  <img src={images.error} alt={"error"} />
                )}
              </div>
              <div className="form-group">
                <button
                  className="black_button"
                  onClick={this.handleSaveChangeEmail}
                >
                  save
                </button>
              </div>
            </div>

            <div className="form-subtitle">
              {Translations.privacy.Change_Password}
            </div>
            <div className="change-password-wrapper">
              <div className="form-group">
                <label htmlFor="c-password">Current Password</label>
                <Text
                  type="password"
                  className="form-control"
                  id="current_password"
                  name="current_password"
                  autoComplete="current_password"
                  onChange={this.handleFieldChangePassword}
                />
                {change_password_form.current_password.length > 0 ? (
                  <img src={images.checked} alt={"checked"} />
                ) : (
                  <img src={images.error} alt={"error"} />
                )}
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
                  onChange={this.handleFieldChangePassword}
                />
                {change_password_form.new_password.length > 0 ? (
                  <img src={images.checked} alt={"checked"} />
                ) : (
                  <img src={images.error} alt={"error"} />
                )}
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
                  onChange={this.handleFieldChangePassword}
                />
                {change_password_form.repeat_password.length > 0 ? (
                  <img src={images.checked} alt={"checked"} />
                ) : (
                  <img src={images.error} alt={"error"} />
                )}
              </div>
              <div className="form-group">
                <button
                  className="black_button"
                  onClick={this.handleSaveChangePassword}
                >
                  save
                </button>
              </div>
            </div>

            <div className="form-subtitle">
              {Translations.privacy.Change_invoicing_address}
            </div>
            <div className="change-invoiceadd-wrapper">
              <div className="form-group">
                <label htmlFor="recipient">Invoice recipient</label>
                <Text
                  type="text"
                  className="form-control"
                  id="invoice_recipient"
                  name="invoice_recipient"
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
                  save
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
                  <div
                    onClick={this.handleDeleteSearchHisory}
                    id={userId}
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
                  <div
                    onClick={this.handleDeactiveMyAccount}
                    id={userId}
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

//export default PrivacyPage;

const mapStateToProps = state => ({
  profilePrivacyData: state.userDataByUsername
});

const mapDispatchToProps = {
  setProfilePrivacy,
  setSocialShare,
  setProfilePersonalizedAdvertise,
  setChangeEmail,
  setChangePassword,
  setChangeInvoiceAddress,
  deleteSearchHistory,
  deactivateAccount
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
  // searchHistoryId: PropTypes.object,
  handleModalInfoShow: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivacyPage);
