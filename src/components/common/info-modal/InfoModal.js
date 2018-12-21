import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as routes from "../../../lib/constants/routes";
import {
  ContentViewModal,
  PaymentConfirmationModal,
  ProcessedModal,
  EditProfileModal,
  ShareModal,
  ConfirmationModal,
  ErrorModal
} from "../../web/modals";
import PropTypes from "prop-types";
import { modalType } from "../../../lib/constants/enumerations";

class InfoModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  handleModalContentView = () => {
    return (
      <ContentViewModal
        modalInfoShow={this.props.modalInfoShow}
        handleModalInfoHide={this.props.handleModalInfoHide}
      />
    );
  };

  handleModalProcessed = () => {
    return (
      <ProcessedModal
        modalInfoShow={this.props.modalInfoShow}
        handleModalInfoHide={this.props.handleModalInfoHide}
      />
    );
  };

  handleModalPaymentConfirmation = () => {
    return (
      <PaymentConfirmationModal
        modalInfoShow={this.props.modalInfoShow}
        handleModalInfoHide={this.props.handleModalInfoHide}
        handleModalHide={this.props.handleModalHide}
        modalInfoMsg={this.props.modalInfoMsg}
      />
    );
  };

  handleModalError = () => {
    return (
      <ErrorModal
        modalInfoShow={this.props.modalInfoShow}
        handleModalInfoHide={this.props.handleModalInfoHide}
        handleModalHide={this.props.handleModalHide}
        modalInfoMsg={this.props.modalInfoMsg}
      />
    );
  };

  handleModalActionConfirmation = () => {
    return (
      <ConfirmationModal
        modalInfoShow={this.props.modalInfoShow}
        handleModalInfoHide={this.props.handleModalInfoHide}
        handleModalHide={this.props.handleModalHide}
        modalInfoMsg={this.props.modalInfoMsg}
      />
    );
  };

  handleModalEditProfile = () => {
    return (
      <EditProfileModal
        modalInfoShow={this.props.modalInfoShow}
        handleModalInfoHide={this.props.handleModalInfoHide}
        handleEditImage={this.props.handleEditImage}
        image={this.props.image}
        profile={this.props.profile}
        handleProfile={this.props.handleProfile}
      />
    );
  };

  handleModalShare = () => {
    return (
      <ShareModal
        modalInfoShow={this.props.modalInfoShow}
        handleModalInfoHide={this.props.handleModalInfoHide}
      />
    );
  };

  handleModalRender = () => {
    return (
      <div>
        {this.props.modalInfoType === modalType.payment_confirmation &&
          this.handleModalPaymentConfirmation()}
        {this.props.modalInfoType === modalType.content_view &&
          this.handleModalContentView()}
        {this.props.modalInfoType === modalType.processed &&
          this.handleModalProcessed()}
        {this.props.modalInfoType === modalType.edit_profile &&
          this.handleModalEditProfile()}
        {this.props.modalInfoType === modalType.share &&
          this.handleModalShare()}
        {this.props.modalInfoType === modalType.confirmation &&
          this.handleModalActionConfirmation()}
        {this.props.modalInfoType === modalType.error &&
          this.handleModalError()}
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

InfoModal.propTypes = {
  modalInfoShow: PropTypes.bool.isRequired,
  modalInfoType: PropTypes.string,
  handleModalInfoHide: PropTypes.func.isRequired,
  handleModalHide: PropTypes.func.isRequired,
  modalInfoMsg: PropTypes.string,
  handleEditImage: PropTypes.func,
  handleProfile: PropTypes.func,
  image: PropTypes.any,
  profile: PropTypes.any
};

export default InfoModal;
