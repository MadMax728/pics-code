import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import PropTypes from "prop-types";
import { Error } from "../../user";

class ErrorModal extends Component {
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
          <Error
            handleModalInfoHide={handleModalInfoHide}
            handleModalHide={handleModalHide}
            modalInfoMsg={modalInfoMsg}
          />
        }
      />
    );
  }
}

ErrorModal.propTypes = {
  modalInfoShow: PropTypes.bool,
  handleModalInfoHide: PropTypes.func,
  modalInfoMsg: PropTypes.string,
  handleModalHide: PropTypes.func
};

export default ErrorModal;
