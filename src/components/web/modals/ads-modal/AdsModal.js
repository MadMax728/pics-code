import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import PropTypes from "prop-types";
import { CreateAds, CreateAdsHeader } from "../../user";
import { modalType, target_group } from "../../../../lib/constants/enumerations";
import moment from "moment";

const initialState = {
  stepIndex: 0,
  form: {
    title: "",
    location: {
      lat: "",
      lng: "",
      address: ""
    },
    radius: "",
    category: "",
    description: "",
    target_group: target_group.female_and_male,
    call_to_action_button: "",
    insert_link: "",
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
    image: null,
    photo: "",
    photoFile: null
  }
};

class AdsModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = initialState;
  }

  componentWillUnmount = () => {
    this.setState(initialState);
  }

  handleSetState = (value, cd) => {
    this.setState({ form: { ...this.state.form, description: value } }, () =>
      cd()
    );
  };

  handleEditImage = image => {
    this.setState({ form: { ...this.state.form, image } });
  };

  handleSubmit = () => {
    console.log(this.state.form);
  };

  handleDate = (date, forThat) => {
    const { form } = this.state;
    form[forThat] = date;
    this.setState({ form });
  };
  
  handleActualImg = actual_img => {
    // Set Actual Image
    const { form } = this.state;
    form.actual_img = actual_img;
    this.setState({ form });

    // Set Image
    const reader = new FileReader();
    const file = actual_img;
    // let base64Data;
    const currentThis = this;
    reader.readAsDataURL(file);
    reader.onloadend = function() {
      const { form } = currentThis.state;
      form.image = reader.result;
      currentThis.setState({ form });
    };    
  };

  handleScale = scale => {
    this.setState({ scale });
  };

  handleChangeField = event => {
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
  };

  componentDidMount = () => {
    this.setState({ stepIndex: 0 });
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.modalShow) {
      this.setState({ stepIndex: 0 });
    }
  }
  handleResoreState = () => {
    this.setState({
      form: {}
    });
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
    this.props.handleModalInfoMsgShow(modalType.payment_confirmation, "Ad");
  };

  handleLocation = (location, address) => {
    const { form } = this.state;
    form.location.lat = location.lat
    form.location.lng = location.lng
    form.location.address = address;
    this.setState({ form });
  };

  handleSelect = (isFor , selected) => {
    const { form } = this.state;
    form[isFor] = selected;
    this.setState({ form });
  }

  render() {
    const { stepIndex, form } = this.state;
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
            handleResoreState={this.handleResoreState}
            handleModalHide={handleModalHide}
            handleNext={this.handleNext}
            handlePrev={this.handlePrev}
            stepIndex={stepIndex}
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
            handleSubmit={this.handleSubmit}
            handleDate={this.handleDate}
            handleEditImage={this.handleEditImage}
            handleLocation={this.handleLocation}
            handleActualImg={this.handleActualImg}
            handleScale={this.handleScale}
            handleSelect={this.handleSelect}
            handleSetState={this.handleSetState}
          />
        }
      />
    );
  }
}

AdsModal.propTypes = {
  modalShow: PropTypes.bool,
  handleModalHide: PropTypes.func,
  handleModalInfoMsgShow: PropTypes.func,
  // uploadFile: PropTypes.func,
  // handleResoreState: PropTypes.func
};

export default AdsModal;
