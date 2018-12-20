import React, { Component } from "react";
import PropTypes from "prop-types";
import { Translations } from "../../../../lib/translations";

class CreateAdsHeader extends Component {
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
        <div className="col-sm-6 modal-title">
          {Translations.modal_header.create_ad}
        </div>
        <div className="col-sm-6 text-right">
          <button className="black_button" onClick={this.handleCancle}>
            {Translations.modal_header.cancle}
          </button>
          {stepIndex !== 0 && (
            <button className="black_button" onClick={this.handleBack}>
              {Translations.modal_header.back}
            </button>
          )}
          {stepIndex <= 2 && (
            <button className="black_button" onClick={this.handleContinue}>
              {Translations.modal_header.continue}
            </button>
          )}
        </div>
      </div>
    );
  }
}

CreateAdsHeader.propTypes = {
  handleModalHide: PropTypes.func,
  stepIndex: PropTypes.any.isRequired,
  handleNext: PropTypes.func,
  handlePrev: PropTypes.func,
};

export default CreateAdsHeader;
