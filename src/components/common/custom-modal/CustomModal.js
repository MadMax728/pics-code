import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as routes from "../../../lib/constants/routes";
import {
  MessageModal,
  UploadModal,
  AdsModal,
  CampaignModal
} from "../../web/modals";
import propTypes from "prop-types";
import { modalType, userType } from "../../../lib/constants/enumerations";
import { Auth } from "../../../auth";

class CustomModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  handleModalMessage = () => {
    return (
      <MessageModal
        modalShow={this.props.modalShow}
        handleModalHide={this.props.handleModalHide}
      />
    );
  };

  handleModalUpload = () => {
    return (
      <UploadModal
        modalShow={this.props.modalShow}
        handleModalHide={this.props.handleModalHide}
      />
    );
  };

  handleModalAds = () => {
    return (
      <AdsModal
        modalShow={this.props.modalShow}
        handleModalHide={this.props.handleModalHide}
        handleModalInfoMsgShow={this.props.handleModalInfoMsgShow}
      />
    );
  };

  handleModalCampaign = () => {
    const storage = Auth.extractJwtFromStorage();
    const isFor = JSON.parse(storage.userInfo).userType.toLowerCase() === userType.company;
    return (
      <CampaignModal
        modalShow={this.props.modalShow}
        handleModalHide={this.props.handleModalHide}
        // true for the company and false for the creator
        isFor={isFor}
        handleModalInfoMsgShow={this.props.handleModalInfoMsgShow}
      />
    );
  };

  handleModalRender = () => {
    return (
      <div>
        {this.props.modalType === modalType.upload && this.handleModalUpload()}
        {this.props.modalType === modalType.messages &&
          this.handleModalMessage()}
        {this.props.modalType === modalType.ads && this.handleModalAds()}
        {this.props.modalType === modalType.campaign &&
          this.handleModalCampaign()}
      </div>
    );
  };

  render() {
    return (
      <div>
        <Route path={routes.ROOT_ROUTE} render={this.handleModalRender} />
      </div>
    );
  }
}

CustomModal.propTypes = {
  modalShow: propTypes.bool.isRequired,
  modalType: propTypes.string.isRequired,
  handleModalHide: propTypes.func.isRequired,
  handleModalInfoShow: propTypes.func.isRequired,
  handleModalInfoMsgShow: propTypes.func.isRequired
};

export default CustomModal;
