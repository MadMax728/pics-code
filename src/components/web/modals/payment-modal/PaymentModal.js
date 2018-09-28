import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import propTypes from "prop-types";
import { Payment, PaymentHeader } from "../../user";

class PaymentModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      stepIndex: 2
    };
  }

  handleNext = () => {
    const { stepIndex } = this.state;
    if (stepIndex < 2) {
      this.setState({ stepIndex: stepIndex + 1 });
    }
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  render() {
    const { stepIndex } = this.state;
    const {
      handleModalHide,
      modalShow,
      modalInfoShow,
      handleModalInfoShow
    } = this.props;

    return (
      <CustomBootstrapModal
        modalClassName={
          stepIndex === 0
            ? "modal fade create-campaign-modal"
            : "modal fade payment-overview-modal"
        }
        header={true}
        modalHeaderContent={
          <PaymentHeader
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
          <Payment
            stepIndex={stepIndex}
            modalInfoShow={modalInfoShow}
            handleModalInfoShow={handleModalInfoShow}
          />
        }
      />
    );
  }
}

PaymentModal.propTypes = {
  modalShow: propTypes.bool,
  modalInfoShow: propTypes.bool,
  handleModalHide: propTypes.func,
  handleModalInfoShow: propTypes.func
};

export default PaymentModal;
