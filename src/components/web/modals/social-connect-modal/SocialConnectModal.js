import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import propTypes from "prop-types";
import {
  SocialConnect,
  SocialConnectHeader
} from "../../../web/user/settings/";

class SocialConnectModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  handleContinue = () => {
    console.log("handlecontinue");
  };

  render() {
    const { handleModalInfoHide, modalInfoShow } = this.props;
    return (
      <CustomBootstrapModal
        modalClassName={"modal fade create-campaign-modal"}
        header
        modalHeaderContent={
          <SocialConnectHeader
            handleModalHide={this.props.handleModalInfoHide}
            handleContinue={this.handleContinue}
          />
        }
        footer={false}
        modalShow={modalInfoShow}
        closeBtn={false}
        handleModalHide={handleModalInfoHide}
        modalBodyContent={<SocialConnect />}
      />
    );
  }
}

SocialConnectModal.propTypes = {
  handleModalInfoHide: propTypes.func,
  modalInfoShow: propTypes.bool
};

export default SocialConnectModal;
