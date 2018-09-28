import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as routes from "../../../lib/constants/routes";
import { ContentViewModal, PaymentConfirmationModal } from "../../web/modals";
import propTypes from "prop-types";
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

  handleModalPaymentConfirmation = () => {
    return (
      <PaymentConfirmationModal
        modalInfoShow={this.props.modalInfoShow}
        handleModalInfoHide={this.props.handleModalInfoHide}
        handleModalHide={this.props.handleModalHide}
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
  modalInfoShow: propTypes.bool.isRequired,
  modalInfoType: propTypes.string,
  handleModalInfoHide: propTypes.func.isRequired,

  handleModalHide: propTypes.func.isRequired
};

export default InfoModal;
