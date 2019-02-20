import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import PropTypes from "prop-types";
import { CMSPreview, CMSPreviewHeader } from "../../../back-office";

class CMSPreviewModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    const { handleModalInfoHide, handleModalHide, modalInfo, modalInfoShow } = this.props;
    return (
      <CustomBootstrapModal
      modalClassName={"modal fade preview-modal cms-preview-modal"}
      header
      modalHeaderContent={
        <CMSPreviewHeader
          handleModalHide={handleModalInfoHide}
          handleContinue={this.handleContinue}
        />
      }
      footer={false}
      modalShow={modalInfoShow}
      closeBtn
      handleModalHide={handleModalInfoHide}
        modalBodyContent={
          <CMSPreview
            handleModalInfoHide={handleModalInfoHide}
            handleModalHide={handleModalHide}
            modalInfo={modalInfo}
          />
        }
      />
    );
  }
}

CMSPreviewModal.propTypes = {
  modalInfoShow: PropTypes.bool,
  handleModalInfoHide: PropTypes.func,
  modalInfo: PropTypes.any,
  handleModalHide: PropTypes.func
};

export default CMSPreviewModal;
