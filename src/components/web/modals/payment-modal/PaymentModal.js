import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import propTypes from "prop-types";

class PaymentModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <CustomBootstrapModal
        header={false}
        footer={false}
        closeBtn={false}
        modalShow={this.props.modalShow}
        handleModalHide={this.props.handleModalHide}
        modalBodyContent={<div> PaymentModal </div>}
      />
    );
  }
}

PaymentModal.propTypes = {
  modalShow: propTypes.bool,
  handleModalHide: propTypes.func
};

export default PaymentModal;
