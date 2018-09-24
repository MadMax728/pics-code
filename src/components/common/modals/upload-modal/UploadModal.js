import React, { Component } from "react";
import { ModalUi } from "../../../ui-kit";
import { Translations } from "../../../../lib/translations";
import propTypes from "prop-types";

const upload_modal_details = {
  header: true,
  headerName: "Upload image",
  closeBtn: false
};

class UploadModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <ModalUi
        modalShow={this.props.modalShow}
        handleModalHide={this.props.handleModalHide}
        data={upload_modal_details}
        modalFor="Upload"
      />
    );
  }
}

UploadModal.propTypes = {
  modalShow: propTypes.bool,
  handleModalHide: propTypes.func
};

export default UploadModal;
