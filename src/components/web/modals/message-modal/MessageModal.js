import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import { Messages } from "../../user";
import propTypes from "prop-types";

class MessageModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <CustomBootstrapModal
        modalClassName={"modal fade messages-modal"}
        header={false}
        footer={false}
        modalShow={this.props.modalShow}
        closeBtn={true}
        handleModalHide={this.props.handleModalHide}
        modalBodyContent={<Messages />}
      />
    );
  }
}

MessageModal.propTypes = {
  modalShow: propTypes.bool,
  handleModalHide: propTypes.func
};

export default MessageModal;
