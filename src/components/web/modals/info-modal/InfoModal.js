import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import propTypes from "prop-types";
import { Info } from "../../user";

class InfoModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  handleNext = () => {
    const { stepIndex } = this.state;
    if (stepIndex < 1) {
      this.setState({ stepIndex: stepIndex + 1 });
    }
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  render() {
    return (
      <CustomBootstrapModal
        modalClassName={"modal fade create-ad-modal"}
        header={false}
        footer={false}
        modalShow={this.props.modalInfoShow}
        closeBtn={false}
        handleModalHide={this.props.handleModalInfoHide}
        modalBodyContent={<Info />}
      />
    );
  }
}

InfoModal.propTypes = {
  modalInfoShow: propTypes.bool,
  handleModalInfoHide: propTypes.func
};

export default InfoModal;
