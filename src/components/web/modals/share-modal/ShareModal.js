import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import propTypes from "prop-types";
import { Share } from "../../user";

class ShareModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    const { handleModalInfoHide, modalInfoShow } = this.props;
    return (
      <CustomBootstrapModal
        modalClassName={"modal fade share-popup"}
        header={false}
        footer={false}
        modalShow={modalInfoShow}
        closeBtn={false}
        handleModalHide={handleModalInfoHide}
        modalBodyContent={<Share handleModalInfoHide={handleModalInfoHide} />}
      />
    );
  }
}

ShareModal.propTypes = {
  handleModalInfoHide: propTypes.func,
  modalInfoShow: propTypes.bool
};

export default ShareModal;
