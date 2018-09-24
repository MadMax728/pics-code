import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as routes from "../../../../lib/constants/routes";
import { MessageModal } from "../message-modal";
import { UploadModal } from "../upload-modal";
import propTypes from "prop-types";

class Modal extends Component {
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

  render() {
    return (
      <div>
        <Route path={routes.ROOT_ROUTE} component={this.handleModalMessage} />
        <Route path={routes.ROOT_ROUTE} component={this.handleModalUpload} />
      </div>
    );
  }
}

Modal.propTypes = {
  modalShow: propTypes.bool,
  handleModalHide: propTypes.func
};

export default Modal;
