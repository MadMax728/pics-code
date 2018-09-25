import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import propTypes from "prop-types";

class AdsModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <CustomBootstrapModal
        header={false}
        footer={false}
        modalShow={this.props.modalShow}
        closeBtn={false}
        handleModalHide={this.props.handleModalHide}
        modalBodyContent={<div> AdsModal </div>}
      />
    );
  }
}

AdsModal.propTypes = {
  modalShow: propTypes.bool,
  handleModalHide: propTypes.func
};

export default AdsModal;
