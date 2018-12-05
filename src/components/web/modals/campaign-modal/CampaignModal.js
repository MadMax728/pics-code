import React, { Component } from "react";
import { CustomBootstrapModal, ImageCropper } from "../../../ui-kit";
import propTypes from "prop-types";
import {
  CreateCompanyCampaign,
  CreateCompanyCampaignHeader,
  CreateCreatorCampaign,
  CreateCreatorCampaignHeader
} from "../../campaigns";

import moment from "moment";
import { modalType } from "../../../../lib/constants/enumerations";

let contentText = "";
class CampaignModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      stepIndex: 0,
      isPreview: false,
      form: {
        title: "",
        location: "",
        address: "",
        category: "",
        procedure: "public",
        type: "video",
        target_group: "company",
        offer: "",
        offer_tag: "",
        inquiry: "",
        inquiry_tag: "",
        description: "",
        start_date: moment(),
        end_date: moment(),
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
        photo: "",
        photoFile: null,
        image: null
      },
      actual_img: "",
      scale: ""
    };
  }

  handleEditImage = image => {
    this.setState({ form: { ...this.state.form, image } });
  };

  handleDate = (date, forThat) => {
    const { form } = this.state;
    form[forThat] = date;
    this.setState({ form });
  };

  uploadFile = (e, forThat) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    let base64Data;
    const currentThis = this;
    reader.readAsDataURL(file);
    reader.onloadend = function() {
      const { form } = currentThis.state;
      form[forThat] = reader.result;
      currentThis.setState({ form });
    };
  };

  handleCreatorSubmit = () => {
    console.log(this.state.form);
  };

  handleContentChange(text) {
    contentText = text.blocks[0].text;
  }

  handleCreatorChangeField = event => {
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
  };

  handleCompanySubmit = () => {
    console.log(this.state.form);
  };

  handleCompanyChangeField = event => {
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
  };

  componentDidMount = () => {
    this.setState({ stepIndex: 0, isPreview: false });
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.modalShow) {
      this.setState({ stepIndex: 0, isPreview: false });
    }
  }
  handleResoreState = () => {
    this.setState({
      form: {}
    });
  };
  handlePrivewOpen = () => {
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
  handleActualImg = actual_img => {
    this.setState({ actual_img });
  };

  handleScale = scale => {
    this.setState({ scale });
  };

  handleLocation = (location, address) => {
    this.setState({
      form: { ...this.state.form, location, address }
    });
  };

  render() {
    const { isFor, handleModalHide } = this.props;
    const { stepIndex, isPreview, form } = this.state;

    let modalClassName = "";

    if (stepIndex === 0) {
      modalClassName = "modal fade create-campaign-modal overflow-scroll ";
    } else if (stepIndex !== 0 && stepIndex < 4) {
      modalClassName = "modal fade create-campaign-modal editor-modal";
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
              handleResoreState={this.handleResoreState}
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
              handleContentChange={this.handleContentChange}
              handleSubmit={this.handleCompanySubmit}
              handleDate={this.handleDate}
              contentText={contentText}
              uploadFile={this.uploadFile}
              handleEditImage={this.handleEditImage}
              handleLocation={this.handleLocation}
              ref={this.imageCropper}
              handleActualImg={this.handleActualImg}
              handleScale={this.handleScale}
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
              handleDate={this.handleDate}
              handleEditImage={this.handleEditImage}
              handleLocation={this.handleLocation}
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
