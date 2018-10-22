import React, { Component } from "react";
import { Link } from "react-router-dom";

import * as images from "../../../../../lib/constants/images";

class Privacy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPrivate: false,
      isPersonalized: false,
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
      }
    };
  }

  hanldeIsPrivate = event => {
    const isPrivate = event.target.checked;
    this.setState({ isPrivate: isPrivate });
    // call API for isPrivate
  };

  hanldeIsPersonalized = event => {
    const isPersonalized = event.target.checked;
    this.setState({ isPersonalized: isPersonalized });
    // call API for isPersonalized
  };

  // handleFieldChangeEmail event
  handleFieldChangeEmail = event => {
    const { change_email_form } = this.state;
    change_email_form[event.target.name] = event.target.value;
    this.setState({ change_email_form });
    console.log(this.state.change_email_form);
  };

  // handleSaveChangeEmail called when click on submit
  handleSaveChangeEmail = e => {
    e.preventDefault();
    console.log(this.state.change_email_form);
  };

  // handleFieldChangePassword event
  handleFieldChangePassword = event => {
    const { change_password_form } = this.state;
    change_password_form[event.target.name] = event.target.value;
    this.setState({ change_password_form });
    console.log(this.state.change_password_form);
  };

  // handleSaveChangePassword called when click on submit
  handleSaveChangePassword = e => {
    e.preventDefault();
    console.log(this.state.change_password_form);
  };

  // handleFieldChangeInvoice event
  handleFieldChangeInvoice = event => {
    const { change_invoicing_address_form } = this.state;
    change_invoicing_address_form[event.target.name] = event.target.value;
    this.setState({ change_invoicing_address_form });
    console.log(this.state.change_invoicing_address_form);
  };

  // handleSaveChangeInvoice called when click on submit
  handleSaveChangeInvoice = e => {
    e.preventDefault();
    console.log(this.state.change_invoicing_address_form);
  };

  handleDeleteSearchHisory = () => {
    console.log("handleDeleteSearchHisory");
  };

  handleDeactiveMyAccount = () => {
    console.log("handleDeactiveMyAccount");
  };

  render() {
    const {
      change_email_form,
      change_password_form,
      change_invoicing_address_form
    } = this.state;

    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="privacy-form">
          <form action="">
            <div className="form-title">Privacy</div>

            <div className="form-subtitle">Limitations</div>
            <div className="limitation-wrapper">
              <div className="row">
                <div className="col-sm-6">Set my profile to private</div>
                <div className="col-sm-6 text-right">
                  <label className="switch">
                    <input type="checkbox" onChange={this.hanldeIsPrivate} />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">Personalized advertising</div>
                <div className="col-sm-6 text-right">
                  <label className="switch">
                    <input
                      type="checkbox"
                      onChange={this.hanldeIsPersonalized}
                    />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
            </div>

            <div className="form-subtitle">Change email</div>
            <div className="change-email-wrapper">
              <div className="form-group">
                <label htmlFor="email">Current Email</label>
                <input
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
                <label htmlFor="email">New Email</label>
                <span className="error-msg pull-right">
                  Please comfirme this change in your email account.{" "}
                </span>
                <input
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

            <div className="form-subtitle">Change Password</div>
            <div className="change-password-wrapper">
              <div className="form-group">
                <label htmlFor="c-password">Current Password</label>
                <input
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
                <label htmlFor="n-password">New Password</label>
                <input
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
                <label htmlFor="r-password">Repeat Password</label>
                <input
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

            <div className="form-subtitle">Change invoicing address</div>
            <div className="change-invoiceadd-wrapper">
              <div className="form-group">
                <label htmlFor="recipient">Invoice recipient</label>
                <input
                  type="text"
                  className="form-control"
                  id="invoice_recipient"
                  name="invoice_recipient"
                  onChange={this.handleFieldChangeInvoice}
                />
                {change_invoicing_address_form.invoice_recipient.length > 0 ? (
                  <img src={images.checked} alt={"checked"} />
                ) : (
                  <img src={images.error} alt={"error"} />
                )}
              </div>
              <div className="form-group">
                <label htmlFor="street">Street, number</label>
                <input
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
                <label htmlFor="postal">Postal code</label>
                <input
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
                    <label htmlFor="city">City</label>
                    <input
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
                    <label htmlFor="country">Country</label>
                    <input
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
                <label htmlFor="vat">VAT identification number</label>
                <input
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

            <div className="form-subtitle">Actions</div>
            <div className="privacy-actions-wrapper">
              <div className="row">
                <div className="col-sm-6">Delete search history</div>
                <div className="col-sm-6 text-right">
                  <div onClick={this.handleDeleteSearchHisory}>Delete</div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">Deactivate my account</div>
                <div className="col-sm-6 text-right">
                  <div onClick={this.handleDeactiveMyAccount}>Deactivate</div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Privacy;
