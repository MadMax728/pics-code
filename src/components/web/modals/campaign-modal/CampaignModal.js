import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import propTypes from "prop-types";
import {
  CreateCompanyCampaign,
  CreateCompanyCampaignHeader,
  CreateCreatorCampaign,
  CreateCreatorCampaignHeader
} from "../../campaigns";

class CampaignModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      stepIndex: 0
    };
  }

  componentDidMount() {
    this.setState({ stepIndex: 0 });
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (!nextProps.modalShow) {
      this.setState({ stepIndex: 0 });
    }
  }

  handleNext = () => {
    const { stepIndex } = this.state;
    if (stepIndex < 5) {
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
    const { isFor, handleModalInfoShow } = this.props;
    const { stepIndex } = this.state;

    let modalClassName = "";

    if (stepIndex === 0) {
      modalClassName = "modal fade create-campaign-modal overflow-scroll";
    } else if (stepIndex !== 0 && stepIndex < 4) {
      modalClassName = "modal fade create-campaign-modal";
    } else if (stepIndex > 3 && stepIndex < 6) {
      modalClassName = "modal fade payment-overview-modal";
    }

    return (
      <CustomBootstrapModal
        modalClassName={modalClassName}
        header={true}
        modalHeaderContent={
          isFor ? (
            <CreateCompanyCampaignHeader
              handleModalHide={this.props.handleModalHide}
              handleNext={this.handleNext}
              handlePrev={this.handlePrev}
              stepIndex={this.state.stepIndex}
            />
          ) : (
            <CreateCreatorCampaignHeader
              handleModalHide={this.props.handleModalHide}
              handleNext={this.handleNext}
              handlePrev={this.handlePrev}
              stepIndex={this.state.stepIndex}
            />
          )
        }
        footer={false}
        modalShow={this.props.modalShow}
        closeBtn={false}
        handleModalHide={this.props.handleModalHide}
        modalBodyContent={
          isFor ? (
            <CreateCompanyCampaign
              stepIndex={this.state.stepIndex}
              isFor={this.props.isFor}
              forThat={"Campaign"}
              handleModalInfoShow={handleModalInfoShow}
            />
          ) : (
            <CreateCreatorCampaign
              stepIndex={this.state.stepIndex}
              isFor={this.props.isFor}
              forThat={"Campaign"}
              handleModalInfoShow={handleModalInfoShow}
            />
          )
        }
      />
    );
  }
}

CampaignModal.propTypes = {
  modalShow: propTypes.bool.isRequired,
  handleModalHide: propTypes.func.isRequired,
  isFor: propTypes.bool.isRequired,
  handleModalInfoShow: propTypes.func
};

export default CampaignModal;
