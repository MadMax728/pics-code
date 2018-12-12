import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import PropTypes from "prop-types";
import { ActionConfirmation } from "../../user/action-confirmation";

class ConfirmationModal extends Component {
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
          <ActionConfirmation
            handleModalInfoHide={handleModalInfoHide}
            handleModalHide={handleModalHide}
            modalInfoMsg={modalInfoMsg}
          />
        }
      />
    );
  }
}

ConfirmationModal.propTypes = {
  modalInfoShow: PropTypes.bool,
  handleModalInfoHide: PropTypes.func,
  modalInfoMsg: PropTypes.string,
  handleModalHide: PropTypes.func
};

export default ConfirmationModal;
