import React, { Component } from "react";
import PropTypes from "prop-types";
import { Translations } from "../../../../../lib/translations";
import { Button } from "../../../../ui-kit";

class CreateCreatorCampaignHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { stepIndex, modalTitle, handleSubmit, isFor } = this.props;
    return (
      <div className="row">
        <div className="col-sm-5 modal-title">{/* {modalTitle} */}</div>
        <div className="col-sm-7 text-right">
          <Button
            className="black_button"
            onClick={this.handleCancle}
            text={Translations.modal_header.cancle}
          />
          {stepIndex !== 0 && (
            <Button
              className="black_button"
              onClick={this.handleBack}
              text={Translations.modal_header.back}
            />
          )}
          {stepIndex !== 0 && stepIndex < 3 && (
            <Button
              className="black_button"
              onClick={this.handlePreview}
              text={Translations.modal_header.preview}
            />
          )}
          {stepIndex <= 3 && (
            <Button
              className="black_button"
              onClick={this.handleContinue}
              text={Translations.modal_header.continue}
            />
          )}
        </div>
      </div>
    );
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
    const { stepIndex, isFor } = this.props;
    if (stepIndex === 2 && !isFor) {
      this.props.handleSubmit();
    }
    else if(this.props.stepIndex < 5) {
      this.props.handleNext();
    } 
    else {
      console.log("data saved code");
    }
  };
}

CreateCreatorCampaignHeader.propTypes = {
  handleModalHide: PropTypes.func,
  handlePrivewOpen: PropTypes.func.isRequired,
  stepIndex: PropTypes.any.isRequired,
  handleNext: PropTypes.func,
  handlePrev: PropTypes.func,
  handleResoreState: PropTypes.func.isRequired,
  modalTitle: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func,
  isFor: PropTypes.bool
};

export default CreateCreatorCampaignHeader;
