import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import propTypes from "prop-types";
import { CreateCampaign, CreateCampaignHeader } from "../../campaigns";

class CampaignModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      stepIndex: 0
    };
  }

  handleNext = () => {
    const { stepIndex } = this.state;
    if (stepIndex < 3) {
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
        modalClassName={"modal fade create-campaign-modal"}
        header={true}
        modalHeaderContent={
          <CreateCampaignHeader
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
        modalBodyContent={<CreateCampaign stepIndex={this.state.stepIndex} />}
      />
    );
  }
}

CampaignModal.propTypes = {
  modalShow: propTypes.bool,
  handleModalHide: propTypes.func
};

export default CampaignModal;
