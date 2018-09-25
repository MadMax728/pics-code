import React, { Component } from "react";
import propTypes from "prop-types";

class CreateCampaignHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleCancle = () => {
    this.props.handleModalHide();
  };

  handleBack = () => {
    this.props.handlePrev();
  };

  handleNext = () => {
    this.props.handleNext();
  };

  handleContinue = () => {
    console.log("data saved code");
  };

  render() {
    const { stepIndex } = this.props;
    return (
      <div className="row">
        <div className="col-sm-6 modal-title">Create Ad</div>
        <div className="col-sm-6 text-right">
          <button className="black_button" onClick={this.handleCancle}>
            Cancel
          </button>
          {stepIndex !== 0 && (
            <button className="black_button" onClick={this.handleBack}>
              Back
            </button>
          )}
          {stepIndex < 2 && (
            <button className="black_button" onClick={this.handleNext}>
              Next
            </button>
          )}
          {stepIndex === 2 && (
            <button className="black_button" onClick={this.handleContinue}>
              Continue
            </button>
          )}
        </div>
      </div>
    );
  }
}

CreateCampaignHeader.propTypes = {
  handleModalHide: propTypes.func,
  stepIndex: propTypes.any.isRequired,
  handleNext: propTypes.func,
  handlePrev: propTypes.func
};

export default CreateCampaignHeader;
