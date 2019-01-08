import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { checkVoucherExpiry } from "../../../../../actions";
import { connect } from "react-redux";
import { modalType } from "../../../../../lib/constants/enumerations";
import { Translations } from "../../../../../lib/translations";

class PaymentStepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: {}
    };
  }

  handleRedeemBtn = () => {
    let errors = {};
    if (this.props.form.voucher) {
      const voucherParams = {
        code: this.props.form.voucher,
        type: this.props.forThat
      };
      console.log("campeign", voucherParams);
      this.props.checkVoucherExpiry(voucherParams).then(() => {
        const errors = {};
        if (
          this.props.voucherData.error &&
          this.props.voucherData.error.status === 400
        ) {
          if (this.props.voucherData.voucherExpiryResult.length === 0) {
            errors.voucherError =
              Translations.create_campaigns.voucherCodeValid;
          } else {
            errors.voucherError = Translations.create_campaigns.serverError;
          }
          this.setState({ error: errors });
        } else if (
          this.props.voucherData &&
          this.props.voucherData.voucherExpiryResult
        ) {
          console.log(this.props.voucherData);
        }
      });
    } else {
      errors.voucherError = Translations.create_campaigns.voucherCodeRequired;
      this.setState({ error: errors });
    }
  };

  handleCommitToBuy = () => {
    this.props.handleSubmit();
  };

  render() {
    const { handleChangeField, form } = this.props;
    console.log("step2", this.props);
    return (
      <div className="col-xs-12 no-padding" id={form.title}>
        <div className="col-sm-5 payment-history">
          <div className="subtitle">Complete payment transaction</div>
          <div className="history-content-wrapper">
            <div className="subtitle">Billing address</div>
            <div className="content">
              {form.address && form.address.invoiceRecipient}
              <br />
              {form.address &&
                `${form.address.street}, ${form.address.streetNumber}, ${
                  form.address.city
                }, ${form.address.country} - ${form.address.postalCode}`}
            </div>
          </div>
          <div className="history-content-wrapper">
            <div className="subtitle">Payment method</div>
            <div className="content">N/A</div>
          </div>
          <div className="history-content-wrapper">
            <div className="subtitle">Voucher </div>
            <div className="form-content">
              <input type="text" name="voucher" onChange={handleChangeField} />
              <button className="blue_button" onClick={this.handleRedeemBtn}>
                Redeem
              </button>
              {this.state.error.voucherError ? (
                <span className="error-msg highlight">
                  {this.state.error.voucherError}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="history-content-wrapper">
            <div className="subtitle">Order overview </div>
            <div className="content no-padding">
              <table>
                <tbody>
                  <tr>
                    <td>Preliminary amount</td>
                    <td>{form.budget}</td>
                  </tr>
                  <tr>
                    <td>Runtime</td>
                    <td>
                      {form.endDate &&
                        form.startDate &&
                        `${form.endDate.diff(form.startDate, "days")} Days`}
                    </td>
                  </tr>
                  <tr>
                    <td>Voucher</td>
                    <td>0,00 €</td>
                  </tr>
                  <tr>
                    <td className="fontBold">Maximum expenses</td>
                    <td className="fontBold">
                      {form.maximumExpenses
                        ? form.maximumExpenses
                        : form.budget}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bottom-links">
            By clicking on register you agree to our{" "}
            <Link to={""}>General Terms & Conditions</Link>,{" "}
            <Link to={""}>Terms of Use</Link> and{" "}
            <Link to={""}>Data Protection</Link> &{" "}
            <Link to={""}>Privacy Policy</Link>.
          </div>
          <div className="bottom-button">
            <button className="filled_button" onClick={this.handleCommitToBuy}>
              Commit to buy
            </button>
          </div>
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

const mapStateToProps = state => ({
  voucherData: state.voucherData
});

const mapDispatchToProps = {
  checkVoucherExpiry
};

PaymentStepTwo.propTypes = {
  handleModalInfoShow: PropTypes.func,
  handleChangeField: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  form: PropTypes.any.isRequired,
  checkVoucherExpiry: PropTypes.func,
  handleModalInfoMsgShow: PropTypes.any,
  voucherData: PropTypes.any,
  forThat: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentStepTwo);
