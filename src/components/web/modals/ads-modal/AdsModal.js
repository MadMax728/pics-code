import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import propTypes from "prop-types";
import { CreateAds, CreateAdsHeader } from "../../user";
import { modalType } from "../../../../lib/constants/enumerations";

class AdsModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      stepIndex: 0,
      form: {
        title: "",
        location: "",
        redius: "",
        category: "",
        description: "",
        target_group: "male-female",
        call_to_action_button: "",
        insert_link: "",
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

  handleSubmit = () => {
    console.log(this.state.form);
  };

  handleChangeField = event => {
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
    console.log(this.state.form);
  };

  componentDidMount() {
    this.setState({ stepIndex: 0 });
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.modalShow) {
      this.setState({ stepIndex: 0 });
      console.log("ahi ave che");

      this.forceUpdate();
    }
  }

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
          />
        }
      />
    );
  }
}

AdsModal.propTypes = {
  modalShow: propTypes.bool,
  handleModalHide: propTypes.func,
  handleModalInfoMsgShow: propTypes.func
};

export default AdsModal;
