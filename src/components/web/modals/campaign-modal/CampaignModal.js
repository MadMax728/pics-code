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
  procedure,
  budgetCalculation,
  contentTypes
} from "../../../../lib/constants/enumerations";
import { Auth } from "../../../../auth";

import { connect } from "react-redux";
import {
  createCampaign,
  uploadMedia,
  updateCampaign
} from "../../../../actions";
import { Translations } from "../../../../lib/translations";

const storage = Auth.extractJwtFromStorage();
let userInfo = null;
if (storage) {
  userInfo = JSON.parse(storage.userInfo);
}

const initialState = {
  isNewFile: false,
  isEdit: false,
  stepIndex: 0,
  isLoading: false,
  isPreview: false,
  userInfo: null,
  maxClicks: 0,
  modalTitle: "",
  form: {
    draft: false,
    id: "",
    title: "",
    location: {
      latitude: "",
      longitude: "",
      address: ""
    },
    category: "",
    categoryName: "",
    procedure: procedure.public,
    typeContent: typeContent.image,
    targetGroup: target_group.company,
    offers: "",
    offerName: "",
    offerTag: [],
    offerTagList: [],
    inquiry: "",
    inquiryName: "",
    inquiryTag: [],
    inquiryTagList: [],
    description: "",
    startDate: moment(),
    endDate: moment().add(7, "days"),
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
    image: null,
    filetype: true,
    file: null,
    video: null,
    typeId: "",
    fileName: "",
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

  render() {
    const {
      isFor,
      handleModalHide,
      modalShow,
      handleModalInfoMsgShow
    } = this.props;
    const {
      modalTitle,
      isEdit,
      stepIndex,
      isPreview,
      form,
      userInfo,
      maxClicks,
      isLoading
    } = this.state;

    let modalClassName = "";

    if (stepIndex === 0) {
      modalClassName =
        "modal fade create-campaign-modal upload-pic-modal start-campaign-modal overflow-scroll ";
    } else if (stepIndex !== 0 && stepIndex < 3) {
      modalClassName = "modal fade create-campaign-modal editor-modal";
    } else if (stepIndex > 2 && stepIndex < 4) {
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
              stepIndex={stepIndex}
              handlePrivewOpen={this.handlePrivewOpen}
              handleResoreState={this.handleResoreState}
              handleSubmit={this.handleCompanySubmit}
              modalTitle={modalTitle}
              form={form}
              isLoading={isLoading}
            />
          ) : (
            <CreateCreatorCampaignHeader
              handleModalHide={handleModalHide}
              handleNext={this.handleNext}
              handlePrev={this.handlePrev}
              stepIndex={stepIndex}
              handlePrivewOpen={this.handlePrivewOpen}
              handleResoreState={this.handleResoreState}
              modalTitle={modalTitle}
              handleSubmit={this.handleCreatorSubmit}
              isFor={isFor}
              form={form}
              isLoading={isLoading}
            />
          )
        }
        footer={false}
        modalShow={modalShow}
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
              maxClicks={maxClicks}
              handleContentChange={this.handleContentChange}
              handleSubmit={this.handleCompanySubmit}
              handleDate={this.handleDate}
              contentText={form.description}
              handleEditImage={this.handleEditImage}
              handleLocation={this.handleLocation}
              ref={this.imageCropper}
              handleActualImg={this.handleActualImg}
              handleScale={this.handleScale}
              handleSelect={this.handleSelect}
              userInfo={userInfo}
              calculateMaxClicks={this.calculateMaxClicks}
              isLoading={isLoading}
              isEdit={isEdit}
              handleModalInfoMsgShow={handleModalInfoMsgShow}
              handleSetState={this.handleSetState}
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
              maxClicks={maxClicks}
              handleAddress={this.handleAddress}
              handleContentChange={this.handleContentChange}
              handleSubmit={this.handleCreatorSubmit}
              handleDate={this.handleDate}
              contentText={form.description}
              handleEditImage={this.handleEditImage}
              handleLocation={this.handleLocation}
              ref={this.imageCropper}
              handleActualImg={this.handleActualImg}
              handleScale={this.handleScale}
              handleSelect={this.handleSelect}
              userInfo={userInfo}
              calculateMaxClicks={this.calculateMaxClicks}
              isLoading={isLoading}
              isEdit={isEdit}
              handleModalInfoMsgShow={handleModalInfoMsgShow}
              handleSetState={this.handleSetState}
            />
          )
        }
      />
    );
  }

  componentDidMount = () => {
    this.setState({ stepIndex: 0, isPreview: false });
    if (userInfo) {
      this.setState({ userInfo });
    }
    const { data } = this.props;

    if (data && data.id) {
      this.setState({
        modalTitle: Translations.modal_header.edit_campaign,
        isEdit: true,
        isNewFile: false
      });
      this.handleSetstate(data);
    } else {
      this.handleResetForm();
    }
  };

  handleSetState = (value, cd) => {
    this.setState({ form: { ...this.state.form, description: value } }, () =>
      cd()
    );
  };

  handleSetstate = data => {
    const { form } = this.state;
    form.id = data.id;
    form.title = data.title;
    if (data.location) {
      form.location.latitude = data.location.latitude;
      form.location.longitude = data.location.longitude;
      form.location.address = data.location.address;
    }
    if (data.category && data.category) {
      form.category = data.category;
    }
    if (data.offers) {
      form.offers = data.offers;
    }
    if (data.inquiry) {
      form.inquiry = data.inquiry;
    }
    if (data.procedure) {
      form.procedure = procedure[data.procedure];
    }
    if (data.typeContent) {
      form.typeContent = typeContent[data.typeContent.toLowerCase()];
      form.image = data.mediaUrl;
      form.file = data.mediaUrl;
    }
    if (data.targetGroup) {
      form.targetGroup = target_group[data.targetGroup.toLowerCase()];
    }
    form.description = data.description;
    form.startDate = moment(data.startDate);
    form.endDate = moment(data.endDate);
    form.budget = data.budget;
    if (data.address) {
      form.address.invoiceRecipient = data.address.invoiceRecipient;
      form.address.street = data.address.street;
      form.address.postalCode = data.address.postalCode;
      form.address.city = data.address.city;
      form.address.VATNO = data.address.VATNO;
      form.address.country = data.address.country;
      form.address.streetNumber = data.address.street;
    }
    form.maximumExpenses = data.maximumExpenses;
    form.typeId = data.typeId;
    form.fileName = data.fileName;
    form.error = false;
    this.setState({ form, isNewFile: false });
    this.calculateMaxClicks();
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.modalShow) {
      return { stepIndex: 0, isPreview: false };
    }
    if (
      nextProps.data &&
      nextProps.data.id &&
      nextProps.data.id !== prevState.form.id
    ) {
      return {
        modalTitle: Translations.modal_header.edit_campaign,
        isEdit: true
      };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.props;
    if ((data && data.id !== prevState.form.id) || !prevProps.modalShow) {
      this.handleSetstate(data);
    }
  }

  handleResetForm = () => {
    const { form } = this.state;
    form.title = "";
    form.location = {};
    form.location.latitude = "";
    form.location.longitude = "";
    form.location.address = "";
    form.category = "";
    form.categoryName = "";
    form.offerName = "";
    form.inquiryName = "";
    form.procedure = procedure.public;
    form.typeContent = typeContent.image;
    form.targetGroup = target_group.company;
    form.description = "";
    form.startDate = moment();
    form.endDate = moment().add(7, "days");
    form.budget = "";
    form.address = {};
    form.address.invoiceRecipient = "";
    form.address.street = "";
    form.address.postalCode = "";
    form.address.city = "";
    form.address.VATNO = "";
    form.address.country = "";
    form.address.streetNumber = "";
    form.image = null;
    form.filetype = true;
    form.file = null;
    form.typeId = "";
    form.maximumExpenses = "";
    form.error = false;
    this.setState({ form, isEdit: false });
  };

  componentWillUnmount = () => {
    this.handleResetForm();
  };

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
    form[event.values.name] = event.values.val;
    this.setState({ form });
  };

  handleSubmit = () => {
    const { isEdit, stepIndex, form } = this.state;
    if (!isEdit && stepIndex === 0) {
      if (!form.id) {
        this.handleCreateCampaign();
      } else {
        this.handleUpdateCampaign();
      }
    } else {
      this.handleUpdateCampaign();
    }
  };

  handleUpdateCampaign = () => {
    const { form, isNewFile, isFor } = this.state;
    if (this.validateFile()) {
      if (isNewFile) {
        const Data = new FormData();
        Data.append("image", form.file);
        Data.append("postType", "campaign");
        this.setState({ isLoading: true });
        const postType = isFor
          ? contentTypes.companyCampaign
          : contentTypes.creatorCampaign;
        this.props.uploadMedia(Data, form.filetype, "campaign").then(() => {
          const { mediaData } = this.props;
          if (mediaData && mediaData.media) {
            form.typeId = mediaData.media.id;
            form.fileName = mediaData.media.imageName;
            form.file = mediaData.media.path;
            form.image = mediaData.media.path;
            if (!form.maximumExpenses) {
              form.maximumExpenses = form.budget;
            }
            this.setState({ form, isNewFile: false }, () => {
              this.update();
            });
          }
        });
      } else {
        this.setState({ isLoading: true });
        this.update();
      }
    }
  };

  handleCreateCampaign = () => {
    const { form, isFor } = this.state;
    if (this.validateFile()) {
      const Data = new FormData();
      Data.append("image", form.file);
      Data.append("postType", "campaign");
      this.setState({ isLoading: true });
      const postType = isFor
        ? contentTypes.companyCampaign
        : contentTypes.creatorCampaign;
      this.props.uploadMedia(Data, form.filetype, "campaign").then(() => {
        const { mediaData } = this.props;
        if (mediaData && mediaData.media) {
          form.typeId = mediaData.media.id;
          form.fileName = mediaData.media.imageName;
          form.file = mediaData.media.path;
          form.image = mediaData.media.path;
          if (!form.maximumExpenses) {
            form.maximumExpenses = form.budget;
          }
          this.setState({ form, isNewFile: false }, () => {
            this.create();
          });
        }
      });
    }
  };

  create = () => {
    const { form, stepIndex } = this.state;
    this.props.createCampaign(form).then(() => {
      const { campaignData } = this.props;
      if (campaignData && campaignData.campaign && campaignData.campaign.id) {
        this.handleSetstate(campaignData.campaign);
        this.setState({ isLoading: false, stepIndex: stepIndex + 1 });
      }
      if (
        campaignData &&
        campaignData.error &&
        campaignData.error.data &&
        campaignData.error.data.message
      ) {
        this.setState({ isLoading: false });
        this.handleResetForm();
        this.props.handleModalInfoMsgShow(
          modalType.error,
          campaignData.error.data.message
        );
      }
    });
  };

  update = () => {
    const { form, stepIndex, isFor } = this.state;
    if (stepIndex === 1 && !isFor) {
      form.draft = true;
    }
    if (isFor && stepIndex === 3) {
      form.draft = true;
    }
    this.setState({ form });

    this.props.updateCampaign(form).then(() => {
      const { campaignData } = this.props;
      if (campaignData && campaignData.campaign && campaignData.campaign.id) {
        if (stepIndex === 1 && !isFor) {
          this.handleModalInfoShow();
          return;
        }
        if (isFor && stepIndex === 3) {
          this.handleModalInfoShow();
          return;
        }
        this.handleSetstate(campaignData.campaign);
        this.setState({ isLoading: false, stepIndex: stepIndex + 1 });
      }
      if (
        campaignData &&
        campaignData.error &&
        campaignData.error.data &&
        campaignData.error.data.message
      ) {
        this.setState({ isLoading: false });
        this.handleResetForm();
        this.props.handleModalInfoMsgShow(
          modalType.error,
          campaignData.error.data.message
        );
      }
    });
  };

  validateFile = () => {
    const { form } = this.state;
    if (!form.file) {
      this.props.handleModalInfoMsgShow(
        modalType.error,
        Translations.create_campaigns.ImageAndVedio
      );
      return false;
    }
    return true;
  };

  /* eslint-disable */
  validateForm = index => {
    const { form } = this.state;
    if (index === 0) {
      return (
        form.title &&
        form.location &&
        form.location.latitude &&
        form.location.longitude &&
        form.location.address &&
        form.category &&
        form.file &&
        form.offers &&
        form.inquiry &&
        form.description
      );
    } else if (index === 1) {
      return (
        form.startDate &&
        form.endDate &&
        form.endDate.diff(form.startDate, "days") >= 0 &&
        form.endDate.diff(form.startDate, "week") >= 1 &&
        form.endDate.diff(form.startDate, "month") <= 3 &&
        form.budget
      );
    } else if (index === 2) {
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
    form[event.values.name] = event.values.val;
    this.setState({ form });
  };

  handleResoreState = () => {
    this.handleResetForm();
  };

  handlePrivewOpen = () => {
    this.setState({ isPreview: true });
  };

  handlePrivewClose = () => {
    this.setState({ isPreview: false });
  };

  handleNext = () => {
    const { stepIndex } = this.state;
    if (stepIndex < 3) {
      if (this.validateForm(stepIndex)) {
        this.handleSubmit();
        this.setState({
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

  handleImage = file => {
    const reader = new FileReader();

    if (file.type.includes("image")) {
      const currentThis = this;
      reader.readAsDataURL(file);
      reader.onloadend = function() {
        const { form } = currentThis.state;
        // form.typeContent = typeContent.image;
        form.image = reader.result;
        form.file = file;
        form.fileType = true;
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
    this.setState({ isNewFile: true });
    this.handleImage(file);
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

  handleSelect = (isFor, selected) => {
    const { form } = this.state;
    if (isFor === "category") {
      form.categoryName = selected.name;
    }
    if (isFor === "offers") {
      form.offerName = selected.name;
    }
    if (isFor === "inquiry") {
      form.inquiryName = selected.name;
    }
    form[isFor] = selected.id;
    if (isFor === "budget") {
      this.calculateMaxClicks();
    }
    this.setState({ form });
  };

  calculateMaxClicks = () => {
    const { form } = this.state;
    let maxClicksValue = 0;
    const CPC = budgetCalculation.CPC;
    const budgetValue = form.budget;
    const noOfDaysRuntime = form.endDate.diff(form.startDate, "days");

    if (budgetValue) {
      maxClicksValue =
        parseInt(budgetValue) /
        parseInt(budgetCalculation.campaignPerApplicationCost);
      maxClicksValue = Math.floor(parseInt(maxClicksValue));
      this.setState({ maxClicks: maxClicksValue });
    }
  };

  handleAddress = event => {
    const { form } = this.state;
    form.address[event.values.name] = event.values.val;
    this.setState({ form });
  };
}

CampaignModal.propTypes = {
  modalShow: PropTypes.bool.isRequired,
  handleModalHide: PropTypes.func.isRequired,
  isFor: PropTypes.bool.isRequired,
  handleModalInfoMsgShow: PropTypes.func,
  createCampaign: PropTypes.func.isRequired,
  uploadMedia: PropTypes.func.isRequired,
  mediaData: PropTypes.any,
  campaignData: PropTypes.any,
  calculateMaxClicks: PropTypes.func,
  updateCampaign: PropTypes.func.isRequired,
  data: PropTypes.any
};

const mapStateToProps = state => ({
  mediaData: state.mediaData,
  campaignData: state.campaignData
});

const mapDispatchToProps = {
  createCampaign,
  uploadMedia,
  updateCampaign
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignModal);
