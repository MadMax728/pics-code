import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Translations } from "../../../../../lib/translations";
import { RightSidebarModal, Label, Input, ErrorSpan } from "../../../../ui-kit";

class PaymentStepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleAddress, form, userInfo, forThat } = this.props;
    console.log(form.address);

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
              <Label
                htmlFor="title"
                value={Translations.payment_modal.invoice_recipient}
              />
              <Input
                type="text"
                className="form-control"
                id="invoiceRecipient"
                name="invoiceRecipient"
                value={form.address.invoiceRecipient}
                onChange={handleAddress}
              />
              {form.address.invoiceRecipient.length === 0 && form.error && (
                <ErrorSpan
                  value={Translations.error.create_modal.invoiceRecipient}
                />
              )}
            </div>
            <div className="form-group">
              <Label
                htmlFor="Location"
                value={Translations.payment_modal.street_number}
              />
              <Input
                type="text"
                name="street"
                value={form.address.street}
                onChange={handleAddress}
              />
              <Input
                type="text"
                name="streetNumber"
                value={form.address.streetNumber}
                onChange={handleAddress}
              />
              {form.address.street.length === 0 ||
                (form.address.streetNumber.length === 0 && form.error && (
                  <ErrorSpan
                    value={Translations.error.create_modal.streetNumber}
                  />
                ))}
            </div>
            <div className="form-group">
              <Label
                htmlFor="title"
                value={Translations.payment_modal.postal_code}
              />
              <Input
                type="text"
                name="postalCode"
                value={form.address.postalCode}
                onChange={handleAddress}
              />
              {form.address.postalCode.length === 0 && form.error && (
                <ErrorSpan value={Translations.error.create_modal.postalCode} />
              )}
            </div>
            <div className="form-group">
              <Label htmlFor="title" value={Translations.payment_modal.city} />
              <Input
                type="text"
                name="city"
                value={form.address.city}
                onChange={handleAddress}
              />
              {form.address.city.length === 0 && form.error && (
                <ErrorSpan value={Translations.error.create_modal.city} />
              )}
            </div>
            <div className="form-group">
              <Label
                htmlFor="title"
                value={Translations.payment_modal.country}
              />
              <Input
                type="text"
                name="country"
                value={form.address.country}
                onChange={handleAddress}
              />
              {form.address.country.length === 0 && form.error && (
                <ErrorSpan value={Translations.error.create_modal.country} />
              )}
            </div>
            <div className="form-group">
              <Label htmlFor="title" value={Translations.payment_modal.VATNO} />
              <Input
                type="text"
                value={form.address.VATNO}
                name="VATNO"
                onChange={handleAddress}
              />
              {form.address.VATNO.length === 0 && form.error && (
                <ErrorSpan value={Translations.error.create_modal.VATNO} />
              )}
            </div>
          </form>
        </div>
        <RightSidebarModal userInfo={userInfo} form={form} isFor={forThat} />
      </div>
    );
  }
}

const mapStateToProps = () => ({});

PaymentStepOne.propTypes = {
  form: PropTypes.any.isRequired,
  handleAddress: PropTypes.func.isRequired,
  userInfo: PropTypes.any,
  forThat: PropTypes.any
};

export default connect(mapStateToProps)(PaymentStepOne);
