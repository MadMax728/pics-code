import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Translations } from "../../../../../lib/translations";
import { RightSidebarModal } from "../../../../ui-kit";

class PaymentStepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleAddress, form, userInfo } = this.props;
    return (
      <div className="col-xs-12 no-padding">
        <div className="col-sm-5 upload-form billing-add">
          <div className="user-title">
            <div className="subtitle">
              {Translations.payment_modal.billing_address}
            </div>
          </div>
          <form className="col-xs-12 no-padding">
            <div className="form-group">
              <label htmlFor="title">
                {Translations.payment_modal.invoice_recipient}
              </label>
              <input
                type="text"
                name="invoiceRecipient"
                defaultValue={form.address.invoiceRecipient}
                onChange={handleAddress}
              />
              {form.address.invoiceRecipient.length === 0 && form.error && (
                <span className="error-msg highlight">
                  {Translations.error.create_modal.invoiceRecipient}
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="Location">
                {Translations.payment_modal.street_number}
              </label>
              <input
                type="text"
                name="street"
                defaultValue={form.address.street}
                onChange={handleAddress}
              />
              <input
                type="text"
                name="streetNumber"
                defaultValue={form.address.streetNumber}
                onChange={handleAddress}
              />
              {form.address.street.length === 0 ||
                (form.address.streetNumber.length === 0 && form.error && (
                  <span className="error-msg highlight">
                    {Translations.error.create_modal.streetNumber}
                  </span>
                ))}
            </div>
            <div className="form-group">
              <label htmlFor="title">
                {Translations.payment_modal.postal_code}
              </label>
              <input
                type="text"
                name="postalCode"
                defaultValue={form.address.postalCode}
                onChange={handleAddress}
              />
              {form.address.postalCode.length === 0 && form.error && (
                <span className="error-msg highlight">
                  {Translations.error.create_modal.postalCode}
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="title">{Translations.payment_modal.city}</label>
              <input
                type="text"
                name="city"
                defaultValue={form.address.city}
                onChange={handleAddress}
              />
              {form.address.city.length === 0 && form.error && (
                <span className="error-msg highlight">
                  {Translations.error.create_modal.city}
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="title">
                {Translations.payment_modal.country}
              </label>
              <input
                type="text"
                name="country"
                defaultValue={form.address.country}
                onChange={handleAddress}
              />
              {form.address.country.length === 0 && form.error && (
                <span className="error-msg highlight">
                  {Translations.error.create_modal.country}
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="title">{Translations.payment_modal.VATNO}</label>
              <input
                type="text"
                defaultValue={form.address.VATNO}
                name="VATNO"
                onChange={handleAddress}
              />
              {form.address.VATNO.length === 0 && form.error && (
                <span className="error-msg highlight">
                  {Translations.error.create_modal.VATNO}
                </span>
              )}
            </div>
          </form>
        </div>
        <RightSidebarModal
          userInfo={userInfo}
          form={form}
        />
      </div>
    );
  }
}

const mapStateToProps = () => ({
});

PaymentStepOne.propTypes = {
  form: PropTypes.any.isRequired,
  handleAddress: PropTypes.func.isRequired,
  userInfo: PropTypes.any
};

export default connect(mapStateToProps)(PaymentStepOne);
