import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import propTypes from "prop-types";
import { Upload, UploadHeader } from "../../user";

class UploadModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <CustomBootstrapModal
        modalClassName={"modal fade upload-image-modal"}
        header={true}
        modalHeaderContent={
          <UploadHeader handleModalHide={this.props.handleModalHide} />
        }
        footer={false}
        closeBtn={false}
        modalShow={this.props.modalShow}
        handleModalHide={this.props.handleModalHide}
        modalBodyContent={<Upload />}
      />
    );
  }
}

UploadModal.propTypes = {
  modalShow: propTypes.bool,
  handleModalHide: propTypes.func
};

export default UploadModal;
