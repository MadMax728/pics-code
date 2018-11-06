import React, { Component } from "react";
import propTypes from "prop-types";
import { Translations } from "../../../../../lib/translations";

class CreateCreatorCampaignHeader extends Component {
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
        <div className="col-sm-5 modal-title">
          {Translations.modal_header.create_campaign}
        </div>
        <div className="col-sm-7 text-right">
          <button className="black_button" onClick={this.handleCancle}>
            {Translations.modal_header.cancle}
          </button>
          {stepIndex !== 0 && (
            <button className="black_button" onClick={this.handleBack}>
              {Translations.modal_header.back}
            </button>
          )}
          {stepIndex !== 0 &&
            stepIndex < 3 && (
              <button className="black_button" onClick={this.handlePreview}>
                {Translations.modal_header.preview}
              </button>
            )}
          {stepIndex <= 4 && (
            <button className="black_button" onClick={this.handleContinue}>
              {Translations.modal_header.continue}
            </button>
          )}
        </div>
      </div>
    );
  }
}

CreateCreatorCampaignHeader.propTypes = {
  handleModalHide: propTypes.func,
  handlePrivewOpen: propTypes.func.isRequired,
  stepIndex: propTypes.any.isRequired,
  handleNext: propTypes.func,
  handlePrev: propTypes.func
};

export default CreateCreatorCampaignHeader;
