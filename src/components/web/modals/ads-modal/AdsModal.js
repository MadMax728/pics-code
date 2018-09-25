import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import propTypes from "prop-types";
import { CreateAds, CreateAdsHeader } from "../../user";

class AdsModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      stepIndex: 0
    };
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
    const { stepIndex } = this.state;

    return (
      <CustomBootstrapModal
        modalClassName={
          stepIndex === 0
            ? "modal fade create-ad-modal"
            : "modal fade create-campaign-modal"
        }
        header={true}
        modalHeaderContent={
          <CreateAdsHeader
            handleModalHide={this.props.handleModalHide}
            handleNext={this.handleNext}
            handlePrev={this.handlePrev}
            stepIndex={this.state.stepIndex}
          />
        }
        footer={false}
        modalShow={this.props.modalShow}
        closeBtn={false}
        handleModalHide={this.props.handleModalHide}
        modalBodyContent={<CreateAds stepIndex={this.state.stepIndex} />}
      />
    );
  }
}

AdsModal.propTypes = {
  modalShow: propTypes.bool,
  handleModalHide: propTypes.func
};

export default AdsModal;
