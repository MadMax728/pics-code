import React, { Component } from "react";
import PropTypes from "prop-types";
import { Translations } from "../../../../../lib/translations";
import { Button, InlineLoading } from "../../../../ui-kit";
import { BASE_CAMPAIGN_INFORMATION_ROUTE } from "../../../../../lib/constants";

class CreateCompanyCampaignHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { stepIndex, form, isLoading } = this.props;
    return (
      <div className="row">
        {isLoading && <InlineLoading />}
        <div className="col-sm-5 modal-modalTitle">{/* {modalTitle} */}</div>
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
          {stepIndex !== 0 && stepIndex < 2 && (
            <a
              href={`${BASE_CAMPAIGN_INFORMATION_ROUTE}company/${form.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="black_button"
                onClick={this.handlePreview}
                text={Translations.modal_header.preview}
              />
            </a>
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
    // this.props.handlePrivewOpen();
  };

  handleContinue = () => {
    const { stepIndex, isFor } = this.props;
    if (stepIndex === 1 && !isFor) {
      this.props.handleSubmit();
    } else if (this.props.stepIndex < 4) {
      this.props.handleNext();
    } else {
      console.log("data saved code");
    }
  };
}

CreateCompanyCampaignHeader.propTypes = {
  handleModalHide: PropTypes.func,
  stepIndex: PropTypes.any.isRequired,
  handleNext: PropTypes.func,
  handlePrev: PropTypes.func,
  handleResoreState: PropTypes.func.isRequired,
  form: PropTypes.any,
  handleSubmit: PropTypes.func,
  isFor: PropTypes.bool,
  isLoading: PropTypes.bool
};

export default CreateCompanyCampaignHeader;
