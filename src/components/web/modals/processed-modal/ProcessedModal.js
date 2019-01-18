import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import PropTypes from "prop-types";
import { Processed } from "../../../back-office";

class ProcessedModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    const { handleModalInfoHide, modalInfoShow, modalInfo, statusCallback } = this.props;
    return (
      <CustomBootstrapModal
        modalClassName={"modal fade processed-popup"}
        header={false}
        footer={false}
        modalShow={modalInfoShow}
        closeBtn={false}
        handleModalHide={handleModalInfoHide}
        modalBodyContent={
          <Processed handleModalInfoHide={handleModalInfoHide} modalInfo={modalInfo} statusCallback={statusCallback}/>
        }
      />
    );
  }
}

ProcessedModal.propTypes = {
  handleModalInfoHide: PropTypes.func,
  modalInfoShow: PropTypes.bool,
  modalInfo: PropTypes.any,
  statusCallback: PropTypes.any
};

export default ProcessedModal;
