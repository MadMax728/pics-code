import React, { Component } from "react";
import { StepOne, StepTwo, StepThree } from "./steps";
import { Preview } from "../preview";
import propTypes from "prop-types";
import {
  PaymentStepOne,
  PaymentStepTwo,
  PaymentStepThree
} from "../../../user/payment/steps";
import * as images from "../../../../../lib/constants/images";

class CreateCreatorCampaign extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      stepIndex,
      forThat,
      handleModalInfoShow,
      isPreview,
      handlePrivewClose
    } = this.props;

    return (
      <div>
        {isPreview && <Preview />}
        {isPreview && (
          <button
            onClick={handlePrivewClose}
            className={"closeBtn right-side-close"}
          >
            <img
              src={images.white_close}
              alt={"cross"}
              style={{ height: "10px", width: "10px" }}
            />
          </button>
        )}
        {!isPreview && (stepIndex === 0 && <StepOne />)}
        {!isPreview && (stepIndex === 1 && <StepTwo />)}
        {!isPreview && (stepIndex === 2 && <StepThree />)}
        {!isPreview &&
          (stepIndex === 3 && <PaymentStepOne forThat={forThat} />)}
        {!isPreview &&
          (stepIndex === 4 && <PaymentStepTwo forThat={forThat} />)}
        {!isPreview &&
          (stepIndex === 5 && (
            <PaymentStepThree
              forThat={forThat}
              handleModalInfoShow={handleModalInfoShow}
            />
          ))}
      </div>
    );
  }
}

CreateCreatorCampaign.propTypes = {
  stepIndex: propTypes.any.isRequired,
  forThat: propTypes.string.isRequired,
  handleModalInfoShow: propTypes.func.isRequired,
  isPreview: propTypes.bool.isRequired,
  handlePrivewClose: propTypes.func.isRequired
};

export default CreateCreatorCampaign;
