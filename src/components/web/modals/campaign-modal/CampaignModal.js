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
import {
  modalType,
  typeContent,
  target_group,
  procedure
} from "../../../../lib/constants/enumerations";
import { Auth } from "../../../../auth";

import { connect } from "react-redux";
import { createCampaign, uploadMedia } from "../../../../actions";
import { Translations } from "../../../../lib/translations";

const storage = Auth.extractJwtFromStorage();
let userInfo = null;
if (storage) {
  userInfo = JSON.parse(storage.userInfo);
}

const initialState = {
  stepIndex: 0,
  isPreview: false,
  userInfo: null,
  form: {
    title: "",
    location: {
      latitude: "",
      longitude: "",
      address: ""
    },
    category: "",
    procedure: procedure.public,
    typeContent: typeContent.image,
    targetGroup: target_group.company,
    offers: "",
    offerTag: [],
    offerTagList: [],
    inquiry: "",
    inquiryTag: [],
    inquiryTagList: [],
    description: "",
    startDate: moment(),
    endDate: moment(),
    budget: "",
    address: {
      invoiceRecipient: "",
      street: "",
      postalCode: "",
      city: "",
      VATNO: "",
      country: "",
      streetNumber: ""
    },
    voucher: "",
    voucherAmount: "",
    voucherCode: "",
    image: null,
    filetype: true,
    file: null,
    video: null,
    typeId: "",
    maximumExpenses: "",
    error: false
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
    this.handleSubmit();
  };

  handleContentChange = text => {
    const { form } = this.state;
    form.description = text === "<p></p>" ? "" : text;
    this.setState({ form });
  };

  handleCreatorChangeField = event => {
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
  };

  handleSubmit = () => {
    const { form } = this.state;
    if (form.file) {
      const Data = new FormData();
      if (form.filetype) {
        Data.append("image", form.file);
      } else {
        Data.append("video", form.file);
      }
      Data.append("postType", "campaign");

      this.props.uploadMedia(Data, form.filetype).then(() => {
        if (this.props.mediaData && this.props.mediaData.media) {
          form.typeId = this.props.mediaData.media.id;
          form.file = null;
          form.image = null;
          form.video = null;
          if (!form.maximumExpenses) {
            form.maximumExpenses = form.budget;
          }
          this.setState({ form });
          this.props.createCampaign(form).then(() => {
            if (
              this.props.campaignData &&
              this.props.campaignData.campaign &&
              this.props.campaignData.campaign.id
            ) {
              this.handleModalInfoShow();
            }
          });
        }
      });
    } else {
      this.props.handleModalInfoMsgShow(
        modalType.error,
        Translations.create_campaigns.ImageAndVedio
      );
    }
  };

  setVoucherData = (code, voucher, maximumExpenses) => {
    const { form } = this.state;
    if (voucher && maximumExpenses) {
      form.voucherCode = code;
      form.voucherAmount = voucher;
      form.maximumExpenses = maximumExpenses;
      this.setState({ form });
    }
  };

  validateForm = index => {
    const { form } = this.state;
    if (index === 0) {
      return (
        form.title &&
        form.location.latitude &&
        form.location.longitude &&
        form.location.address &&
        form.category &&
        form.offers &&
        form.offerTag.length !== 0 &&
        form.inquiry &&
        form.inquiryTag.length !== 0 &&
        form.file
      );
    } else if (index === 1) {
      return form.description;
    } else if (index === 2) {
      return (
        form.startDate &&
        form.endDate &&
        form.endDate.diff(form.startDate, "days") >= 0 &&
        form.budget
      );
    } else if (index === 3) {
      return (
        form.address.invoiceRecipient &&
        form.address.street &&
        form.address.streetNumber &&
        form.address.postalCode &&
        form.address.city &&
        form.address.country &&
        form.address.VATNO
      );
    }
  };

  handleCompanySubmit = () => {
    this.handleSubmit();
  };

  handleCompanyChangeField = event => {
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
  };

  componentDidMount = () => {
    this.setState({ stepIndex: 0, isPreview: false });
    if (userInfo) {
      this.setState({ userInfo });
    }
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
      if (this.validateForm(stepIndex)) {
        this.setState({
          stepIndex: stepIndex + 1,
          form: { ...this.state.form, error: false }
        });
      } else {
        this.setState({
          form: { ...this.state.form, error: true }
        });

        this.props.handleModalInfoMsgShow(
          modalType.error,
          Translations.create_campaigns.FillProperData
        );
      }
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

  handleVideo = e => {
    const file = e.target.files[0];
    this.handleImageVideo(file);
  };

  handleImageVideo = file => {
    const reader = new FileReader();

    if (file.type.includes("image")) {
      const currentThis = this;
      reader.readAsDataURL(file);
      reader.onloadend = function() {
        const { form } = currentThis.state;
        form.typeContent = typeContent.image;
        form.image = reader.result;
        form.file = file;
        form.fileType = true;
        currentThis.setState({ form });
      };
    } else if (file.type.includes("video")) {
      const currentThis = this;
      reader.readAsDataURL(file);
      reader.onloadend = function() {
        const { form } = currentThis.state;
        form.typeContent = typeContent.video;
        form.video = reader.result;
        form.file = file;
        form.fileType = false;
        currentThis.setState({ form });
      };
    } else {
      this.props.handleModalInfoMsgShow(
        modalType.error,
        Translations.create_campaigns.SelectProperMedia
      );
    }
  };

  handleActualImg = e => {
    const file = e;
    this.handleImageVideo(file);
  };

  handleScale = scale => {
    this.setState({ scale });
  };

  handleLocation = (location, address) => {
    const { form } = this.state;
    form.location.latitude = location.lat;
    form.location.longitude = location.lng;
    form.location.address = address;
    this.setState({ form });
  };

  handleOfferTagChange = (id, tag) => {
    const { form } = this.state;
    if (form.offerTag.length === 0) {
      form.offerTag = [];
    }
    form.offerTag.push(id);
    form.offerTagList.push(tag);
    this.setState({ form });
  };

  handleInquiryTagDelete = id => {
    const { form } = this.state;
    this.setState({
      form: {
        ...this.state.form,
        inquiryTag: form.inquiryTag.filter(
          tag => tag !== form.inquiryTagList[id].id
        ),
        inquiryTagList: form.inquiryTagList.filter(
          tag => tag.id !== form.inquiryTagList[id].id
        )
      }
    });
  };

  handleOfferTagDelete = id => {
    const { form } = this.state;
    this.setState({
      form: {
        ...this.state.form,
        offerTag: form.offerTag.filter(tag => tag !== form.offerTagList[id].id),
        offerTagList: form.offerTagList.filter(
          tag => tag.id !== form.offerTagList[id].id
        )
      }
    });
  };

  handleInquiryTagChange = (id, tag) => {
    const { form } = this.state;
    if (form.inquiryTag.length === 0) {
      form.inquiryTag = [];
    }
    form.inquiryTag.push(id);
    form.inquiryTagList.push(tag);
    this.setState({ form });
  };

  handleSelect = (isFor, selected) => {
    const { form } = this.state;
    form[isFor] = selected;
    this.setState({ form });
  };

  componentWillUnmount = () => {
    this.setState(initialState);
  };

  handleAddress = event => {
    const { form } = this.state;
    form.address[event.target.name] = event.target.value;
    this.setState({ form });
  };

  render() {
    const { isFor, handleModalHide } = this.props;
    const { stepIndex, isPreview, form, userInfo } = this.state;

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
              forThat={"Campaigns"}
              handleModalInfoShow={this.handleModalInfoShow}
              handlePrivewClose={this.handlePrivewClose}
              isPreview={isPreview}
              handleChangeField={this.handleCompanyChangeField}
              handleAddress={this.handleAddress}
              form={form}
              handleContentChange={this.handleContentChange}
              handleSubmit={this.handleCompanySubmit}
              handleDate={this.handleDate}
              contentText={form.description}
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
              userInfo={userInfo}
              setVoucherData={this.setVoucherData}
            />
          ) : (
            <CreateCreatorCampaign
              stepIndex={stepIndex}
              isFor={isFor}
              forThat={"Campaigns"}
              handleModalInfoShow={this.handleModalInfoShow}
              handlePrivewClose={this.handlePrivewClose}
              isPreview={isPreview}
              handleChangeField={this.handleCompanyChangeField}
              form={form}
              handleAddress={this.handleAddress}
              handleContentChange={this.handleContentChange}
              handleSubmit={this.handleCompanySubmit}
              handleDate={this.handleDate}
              contentText={form.description}
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
              userInfo={userInfo}
              setVoucherData={this.setVoucherData}
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
  handleModalInfoMsgShow: PropTypes.func,
  createCampaign: PropTypes.func.isRequired,
  uploadMedia: PropTypes.func.isRequired,
  mediaData: PropTypes.any,
  campaignData: PropTypes.any
};

const mapStateToProps = state => ({
  mediaData: state.mediaData,
  campaignData: state.campaignData
});

const mapDispatchToProps = {
  createCampaign,
  uploadMedia
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignModal);
