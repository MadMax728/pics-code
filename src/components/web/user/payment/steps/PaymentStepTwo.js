import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import PropTypes from "prop-types";
class PaymentStepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { form, handleChangeField } = this.props;
    return (
      <div className="col-xs-12 no-padding">
        <div className="col-sm-5 payment-form">
          <div className="subtitle">Payment method</div>
          <div className="form-group">
            <div className="radio" onChange={handleChangeField}>
              <label htmlFor={"Paypal"}>
                <input
                  value="paypal"
                  type="radio"
                  name="payment_option"
                  defaultChecked={form.payment_option === "paypal"}
                />
                <span>Paypal</span>
              </label>
            </div>
            <div className="radio">
              <label htmlFor={"credit_card"} onChange={handleChangeField}>
                <input
                  type="radio"
                  name="payment_option"
                  value="card"
                  defaultChecked={form.payment_option === "card"}
                />
                <span>Credit card</span>
                <img src={images.cards} className="card-img" alt={"cards"} />
              </label>
              <div className="creditcard-form">
                <div className="form-group">
                  <label htmlFor={"name_card_holder"}>
                    Name of card holder
                  </label>
                  <input
                    type="text"
                    placeholder="Max Mustermann"
                    name="card_holder"
                    onChange={handleChangeField}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={"expiry_date"}>Expiry date</label>
                  <input
                    type="text"
                    placeholder="00 / 00"
                    name="expire_date"
                    onChange={handleChangeField}
                  />
                </div>
                <div className="form-group no-margin">
                  <label htmlFor={"credit_card_no"}>Credit card no.</label>
                  <input
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    onChange={handleChangeField}
                    name="card_no"
                  />
                </div>
                <div className="form-group no-margin">
                  <label htmlFor={"cvc"}>CVC</label>
                  <input
                    type="text"
                    placeholder="000"
                    onChange={handleChangeField}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="subtitle">Information on payment</div>
          <p>
            You only have to pay when a user actively clicks on your ad on
            Picstagraph.
          </p>
          <ul>
            <li>100 % cost control</li>
            <li>Cost per Click: 1,00 €</li>
            <li>Payment only after ad was cloes</li>
            <li>Total budget can not be exceeded</li>
          </ul>
        </div>
        <div className="col-sm-7 disp-flex create-campaign-feed-wrapper">
          <div className="feed_wrapper">
            <div className="feed_header">
              <div className="no-padding profile_image">
                <img
                  src={images.image}
                  alt="feed"
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
                  alt="like"
                  className="pull-right"
                />
              </div>
            </div>
            <div className="feed_content">
              <div className="feed_image">
                <div className="embed-responsive embed-responsive-16by9">
                  <div className="img-responsive embed-responsive-item">
                    <img src={images.image} alt="image1" />
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
                <img src={images.feed_msg} alt="profile1" />
              </div>
              <div className="likes">
                <span className="count">12</span>
                <img src={images.feed_like} alt="profile2" />
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

PaymentStepTwo.propTypes = {
  handleChangeField: PropTypes.func.isRequired,
  form: PropTypes.any.isRequired
};

export default PaymentStepTwo;
