import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import propTypes from "prop-types";
import {
  CreateCompanyCampaign,
  CreateCompanyCampaignHeader,
  CreateCreatorCampaign,
  CreateCreatorCampaignHeader
} from "../../campaigns";

import { modalType } from "../../../../lib/constants/enumerations";

class CampaignModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      stepIndex: 0,
      isPreview: false,
      form: {
        title: "",
        location: "",
        category: "",
        procedure: "public",
        type: "video",
        target_group: "company",
        offer: "",
        offer_tag: "",
        inquiry: "",
        inquiry_tag: "",
        description: "",
        start_date: "",
        end_date: "",
        daily_budget: "",
        invoice_recipient: "",
        street: "",
        number: "",
        postal_code: "",
        city: "",
        country: "",
        vat_identification_number: "",
        payment_option: "card",
        card_holder: "",
        expire_date: "",
        card_no: "",
        cvc: "",
        billing_address: "",
        payment_method: "",
        voucher: "",
        image: ""
      }
    };
  }

  handleCreatorSubmit = () => {
    console.log(this.state.form);
  };

  handleCreatorChangeField = event => {
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
    console.log(this.state.form);
  };

  handleCompanySubmit = () => {
    console.log(this.state.form);
  };

  handleCompanyChangeField = event => {
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
    console.log(this.state.form);
  };

  componentDidMount() {
    this.setState({ stepIndex: 0 });
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (!nextProps.modalShow) {
      this.setState({ stepIndex: 0 });
    }
  }

  handlePrivewOpen = () => {
    console.log("ahikhvjksn");

    this.setState({ isPreview: true });
  };

  handlePrivewClose = () => {
    this.setState({ isPreview: false });
  };

  handleNext = () => {
    const { stepIndex } = this.state;
    if (stepIndex < 5) {
      this.setState({ stepIndex: stepIndex + 1 });
    }
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  handleModalInfoShow = () => {
    this.props.handleModalInfoMsgShow(
      modalType.payment_confirmation,
      "Campaign"
    );
  };

  render() {
    const { isFor, handleModalHide } = this.props;
    const { stepIndex, isPreview, form } = this.state;

    let modalClassName = "";

    if (stepIndex === 0) {
      modalClassName = "modal fade create-campaign-modal overflow-scroll";
    } else if (stepIndex !== 0 && stepIndex < 4) {
      modalClassName = "modal fade create-campaign-modal";
    } else if (stepIndex > 3 && stepIndex < 6) {
      modalClassName = "modal fade payment-overview-modal";
    }

    return (
      <CustomBootstrapModal
        modalClassName={modalClassName}
        header={!isPreview}
        modalHeaderContent={
          isFor ? (
            <CreateCompanyCampaignHeader
              handleModalHide={handleModalHide}
              handleNext={this.handleNext}
              handlePrev={this.handlePrev}
              stepIndex={this.state.stepIndex}
              handlePrivewOpen={this.handlePrivewOpen}
            />
          ) : (
            <CreateCreatorCampaignHeader
              handleModalHide={handleModalHide}
              handleNext={this.handleNext}
              handlePrev={this.handlePrev}
              stepIndex={stepIndex}
              handlePrivewOpen={this.handlePrivewOpen}
            />
          )
        }
        footer={false}
        modalShow={this.props.modalShow}
        closeBtn={false}
        handleModalHide={handleModalHide}
        modalBodyContent={
          isFor ? (
            <CreateCompanyCampaign
              stepIndex={stepIndex}
              isFor={isFor}
              forThat={"Campaign"}
              handleModalInfoShow={this.handleModalInfoShow}
              handlePrivewClose={this.handlePrivewClose}
              isPreview={isPreview}
              handleChangeField={this.handleCompanyChangeField}
              form={form}
              handleSubmit={this.handleCompanySubmit}
            />
          ) : (
            <CreateCreatorCampaign
              stepIndex={this.state.stepIndex}
              isFor={isFor}
              forThat={"Campaign"}
              handleModalInfoShow={this.handleModalInfoShow}
              handlePrivewClose={this.handlePrivewClose}
              isPreview={isPreview}
              handleChangeField={this.handleCreatorChangeField}
              form={form}
              handleSubmit={this.handleCreatorSubmit}
            />
          )
        }
      />
    );
  }
}

CampaignModal.propTypes = {
  modalShow: propTypes.bool.isRequired,
  handleModalHide: propTypes.func.isRequired,
  isFor: propTypes.bool.isRequired,
  handleModalInfoMsgShow: propTypes.func
};

export default CampaignModal;
