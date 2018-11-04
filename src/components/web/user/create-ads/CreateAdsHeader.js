import React, { Component } from "react";
import propTypes from "prop-types";

class CreateAdsHeader extends Component {
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

  handleContinue = () => {
    if (this.props.stepIndex < 4) {
      this.props.handleNext();
    } else {
      console.log("data saved code");
    }
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
          {stepIndex <= 3 && (
            <button className="black_button" onClick={this.handleContinue}>
              Continue
            </button>
          )}
        </div>
      </div>
    );
  }
}

CreateAdsHeader.propTypes = {
  handleModalHide: propTypes.func,
  stepIndex: propTypes.any.isRequired,
  handleNext: propTypes.func,
  handlePrev: propTypes.func,
  handleResoreState: propTypes.func
};

export default CreateAdsHeader;