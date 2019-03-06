import React, { Component } from "react";
import PropTypes from "prop-types";
import { Translations } from "../../../../lib/translations";
import { Button } from "../../../ui-kit";

class CreateAdsHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleCancle = () => {
    this.props.handleModalHide();
    this.props.handleResetForm();
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
    const { stepIndex, modalTitle } = this.props;
    return (
      <div className="row">
        <div className="col-sm-6 modal-title">{/* {modalTitle} */}</div>
        <div className="col-sm-6 text-right">
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
          {stepIndex <= 2 && (
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
}

CreateAdsHeader.propTypes = {
  handleModalHide: PropTypes.func,
  stepIndex: PropTypes.any.isRequired,
  handleNext: PropTypes.func,
  handlePrev: PropTypes.func,
  modalTitle: PropTypes.string,
  handleResetForm: PropTypes.func.isRequired
};

export default CreateAdsHeader;
