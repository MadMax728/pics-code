import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import moment from "moment";

import { createAd, uploadMedia, updateAd } from "../../../../actions";

import { CreateAds, CreateAdsHeader } from "../../user";

import {
  modalType,
  target_group,
  typeContent,
  budgetCalculation
} from "../../../../lib/constants/enumerations";
import { Auth } from "../../../../auth";

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
  userInfo: null,
  isLoading: false,  
  maxClicks: 0,
  modalTitle: Translations.modal_header.create_ad,
  form: {
    id: "",
    title: "",
    location: {
      latitude: "",
      longitude: "",
      address: ""
    },
    radius: "",
    category: "",
    description: "",
    targetGroup: target_group.female_and_male,
    callToAction: "",
    insertLink: "",
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
    fileType: true,
    file: null,
    video: null,
    typeContent: typeContent.image,
    typeId: "",
    maximumExpenses: "",
    error: false
  },
  scale: ""
};

class AdsModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = initialState;
  }

  render() {
    const { stepIndex, form, userInfo, maxClicks, isLoading, isEdit, modalTitle } = this.state;
    const { handleModalHide, modalShow } = this.props;

    let modalClassName = "";

    if (stepIndex === 0) {
      modalClassName = "modal fade create-ad-modal overflow-scroll";
    } else if (stepIndex !== 0 && stepIndex < 3) {
      modalClassName = "modal fade create-campaign-modal";
    } else if (stepIndex > 2 && stepIndex < 5) {
      modalClassName = "modal fade payment-overview-modal";
    }

    return (
      <CustomBootstrapModal
        modalClassName={modalClassName}
        header
        modalHeaderContent={
          <CreateAdsHeader
            handleModalHide={handleModalHide}
            handleNext={this.handleNext}
            handlePrev={this.handlePrev}
            stepIndex={stepIndex}
            modalTitle={modalTitle}
            handleResetForm={this.handleResetForm}
          />
        }
        footer={false}
        modalShow={modalShow}
        closeBtn={false}
        handleModalHide={handleModalHide}
        modalBodyContent={
          <CreateAds
            stepIndex={stepIndex}
            forThat={"Ads"}
            handleModalInfoShow={this.handleModalInfoShow}
            handleChangeField={this.handleChangeField}
            form={form}
            maxClicks={maxClicks}
            userInfo={userInfo}
            handleSubmit={this.handleSubmit}
            handleDate={this.handleDate}
            handleEditImage={this.handleEditImage}
            handleLocation={this.handleLocation}
            handleActualImg={this.handleActualImg}
            handleScale={this.handleScale}
            handleSelect={this.handleSelect}
            handleSetState={this.handleSetState}
            handleAddress={this.handleAddress}
            setVoucherData={this.setVoucherData}
            calculateMaxClicks={this.calculateMaxClicks}
            isLoading={isLoading}
            isEdit={isEdit}
          />
        }
      />
    );
  }

  componentDidMount = () => {
    this.setState({ stepIndex: 0 });
    if (userInfo) {
      this.setState({ userInfo });
    }
    const { data } = this.props;
    console.log(data);
    
    if(data && data.id){
      this.setState({modalTitle: Translations.modal_header.edit_ad, isEdit: true, isNewFile: false})
      this.handleFillState(data);
    }
    else {
      this.handleResetForm();
    }
    
  };

  handleResetForm = () => {
    const { form } = this.state;
    form.title = "";
    form.location.latitude = "";
    form.location.longitude = "";
    form.location.address = "";
    form.category = "";
    form.typeContent = typeContent.image;
    form.targetGroup = target_group.female_and_male;
    form.description = "";
    form.radius = "";
    form.callToAction = "";
    form.insertLink = "" ;
    form.startDate = moment();
    form.endDate = moment();
    form.budget = "";
    form.address.invoiceRecipient = "";
    form.address.street = "";
    form.address.postalCode = "";
    form.address.city = "";
    form.address.VATNO = "";
    form.address.country = "";
    form.address.streetNumber = "";
    form.voucher = "";
    form.voucherAmount = "";
    form.voucherCode = "";
    form.image = null;
    form.filetype = true;
    form.file = null;
    form.video = null;
    form.typeId = "";
    form.maximumExpenses = "";
    form.error = false
    this.setState({form});
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.modalShow) {
      return { stepIndex: 0}
    }
    if (nextProps.data && nextProps.data.id) {
      return {modalTitle: Translations.modal_header.edit_ad, isEdit: true}
    }
    else {
      return null;
    }
  } 

  handleFillState = (data) => {
    const { form } = this.state;
    form.id = data.id;
    form.title = data.title;
    if(data.location) {
      form.location.latitude = data.location.latitude;
      form.location.longitude = data.location.longitude;
      form.location.address = data.location.address;
    }
    if(data.category && data.category[0] && data.category[0].id)
    {
      form.category = data.category[0].id;
    }
    if(data.radius) {
      form.radius = data.radius.id;
    }
    form.description = data.description;
    if(data.targetGroup) {
      form.targetGroup = target_group[data.targetGroup.toLowerCase()];
    }
    if(data.callToAction) {
      form.callToAction = data.callToAction.id;
    }
    form.insertLink = data.insertLink;
    form.startDate = moment.unix(data.startDate);
    form.endDate = moment.unix(data.endDate);
    form.budget = data.budget;
    if(data.typeContent) {
      form.typeContent = typeContent[data.typeContent.toLowerCase()];
      form.fileType = typeContent.image.toLowerCase() === data.typeContent.toLowerCase();
      if(form.fileType)  {
        form.image = data.mediaUrl;
        form.file = data.mediaUrl;
      }
      else if (!form.fileType) {
        form.video = data.mediaUrl;
        form.file = data.mediaUrl;
      }
    }
    if(data.address)
    {
      form.address.invoiceRecipient = data.address.invoiceRecipient;
      form.address.street = data.address.street;
      form.address.postalCode = data.address.postalCode;
      form.address.city = data.address.city;
      form.address.VATNO = data.address.VATNO;
      form.address.country = data.address.country;
      form.address.streetNumber = data.address.street;
    }
    form.voucherAmount = data.voucherAmount;
    form.voucherCode = data.voucherCode;
    form.maximumExpenses = data.maximumExpenses;
    form.typeId = data.typeId;
    form.error = false
    this.setState({form, isNewFile: false});
    this.calculateMaxClicks();
  }

  componentWillUnmount = () => {
    this.setState(initialState);
  };

  handleSetState = (value, cd) => {
    this.setState({ form: { ...this.state.form, description: value } }, () =>
      cd()
    );
  };

  handleEditImage = image => {
    this.setState({ form: { ...this.state.form, image } });
  };

  handleSubmit = () => {
    const { form, isEdit, isNewFile  } = this.state;

    if (form.file && isNewFile) {
      const Data = new FormData();
      if (form.fileType) {
        Data.append("image", form.file);
      } else {
        Data.append("video", form.file);
      }
      Data.append("postType", "ad");

      this.setState({isLoading: true});
      this.props.uploadMedia(Data, form.fileType).then(() => {
        if (this.props.mediaData && this.props.mediaData.media) {
          form.typeId = this.props.mediaData.media.id;
          form.file = null;
          form.image = null;
          form.video = null;
          if (!form.maximumExpenses) {
            form.maximumExpenses = form.budget;
          }
          this.setState({ form });
          
          if(isEdit){
            this.handleUpdateAd(form);
          }
          else {
            this.props.createAd(form).then(() => {
              if (
                this.props.adData &&
                this.props.adData.ad &&
                this.props.adData.ad.id
              ) {
                this.handleModalInfoShow();
                this.setState(initialState);
              }
            });
          }
        }
      });
    } 
    else if(form.file && !isNewFile) {
      this.handleUpdateAd(form);
    }
    else {
      this.props.handleModalInfoMsgShow(
        modalType.error,
        Translations.create_campaigns.ImageAndVedio
      );
    }
  };

  handleUpdateAd = (form) => {
    this.setState({isLoading: true});
    this.props.updateAd(form).then(() => {
      if (
        this.props.adData &&
        this.props.adData.ad &&
        this.props.adData.ad.id
      ) {
        this.handleModalInfoShow();
        this.handleResetForm();
        this.setState({isLoading: false});
      }
    });
  }

  handleDate = (date, forThat) => {
    const { form } = this.state;
    form[forThat] = date;
    this.setState({ form });
  };

  handleActualImg = e => {
    this.setState({isNewFile: true});
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
        form.typeContent = typeContent.image;
        currentThis.setState({ form });
      };
    } else if (file.type.includes("video")) {
      const currentThis = this;
      reader.readAsDataURL(file);
      reader.onloadend = function() {
        const { form } = currentThis.state;
        form.video = reader.result;
        form.file = file;
        form.fileType = false;
        form.typeContent = typeContent.video;
        currentThis.setState({ form });
      };
    } else {
      this.props.handleModalInfoMsgShow(
        modalType.error,
        Translations.create_campaigns.SelectProperMedia
      );
    }
  };

  handleScale = scale => {
    this.setState({ scale });
  };

  handleChangeField = event => {
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
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
    // console.log("form", form);
    if (index === 0) {
      return (
        form.title &&
        form.location &&
        form.location.latitude &&
        form.location.longitude &&
        form.location.address &&
        form.category &&
        form.radius &&
        form.description &&
        form.callToAction &&
        form.insertLink &&
        form.file
      );
    } else if (index === 1) {
      return (
        form.startDate &&
        form.endDate &&
        form.endDate.diff(form.startDate, "days") >= 0 &&
        form.budget
      );
    } else if (index === 2) {
      return (
        form.address && 
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
    this.props.handleModalInfoMsgShow(modalType.payment_confirmation, "Ad");
  };

  handleLocation = (location, address) => {
    const { form } = this.state;
    if(form && form.location) {
      form.location.latitude = location.lat;
      form.location.longitude = location.lng;
      form.location.address = address;
    }
    this.setState({ form });
  };

  handleSelect = (isFor, selected) => {
    const { form } = this.state;
    form[isFor] = selected;
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
    if (noOfDaysRuntime && budgetValue) {
      maxClicksValue =
        (parseInt(budgetValue) / parseInt(CPC)) * parseInt(noOfDaysRuntime);
      if (maxClicksValue > 1200) {
        maxClicksValue = 1200;
      }
      maxClicksValue = Math.floor(parseInt(maxClicksValue) / 3.58);
      this.setState({ maxClicks: maxClicksValue });
    }
  };

  handleAddress = event => {
    const { form } = this.state;
    form.address[event.target.name] = event.target.value;
    this.setState({ form });
  };
}

AdsModal.propTypes = {
  modalShow: PropTypes.bool,
  handleModalHide: PropTypes.func,
  handleModalInfoMsgShow: PropTypes.func,
  createAd: PropTypes.func.isRequired,
  uploadMedia: PropTypes.func.isRequired,
  mediaData: PropTypes.any,
  adData: PropTypes.any,
  maxClicks: PropTypes.any,
  calculateMaxClicks: PropTypes.func,
  updateAd: PropTypes.func.isRequired,
  data: PropTypes.any
};

const mapStateToProps = state => ({
  mediaData: state.mediaData,
  adData: state.adData
});

const mapDispatchToProps = {
  createAd,
  uploadMedia,
  updateAd
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdsModal);
