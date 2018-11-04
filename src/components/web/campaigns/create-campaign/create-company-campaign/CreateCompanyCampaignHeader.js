import React, { Component } from "react";
import propTypes from "prop-types";

class CreateCompanyCampaignHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleCancle = () => {
    this.props.handleModalHide();
    this.props.handleResoreState();
  };

  handleBack = () => {
    this.props.handlePrev();
  };

  handleNext = () => {
    this.props.handleNext();
  };

  handlePreview = () => {
    this.props.handlePrivewOpen();
  };

  handleContinue = () => {
    if (this.props.stepIndex < 5) {
      this.props.handleNext();
    } else {
      console.log("data saved code");
    }
  };

  render() {
    const { stepIndex } = this.props;
    return (
      <div className="row">
        <div className="col-sm-5 modal-title">Create Campaign</div>
        <div className="col-sm-7 text-right">
          <button className="black_button" onClick={this.handleCancle}>
            Cancel
          </button>
          {stepIndex !== 0 && (
            <button className="black_button" onClick={this.handleBack}>
              Back
            </button>
          )}
          {stepIndex !== 0 &&
            stepIndex < 3 && (
              <button className="black_button" onClick={this.handlePreview}>
                Priview
              </button>
            )}
          {stepIndex <= 4 && (
            <button className="black_button" onClick={this.handleContinue}>
              Continue
            </button>
          )}
        </div>
      </div>
    );
  }
}

CreateCompanyCampaignHeader.propTypes = {
  handlePrivewOpen: propTypes.func.isRequired,
  handleModalHide: propTypes.func,
  stepIndex: propTypes.any.isRequired,
  handleNext: propTypes.func,
  handlePrev: propTypes.func,
  handleResoreState: propTypes.func.isRequired
};

export default CreateCompanyCampaignHeader;
