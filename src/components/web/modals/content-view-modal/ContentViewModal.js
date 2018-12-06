import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import { ContentView } from "../../user";
import PropTypes from "prop-types";

class ContentViewModal extends Component {
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
        modalShow={this.props.modalInfoShow}
        closeBtn
        handleModalHide={this.props.handleModalInfoHide}
        modalBodyContent={<ContentView />}
      />
    );
  }
}

ContentViewModal.propTypes = {
  modalInfoShow: PropTypes.bool,
  handleModalInfoHide: PropTypes.func
};

export default ContentViewModal;
