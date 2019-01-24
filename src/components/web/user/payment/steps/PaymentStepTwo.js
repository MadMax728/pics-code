import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { checkVoucherExpiry } from "../../../../../actions";
import { Translations } from "../../../../../lib/translations";
import {
  Loader,
  InlineLoading,
  RightSidebarModal
} from "../../../../ui-kit";

class PaymentStepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: {},
      voucherCode: this.props.form.voucherCode
        ? this.props.form.voucherCode
        : " ",
      voucherRedeemAmount: this.props.form.voucherAmount
        ? this.props.form.voucherAmount
        : "0.0",
      maximumExpenses: this.props.form.maximumExpenses
        ? this.props.form.maximumExpenses
        : this.props.form.budget
    };
  }

  handleRedeemBtn = () => {
    const errors = {};
    if (this.props.form.voucher) {
      const voucherParams = {
        code: this.props.form.voucher,
        type: this.props.forThat
      };
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
          this.props.voucherData.voucherExpiryResult &&
          this.props.voucherData.voucherExpiryResult.amountList
        ) {
          const maximumExpensenAmount = this.props.form.maximumExpenses
            ? this.props.form.maximumExpenses
            : this.props.form.budget;

          const voucherAmount = this.props.voucherData.voucherExpiryResult
            .amountList.voucherRedeemAmount;
          const calculatedMaximumExpenses =
            parseInt(maximumExpensenAmount) -
            parseInt(
              this.props.voucherData.voucherExpiryResult.amountList
                .voucherRedeemAmount
            );
          if (calculatedMaximumExpenses > 0) {
            this.setState({
              voucherCode: this.props.form.voucher,
              voucherRedeemAmount: voucherAmount,
              maximumExpenses: calculatedMaximumExpenses
            });
            errors.voucherError = "";
          } else {
            errors.voucherError =
              Translations.create_campaigns.voucherCodeValid;
          }
          this.setState({ error: errors });
        }
      });
    } else {
      errors.voucherError = Translations.create_campaigns.voucherCodeRequired;
      this.setState({ error: errors });
    }
  };

  handleCommitToBuy = () => {
    this.setState({ error: {} });
    this.props.setVoucherData(
      this.state.voucherCode,
      this.state.voucherRedeemAmount,
      this.state.maximumExpenses
    );
    this.props.handleSubmit();
  };

  render() {
    const { handleChangeField, form, userInfo, isLoading, isEdit } = this.props;
    const redeemLoading = this.props.voucherData.isLoading;
    return (
      <div className="col-xs-12 no-padding" id={form.title}>
        <div className="col-sm-5 payment-history">
          <div className="subtitle">
            {Translations.create_campaigns.CompletePaymentTransaction}
          </div>
          <div className="history-content-wrapper">
            <div className="subtitle">
              {" "}
              {Translations.create_campaigns.BillingAddress}
            </div>
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
            <div className="subtitle">
              {" "}
              {Translations.create_campaigns.PaymentMethod}{" "}
            </div>
            <div className="content"> {Translations.create_campaigns.NA}</div>
          </div>
          <div className="history-content-wrapper">
            <div className="subtitle">
              {" "}
              {Translations.create_campaigns.Voucher}{" "}
            </div>
            <div className="form-content">
              <input type="text" name="voucher" onChange={handleChangeField} />
              <button className="blue_button" onClick={this.handleRedeemBtn}>
                {Translations.create_campaigns.Redeem}
              </button>
              {this.state.error.voucherError ? (
                <div className="form-group">
                  <span className="error-msg highlight">
                    {this.state.error.voucherError}
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="history-content-wrapper">
            <div className="subtitle">
              {" "}
              {Translations.create_campaigns.OrderOverview}{" "}
            </div>
            <div className="content no-padding">
              <table>
                <tbody>
                  <tr>
                    <td> {Translations.create_campaigns.PreliminaryAmount} </td>
                    <td>{form.budget}</td>
                  </tr>
                  
                  <tr>
                    <td> {Translations.create_campaigns.Runtime}</td>
                    <td>
                      {form.endDate &&
                        form.startDate &&
                        `${form.endDate.diff(form.startDate, "days")} Days`}
                    </td>
                  </tr>
                  <tr>
                    <td>{Translations.create_campaigns.Voucher}</td>
                    <td>{this.state.voucherRedeemAmount}€</td>
                  </tr>
                  <tr>
                    <td className="fontBold">
                      {Translations.create_campaigns.MaximumExpenses}
                    </td>
                    <td className="fontBold">
                      {/* {form.maximumExpenses
                        ? form.maximumExpenses
                        : form.budget} */}
                      {this.state.maximumExpenses}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bottom-links">
            {Translations.create_campaigns.onClickRegister}{" "}
            <Link to={""}>{Translations.create_campaigns.GenralTerms}</Link>,{" "}
            <Link to={""}>{Translations.create_campaigns.termsUse}</Link> and{" "}
            <Link to={""}>{Translations.create_campaigns.dataProtection}</Link>{" "}
            &{" "}
            <Link to={""}> {Translations.create_campaigns.privacyPolicy}</Link>.
          </div>
          <div className="bottom-button">
            <button className="filled_button" onClick={this.handleCommitToBuy}>
            {!isEdit && Translations.create_campaigns.CommitToBuy}
            {isEdit && Translations.create_campaigns.CommitToUpdate}
            </button>
          </div>
          {redeemLoading && <Loader />}
          {isLoading && <InlineLoading />}
        </div>
        <RightSidebarModal
          userInfo={userInfo}
          form={form}
        />
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
  handleChangeField: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  form: PropTypes.any.isRequired,
  checkVoucherExpiry: PropTypes.func,
  voucherData: PropTypes.any,
  forThat: PropTypes.any,
  setVoucherData: PropTypes.func,
  campaignData: PropTypes.any,
  adData: PropTypes.any,
  userInfo: PropTypes.any,
  isLoading: PropTypes.bool.isRequired,
  isEdit: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentStepTwo);
