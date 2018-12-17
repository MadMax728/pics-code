import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import PropTypes from "prop-types";
import {
  CreateCompanyCampaign,
  CreateCompanyCampaignHeader,
  CreateCreatorCampaign,
  CreateCreatorCampaignHeader
} from "../../campaigns";

import moment from "moment";
import { modalType, mediaTypes, target_group, procedure } from "../../../../lib/constants/enumerations";

// import { b64toBlob } from "../../../../lib/utils/helpers"

const contentText = "";

const initialState = {
  stepIndex: 0,
      isPreview: false,
      form: {
        title: "",
        location: {
          lat: "",
          lng: "",
          address: ""
        },
        category: "",
        procedure: procedure.public,
        type: mediaTypes.image,
        target_group: target_group.company,
        offer: "",
        offer_tag: [],
        offerTagList: [],
        inquiry: "",
        inquiry_tag: [],
        inquiryTagList: [],
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
        image: null,
        actual_img: "",
        filetype: true,
        file: null,
        video: null
      },
      scale: ""
};


class CampaignModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = initialState;
  }

  handleEditImage = image => {
    this.setState({ form: { ...this.state.form, image } });
  };

  handleDate = (date, forThat) => {
    const { form } = this.state;
    form[forThat] = date;
    this.setState({ form });
  };

  handleCreatorSubmit = () => {
    console.log(this.state.form);
    
  };

  handleContentChange(text) {
    const { form } = this.state;
    form.description = text
    this.setState({ form });
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
    if (stepIndex < 4) {
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
  
  handleVideo = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    if (file.type.includes("video")) {
      const currentThis = this;
      reader.readAsDataURL(file);
      reader.onloadend = function() {
        const { form } = currentThis.state;
        form.video = reader.result;
        form.file = file;
        form.fileType = false;
        currentThis.setState({ form });
      };
    }
  }

  handleActualImg = (e) => {
    const reader = new FileReader();
    const file = e;

    if (file.type.includes("image")) {
      const currentThis = this;
      reader.readAsDataURL(file);
      reader.onloadend = function() {
        const { form } = currentThis.state;
        form.image = reader.result;
        form.file = file;
        form.fileType = true;
        currentThis.setState({ form });
      };
    }
  };

  handleScale = scale => {
    this.setState({ scale });
  };

  handleLocation = (location, address) => {
    const { form } = this.state;
    form.location.lat = location.lat
    form.location.lng = location.lng
    form.location.address = address;
    this.setState({ form });
  };
  
  handleOfferTagChange = (id, tag) => {
    const { form } = this.state;
    form.offer_tag.push(id);
    form.offerTagList.push(tag);
    this.setState({ form });
  };

  handleInquiryTagDelete = id => {
    const { form } = this.state;
    this.setState({ form: {
      ...this.state.form, 
      inquiry_tag: form.inquiry_tag.filter(tag => tag !== form.inquiryTagList[id].id), 
      inquiryTagList: form.inquiryTagList.filter(tag => tag.id !== form.inquiryTagList[id].id)}
    });
  };

  handleOfferTagDelete = id => {
    const { form } = this.state;  
    this.setState({ form: {
      ...this.state.form, 
      offer_tag: form.offer_tag.filter(tag => tag !== form.offerTagList[id].id), 
      offerTagList: form.offerTagList.filter(tag => tag.id !== form.offerTagList[id].id)}
    });
  };

  handleInquiryTagChange = (id, tag) => {
    const { form } = this.state;
    form.inquiry_tag.push(id);
    form.inquiryTagList.push(tag);
    this.setState({ form });
  };

  handleSelect = (isFor , selected) => {
    const { form } = this.state;
    form[isFor] = selected;
    this.setState({ form });
  }

  componentWillUnmount = () => {
    this.setState(initialState);
  }

  render() {
    const { isFor, handleModalHide } = this.props;
    const { stepIndex, isPreview, form } = this.state;

    let modalClassName = "";

    if (stepIndex === 0) {
      modalClassName = "modal fade create-campaign-modal overflow-scroll ";
    } else if (stepIndex !== 0 && stepIndex < 4) {
      modalClassName = "modal fade create-campaign-modal editor-modal";
    } else if (stepIndex > 3 && stepIndex < 5) {
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
              handleEditImage={this.handleEditImage}
              handleLocation={this.handleLocation}
              ref={this.imageCropper}
              handleActualImg={this.handleActualImg}
              handleScale={this.handleScale}
              handleOfferTagChange={this.handleOfferTagChange}
              handleOfferTagDelete={this.handleOfferTagDelete}
              handleInquiryTagChange={this.handleInquiryTagChange}
              handleInquiryTagDelete={this.handleInquiryTagDelete}
              handleSelect={this.handleSelect}
              handleVideo={this.handleVideo}
            />
          ) : (
            <CreateCreatorCampaign
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
              handleEditImage={this.handleEditImage}
              handleLocation={this.handleLocation}
              ref={this.imageCropper}
              handleActualImg={this.handleActualImg}
              handleScale={this.handleScale}
              handleOfferTagChange={this.handleOfferTagChange}
              handleOfferTagDelete={this.handleOfferTagDelete}
              handleInquiryTagChange={this.handleInquiryTagChange}
              handleInquiryTagDelete={this.handleInquiryTagDelete}
              handleSelect={this.handleSelect}
              handleVideo={this.handleVideo}
            />
          )
        }
      />
    );
  }
}

CampaignModal.propTypes = {
  modalShow: PropTypes.bool.isRequired,
  handleModalHide: PropTypes.func.isRequired,
  isFor: PropTypes.bool.isRequired,
  handleModalInfoMsgShow: PropTypes.func
};

export default CampaignModal;
