import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import propTypes from "prop-types";
import { PaymentConfirmation } from "../../user";

class PaymentConfirmationModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    const { handleModalInfoHide, handleModalHide, modalInfoMsg } = this.props;
    return (
      <CustomBootstrapModal
        modalClassName={"modal fade payment-confirmation-modal"}
        header={false}
        footer={false}
        modalShow={this.props.modalInfoShow}
        closeBtn={false}
        handleModalHide={this.props.handleModalInfoHide}
        modalBodyContent={
          <PaymentConfirmation
            handleModalInfoHide={handleModalInfoHide}
            handleModalHide={handleModalHide}
            modalInfoMsg={modalInfoMsg}
          />
        }
      />
    );
  }
}

PaymentConfirmationModal.propTypes = {
  modalInfoShow: propTypes.bool,
  handleModalInfoHide: propTypes.func,
  modalInfoMsg: propTypes.string,
  handleModalHide: propTypes.func
};

export default PaymentConfirmationModal;
