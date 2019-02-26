import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Translations } from "../../../../../lib/translations";
import { RightSidebarModal, Button } from "../../../../ui-kit";

class PaymentStepTwo extends Component {
  handleCommitToBuy = () => {
    this.props.handleSubmit();
  };

  render() {
    const { form, userInfo, isLoading, isEdit, forThat } = this.props;
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
            <Button
              className="filled_button"
              type="button"
              text={
                !isEdit
                  ? Translations.create_campaigns.CommitToBuy
                  : Translations.create_campaigns.CommitToUpdate
              }
              onClick={this.handleCommitToBuy}
            />
          </div>
        </div>
        <RightSidebarModal userInfo={userInfo} form={form} isFor={forThat} />
      </div>
    );
  }
}

PaymentStepTwo.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  form: PropTypes.any.isRequired,
  forThat: PropTypes.any,
  userInfo: PropTypes.any,
  isLoading: PropTypes.bool.isRequired,
  isEdit: PropTypes.bool.isRequired
};

export default PaymentStepTwo;
