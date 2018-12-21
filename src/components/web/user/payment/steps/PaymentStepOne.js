import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import PropTypes from "prop-types";
import { Translations } from "../../../../../lib/translations";
class PaymentStepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleAddress, form } = this.props;

    return (
      <div className="col-xs-12 no-padding">
        <div className="col-sm-5 upload-form billing-add">
          <div className="user-title">
            <div className="subtitle">{Translations.payment_modal.billing_address}</div>
          </div>
          <form className="col-xs-12 no-padding">
            <div className="form-group">
              <label htmlFor="title">{Translations.payment_modal.invoice_recipient}</label>
              <input
                type="text"
                name="invoiceRecipient"
                value={form.address.invoiceRecipient}
                onChange={handleAddress}
              />
              {
                form.address.invoiceRecipient.length === 0 && form.error && (
                  <span className="error-msg highlight">{Translations.error.create_modal.invoiceRecipient}</span>
                  )
                }
            </div>
            <div className="form-group">
              <label htmlFor="Location">{Translations.payment_modal.street_number}</label>
              <input
                type="text"
                name="street"
                value={form.address.street}
                onChange={handleAddress}
              />
              <input
                type="text"
                name="streetNumber"
                value={form.address.streetNumber}
                onChange={handleAddress}
              />
              {
                 form.address.street.length === 0  || form.address.streetNumber.length === 0 && form.error && (
                  <span className="error-msg highlight">{Translations.error.create_modal.streetNumber}</span>
                  )
                }
            </div>
            <div className="form-group">
              <label htmlFor="title">{Translations.payment_modal.postal_code}</label>
              <input
                type="text"
                name="postalCode"
                value={form.address.postalCode}
                onChange={handleAddress}
              />
              {
                form.address.postalCode.length === 0 && form.error && (
                  <span className="error-msg highlight">{Translations.error.create_modal.postalCode}</span>
                  )
                }
            </div>
            <div className="form-group">
              <label htmlFor="title">{Translations.payment_modal.city}</label>
              <input
                type="text"
                name="city"
                value={form.address.city}
                onChange={handleAddress}
              />
              {
                form.address.city.length === 0 && form.error && (
                  <span className="error-msg highlight">{Translations.error.create_modal.city}</span>
                  )
                }
            </div>
            <div className="form-group">
              <label htmlFor="title">{Translations.payment_modal.country}</label>
              <input
                type="text"
                name="country"
                value={form.address.country}
                onChange={handleAddress}
              />
              {
                form.address.country.length === 0 && form.error && (
                  <span className="error-msg highlight">{Translations.error.create_modal.country}</span>
                  )
                }
            </div>
            <div className="form-group">
              <label htmlFor="title">{Translations.payment_modal.VATNO}</label>
              <input
                type="text"
                value={form.address.VATNO}
                name="VATNO"
                onChange={handleAddress}
              />
              {
                form.address.VATNO.length === 0 && form.error && (
                  <span className="error-msg highlight">{Translations.error.create_modal.VATNO}</span>
                  )
                }
            </div>
          </form>
        </div>
        <div className="col-sm-7 disp-flex create-campaign-feed-wrapper">
          <div className="feed_wrapper">
            <div className="feed_header">
              <div className="no-padding profile_image">
                <img
                  src={images.image}
                  alt="image1"
                  className="img-circle img-responsive"
                />
              </div>
              <div className="no-padding titles_wrapper">
                <div className="normal_title">Title of campaigns</div>
                <div className="secondary_title">Santosh Shinde</div>
                <div className="grey_title">01.01.2000 in Category</div>
              </div>
              <div className="like_wrapper">
                <img
                  src={images.blue_heart}
                  alt={"blue_heart"}
                  className="pull-right"
                />
              </div>
            </div>
            <div className="feed_content">
              <div className="feed_image">
                <div className="embed-responsive embed-responsive-16by9">
                  <div className="img-responsive embed-responsive-item">
                    <img src={images.image} alt="image2" />
                  </div>
                </div>
              </div>
              <div className="feed_description padding-15">
                <span className="secondary_title">
                  {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...`}
                </span>
              </div>
            </div>
            <div className="feed_footer padding-15">
              <div className="messages">
                <span className="count">12</span>
                <img src={images.feed_msg} alt="feed_msg" />
              </div>
              <div className="likes">
                <span className="count">12</span>
                <img src={images.feed_like} alt="feed_like" />
              </div>
              <div className="show_more_options">
                <div>• • •</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PaymentStepOne.propTypes = {
  form: PropTypes.any.isRequired,
  handleAddress: PropTypes.func.isRequired
};

export default PaymentStepOne;
