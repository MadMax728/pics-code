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
            handleModalHide={this.props.handleModalHide}
            handleNext={this.handleNext}
            handlePrev={this.handlePrev}
            stepIndex={this.state.stepIndex}
          />
        }
        footer={false}
        modalShow={this.props.modalShow}
        closeBtn={false}
        handleModalHide={this.props.handleModalHide}
        modalBodyContent={<Payment stepIndex={this.state.stepIndex} />}
      />
    );
  }
}

PaymentModal.propTypes = {
  modalShow: propTypes.bool,
  handleModalHide: propTypes.func
};

export default PaymentModal;
