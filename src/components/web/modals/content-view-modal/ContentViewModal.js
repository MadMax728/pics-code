import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import { ContentView } from "../../user";
import propTypes from "prop-types";

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
        closeBtn={true}
        handleModalHide={this.props.handleModalInfoHide}
        modalBodyContent={<ContentView />}
      />
    );
  }
}

ContentViewModal.propTypes = {
  modalInfoShow: propTypes.bool,
  handleModalInfoHide: propTypes.func
};

export default ContentViewModal;
