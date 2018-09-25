import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import propTypes from "prop-types";

class UploadModal extends Component {
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
        modalBodyContent={<div> UploadModal </div>}
      />
    );
  }
}

UploadModal.propTypes = {
  modalShow: propTypes.bool,
  handleModalHide: propTypes.func
};

export default UploadModal;
