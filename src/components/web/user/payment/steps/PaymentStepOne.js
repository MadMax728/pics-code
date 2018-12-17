import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import PropTypes from "prop-types";
class PaymentStepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleChangeField, form } = this.props;

    return (
      <div className="col-xs-12 no-padding">
        <div className="col-sm-5 upload-form billing-add">
          <div className="user-title">
            <div className="subtitle">Billing Address</div>
          </div>
          <form className="col-xs-12 no-padding">
            <div className="form-group">
              <label htmlFor="title">Invoice Recipient</label>
              <input
                type="text"
                name="invoice_recipient"
                value={form.invoice_recipient}
                onChange={handleChangeField}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Location">Street, number</label>
              <input
                type="text"
                name="street"
                value={form.street}
                onChange={handleChangeField}
              />
              <input
                type="text"
                name="number"
                value={form.number}
                onChange={handleChangeField}
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Postal Code</label>
              <input
                type="text"
                name="postal_code"
                value={form.postal_code}
                onChange={handleChangeField}
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">City</label>
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChangeField}
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Country</label>
              <input
                type="text"
                name="country"
                value={form.country}
                onChange={handleChangeField}
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">VAT Identification Number</label>
              <input
                type="text"
                value={form.vat_identification_number}
                name="vat_identification_number"
                onChange={handleChangeField}
              />
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
  handleChangeField: PropTypes.func.isRequired
};

export default PaymentStepOne;
