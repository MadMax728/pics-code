import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import PropTypes from "prop-types";
import { Share } from "../../user";

class ShareModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    const { handleModalInfoHide, modalInfoShow, data } = this.props;
    return (
      <CustomBootstrapModal
        modalClassName={"modal fade share-popup"}
        header={false}
        footer={false}
        modalShow={modalInfoShow}
        closeBtn
        handleModalHide={handleModalInfoHide}
        modalBodyContent={
          <Share
            shareUrl={`${data.url}`}
            title={`Picstagraph`}
            handleModalInfoHide={handleModalInfoHide}
          />
        }
      />
    );
  }
}

ShareModal.propTypes = {
  handleModalInfoHide: PropTypes.func,
  modalInfoShow: PropTypes.bool,
  data: PropTypes.any
};

export default ShareModal;
