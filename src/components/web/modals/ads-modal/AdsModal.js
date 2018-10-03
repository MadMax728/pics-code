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

  componentDidMount() {
    this.setState({ stepIndex: 0 });
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.modalShow) {
      this.setState({ stepIndex: 0 });
    }
  }

  handleNext = () => {
    const { stepIndex } = this.state;
    if (stepIndex < 4) {
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
    const { handleModalInfoShow } = this.props;

    let modalClassName = "";

    if (stepIndex === 0) {
      modalClassName = "modal fade create-ad-modal overflow-scroll";
    } else if (stepIndex !== 0 && stepIndex < 3) {
      modalClassName = "modal fade create-campaign-modal";
    } else if (stepIndex > 2 && stepIndex < 5) {
      modalClassName = "modal fade payment-overview-modal";
    }

    return (
      <CustomBootstrapModal
        modalClassName={modalClassName}
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
        modalBodyContent={
          <CreateAds
            stepIndex={this.state.stepIndex}
            forThat={"Ads"}
            handleModalInfoShow={handleModalInfoShow}
          />
        }
      />
    );
  }
}

AdsModal.propTypes = {
  modalShow: propTypes.bool,
  handleModalHide: propTypes.func,
  handleModalInfoShow: propTypes.func
};

export default AdsModal;
