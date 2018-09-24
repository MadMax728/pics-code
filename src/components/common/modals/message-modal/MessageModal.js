import React, { Component } from "react";
import { ModalUi } from "../../../ui-kit";
import { Translations } from "../../../../lib/translations";
import propTypes from "prop-types";

const message_modal_details = {
  header: false,
  headerName: "",
  closeBtn: true
};

class MessageModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <ModalUi
        modalShow={this.props.modalShow}
        handleModalHide={this.props.handleModalHide}
        data={message_modal_details}
        modalFor="Messages"
      />
    );
  }
}

MessageModal.propTypes = {
  modalShow: propTypes.bool,
  handleModalHide: propTypes.func
};

export default MessageModal;
