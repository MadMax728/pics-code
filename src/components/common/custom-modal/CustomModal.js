import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as routes from "../../../lib/constants/routes";
import {
  UploadModal,
  AdsModal,
  CampaignModal,
  ConfirmationModal,
  PicsModal,
  SubscribeModal
} from "../../web/modals";
import PropTypes from "prop-types";
import { modalType, userType } from "../../../lib/constants/enumerations";
import { Auth } from "../../../auth";

class CustomModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Route path={routes.ROOT_ROUTE} render={this.handleModalRender} />
      </div>
    );
  }

  handleModalUpload = () => {
    return (
      <UploadModal
        modalShow={this.props.modalShow}
        handleModalHide={this.props.handleModalHide}
        handleModalInfoMsgShow={this.props.handleModalInfoMsgShow}
        data={this.props.data}
        handleEditImage={this.props.handleEditImage}
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
    // get  user from local storage
    const storage = Auth.extractJwtFromStorage();
    // parse the user info
    const userInfo = JSON.parse(storage.userInfo) || {};
    // set default to false
    let isFor = false;
    // check if user is compnay
    if (userInfo && userInfo.userType) {
      isFor = userInfo.userType.toLowerCase() === userType.company;
    }

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

  handleModalEditCampaign = () => {
    // get  user from local storage
    const storage = Auth.extractJwtFromStorage();
    // parse the user info
    const userInfo = JSON.parse(storage.userInfo) || {};
    // set default to false
    let isFor = false;
    // check if user is compnay
    if (userInfo && userInfo.userType) {
      isFor = userInfo.userType.toLowerCase() === userType.company;
      // isFor = false; // For Creator Campaign
    }

    return (
      <CampaignModal
        modalShow={this.props.modalShow}
        handleModalHide={this.props.handleModalHide}
        // true for the company and false for the creator
        isFor={isFor}
        handleModalInfoMsgShow={this.props.handleModalInfoMsgShow}
        data={this.props.data}
      />
    );
  };

  handleModalEditAd = () => {
    return (
      <AdsModal
        modalShow={this.props.modalShow}
        handleModalHide={this.props.handleModalHide}
        handleModalInfoMsgShow={this.props.handleModalInfoMsgShow}
        data={this.props.data}
      />
    );
  };

  handleModalActionConfirmation = () => {
    return (
      <ConfirmationModal
        modalShow={this.props.modalShow}
        handleModalHide={this.props.handleModalHide}
        handleModalInfoMsgShow={this.props.handleModalInfoMsgShow}
        data={this.props.data}
        history={this.props.history}
      />
    );
  };

  handleModalSubscribe = () => {
    return (
      <SubscribeModal
        modalShow={this.props.modalShow}
        handleModalHide={this.props.handleModalHide}
        handleModalInfoMsgShow={this.props.handleModalInfoMsgShow}
        data={this.props.data}
        history={this.props.history}
      />
    );
  };

  handleModalUserpics = () => {
    return (
      <PicsModal
        modalShow={this.props.modalShow}
        handleModalHide={this.props.handleModalHide}
        handleModalInfoMsgShow={this.props.handleModalInfoMsgShow}
        data={this.props.data}
      />
    );
  };

  handleModalRender = () => {
    return (
      <div>
        {this.props.modalType === modalType.upload && this.handleModalUpload()}
        {this.props.modalType === modalType.ads && this.handleModalAds()}
        {this.props.modalType === modalType.campaign &&
          this.handleModalCampaign()}
        {this.props.modalType === modalType.editCampaign &&
          this.handleModalEditCampaign()}
        {this.props.modalType === modalType.editAds && this.handleModalEditAd()}
        {this.props.modalType === modalType.confirmation &&
          this.handleModalActionConfirmation()}
        {this.props.modalType === modalType.userpics &&
          this.handleModalUserpics()}
        {this.props.modalType === modalType.subscribe &&
          this.handleModalSubscribe()}
      </div>
    );
  };
}

CustomModal.propTypes = {
  modalShow: PropTypes.bool.isRequired,
  modalType: PropTypes.string.isRequired,
  handleModalHide: PropTypes.func.isRequired,
  handleModalInfoMsgShow: PropTypes.func.isRequired,
  data: PropTypes.any,
  history: PropTypes.any,
  handleEditImage: PropTypes.func
};

export default CustomModal;
